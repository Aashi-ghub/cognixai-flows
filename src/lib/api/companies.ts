import { supabaseAdmin } from '@/lib/supabase';

/**
 * Fetch distinct company names from user profiles
 * Used for autocomplete/autofill in forms
 */
export async function getCompanies(): Promise<string[]> {
  try {
    const { data, error } = await supabaseAdmin
      .from('profiles')
      .select('company')
      .not('company', 'is', null)
      .neq('company', '');

    if (error) {
      console.error('Error fetching companies:', error);
      return [];
    }

    // Extract unique company names, filter out null/empty, and sort
    const companies = Array.from(
      new Set(
        data
          .map((profile) => profile.company?.trim())
          .filter((company): company is string => Boolean(company))
      )
    ).sort();

    return companies;
  } catch (error) {
    console.error('Unexpected error fetching companies:', error);
    return [];
  }
}
