import { supabaseAdmin } from '@/lib/supabase';
import { sendConsultationSubmissionEmail as sendEmail } from '@/lib/email';

export interface ConsultationRequest {
  name: string;
  email?: string;
  phone?: string;
  contact?: string; // Legacy field
  company?: string;
  goal?: string;
  industry?: string;
  teamSize?: string;
  challenge?: string;
  wantsCall?: boolean;
  companyWebsite?: string;
  automationRequirements?: string;
}

export interface ConsultationResponse {
  ok: boolean;
  error?: string;
  details?: string;
}

/**
 * Submit a consultation request to the database
 * Supports both new format (AI Workflow Audit) and legacy format
 */
export async function submitConsultationRequest(
  data: ConsultationRequest
): Promise<ConsultationResponse> {
  try {
    // Prepare data for insertion
    const insertData: any = {
      name: data.name?.trim() || '',
      company: data.company?.trim() || null,
      goal: data.goal?.trim() || data.automationRequirements?.trim() || 'Contact form submission',
    };

    // Handle contact field (legacy or new format) - REQUIRED field
    // Use email first, then phone, then contact, or default to email if available
    if (data.email) {
      insertData.email = data.email.trim();
      insertData.contact = data.email.trim(); // Set contact to email
    } else if (data.phone) {
      insertData.phone = data.phone.trim();
      insertData.contact = data.phone.trim(); // Set contact to phone
    } else if (data.contact) {
      insertData.contact = data.contact.trim();
    }
    
    // Ensure contact is set (required field)
    if (!insertData.contact && (data.email || data.phone)) {
      insertData.contact = data.email?.trim() || data.phone?.trim() || '';
    }

    // New format fields (AI Workflow Audit)
    if (data.industry) {
      insertData.industry = data.industry.trim();
    }
    if (data.teamSize) {
      insertData.team_size = data.teamSize.trim();
    }
    if (data.challenge) {
      insertData.challenge = data.challenge.trim();
    }
    if (data.wantsCall !== undefined) {
      insertData.wants_call = data.wantsCall;
    }
    if (data.companyWebsite) {
      insertData.company_website = data.companyWebsite.trim();
    }
    if (data.automationRequirements) {
      insertData.automation_requirements = data.automationRequirements.trim();
    }

    // Validate required fields
    if (!insertData.name || insertData.name.trim() === '') {
      return { ok: false, error: 'Name is required' };
    }
    if (!insertData.contact || insertData.contact.trim() === '') {
      return { ok: false, error: 'Email or phone number is required' };
    }

    // Ensure goal is set (required field)
    if (!insertData.goal || insertData.goal.trim() === '') {
      insertData.goal = 'Contact form submission';
    }

    console.log('Submitting consultation request:', insertData);

    // Insert into database
    const { error, data: insertedData } = await supabaseAdmin
      .from('consultation_requests')
      .insert(insertData)
      .select()
      .single();

    if (error) {
      console.error('Consultation submission error:', error);
      console.error('Error details:', error.details);
      console.error('Error hint:', error.hint);
      return {
        ok: false,
        error: 'Failed to submit consultation request',
        details: error.message || error.details || 'Unknown database error',
      };
    }

    console.log('Consultation request submitted successfully:', insertedData);

    // Send email notification (non-blocking)
    try {
      const emailData = {
        name: insertData.name,
        email: insertData.email || undefined,
        phone: insertData.phone || undefined,
        company: insertData.company || undefined,
        goal: insertData.goal || 'Contact form submission',
        industry: insertData.industry || undefined,
        teamSize: insertData.team_size || undefined,
        challenge: insertData.challenge || undefined,
        wantsCall: insertData.wants_call || false,
        companyWebsite: insertData.company_website || undefined,
        automationRequirements: insertData.automation_requirements || undefined,
      };
      const emailResult = await sendEmail(emailData);
      if (emailResult.success) {
        console.log('Email notification sent successfully');
      } else {
        console.error('Email notification failed:', emailResult.error);
      }
    } catch (emailError) {
      console.error('Email notification failed:', emailError);
      // Don't fail the request if email fails
    }

    return { ok: true };
  } catch (error: any) {
    console.error('Unexpected error:', error);
    return {
      ok: false,
      error: 'An unexpected error occurred',
      details: error?.message || 'Unknown error',
    };
  }
}

