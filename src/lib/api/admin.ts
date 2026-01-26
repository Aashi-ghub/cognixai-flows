import { supabaseAdmin } from '@/lib/supabase';

export interface ConsultationSubmission {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  contact?: string;
  company?: string;
  goal?: string;
  industry?: string;
  team_size?: string;
  challenge?: string;
  wants_call?: boolean;
  company_website?: string;
  automation_requirements?: string;
  created_at: string;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  company?: string;
  message: string;
  created_at: string;
}

export interface AllSubmissions {
  consultations: ConsultationSubmission[];
  contacts: ContactSubmission[];
}

/**
 * Fetch all consultation requests
 */
export async function getAllConsultations(): Promise<ConsultationSubmission[]> {
  try {
    const { data, error } = await supabaseAdmin
      .from('consultation_requests')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching consultations:', error);
      throw error;
    }

    return data || [];
  } catch (error: any) {
    console.error('Failed to fetch consultations:', error);
    return [];
  }
}

/**
 * Fetch all contact submissions
 */
export async function getAllContacts(): Promise<ContactSubmission[]> {
  try {
    const { data, error } = await supabaseAdmin
      .from('contact_submissions')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching contacts:', error);
      throw error;
    }

    return data || [];
  } catch (error: any) {
    console.error('Failed to fetch contacts:', error);
    return [];
  }
}

/**
 * Fetch all submissions (both consultations and contacts)
 */
export async function getAllSubmissions(): Promise<AllSubmissions> {
  try {
    const [consultations, contacts] = await Promise.all([
      getAllConsultations(),
      getAllContacts(),
    ]);

    return {
      consultations,
      contacts,
    };
  } catch (error: any) {
    console.error('Failed to fetch all submissions:', error);
    return {
      consultations: [],
      contacts: [],
    };
  }
}

/**
 * Clear all consultation requests
 */
export async function clearAllConsultations(): Promise<{ success: boolean; error?: string }> {
  try {
    const { error } = await supabaseAdmin
      .from('consultation_requests')
      .delete()
      .neq('id', '00000000-0000-0000-0000-000000000000'); // Delete all rows

    if (error) {
      console.error('Error clearing consultations:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error: any) {
    console.error('Failed to clear consultations:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Clear all contact submissions
 */
export async function clearAllContacts(): Promise<{ success: boolean; error?: string }> {
  try {
    const { error } = await supabaseAdmin
      .from('contact_submissions')
      .delete()
      .neq('id', '00000000-0000-0000-0000-000000000000'); // Delete all rows

    if (error) {
      console.error('Error clearing contacts:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error: any) {
    console.error('Failed to clear contacts:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Clear all submissions (both consultations and contacts)
 */
export async function clearAllSubmissions(): Promise<{ success: boolean; error?: string }> {
  try {
    const [consultationsResult, contactsResult] = await Promise.all([
      clearAllConsultations(),
      clearAllContacts(),
    ]);

    if (!consultationsResult.success) {
      return consultationsResult;
    }

    if (!contactsResult.success) {
      return contactsResult;
    }

    return { success: true };
  } catch (error: any) {
    console.error('Failed to clear all submissions:', error);
    return { success: false, error: error.message };
  }
}
