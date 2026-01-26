import { supabaseAdmin } from '@/lib/supabase';
import { sendContactSubmissionEmail as sendEmail } from '@/lib/email';

export interface ContactSubmission {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export interface ContactResponse {
  ok: boolean;
  error?: string;
  details?: string;
}

/**
 * Submit a contact form submission to the database
 */
export async function submitContactForm(
  data: ContactSubmission
): Promise<ContactResponse> {
  try {
    // Validate required fields
    if (!data.name?.trim()) {
      return { ok: false, error: 'Name is required' };
    }
    if (!data.email?.trim()) {
      return { ok: false, error: 'Email is required' };
    }
    if (!data.message?.trim()) {
      return { ok: false, error: 'Message is required' };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email.trim())) {
      return { ok: false, error: 'Invalid email format' };
    }

    // Prepare data for insertion
    const insertData = {
      name: data.name.trim(),
      email: data.email.trim(),
      company: data.company?.trim() || null,
      message: data.message.trim(),
    };

    // Insert into database
    const { error, data: insertedData } = await supabaseAdmin
      .from('contact_submissions')
      .insert(insertData)
      .select()
      .single();

    if (error) {
      console.error('Contact submission error:', error);
      return {
        ok: false,
        error: 'Failed to submit contact form',
        details: error.message,
      };
    }

    // Send email notification (non-blocking)
    try {
      const emailResult = await sendEmail(insertData);
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

