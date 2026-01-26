# How to Clear Data in Supabase

## Method 1: Using Supabase Dashboard (Easiest)

1. Go to https://supabase.com/dashboard
2. Select your project: `wyqhofuwxzyyjnffavgq`
3. Click on **Table Editor** in the left sidebar
4. Select the table you want to clear:
   - `consultation_requests`
   - `contact_submissions`
5. Click the **...** menu (three dots) at the top right
6. Select **Delete all rows** or **Truncate table**
7. Confirm the deletion

## Method 2: Using SQL Editor (Recommended for Multiple Tables)

1. Go to https://supabase.com/dashboard
2. Select your project: `wyqhofuwxzyyjnffavgq`
3. Click on **SQL Editor** in the left sidebar
4. Click **New query**
5. Run one of these SQL commands:

### Clear all consultation requests:
```sql
DELETE FROM consultation_requests;
```

### Clear all contact submissions:
```sql
DELETE FROM contact_submissions;
```

### Clear both tables at once:
```sql
DELETE FROM consultation_requests;
DELETE FROM contact_submissions;
```

### Reset auto-increment IDs (if using serial IDs):
```sql
-- After deleting, reset the sequence (if needed)
ALTER SEQUENCE consultation_requests_id_seq RESTART WITH 1;
ALTER SEQUENCE contact_submissions_id_seq RESTART WITH 1;
```

6. Click **Run** to execute the query

## Method 3: Using Code (Programmatic)

You can create a script to clear data. Here's an example:

```typescript
import { supabaseAdmin } from '@/lib/supabase';

// Clear consultation requests
async function clearConsultations() {
  const { error } = await supabaseAdmin
    .from('consultation_requests')
    .delete()
    .neq('id', '00000000-0000-0000-0000-000000000000'); // Delete all rows
  
  if (error) {
    console.error('Error clearing consultations:', error);
  } else {
    console.log('Consultation requests cleared');
  }
}

// Clear contact submissions
async function clearContacts() {
  const { error } = await supabaseAdmin
    .from('contact_submissions')
    .delete()
    .neq('id', '00000000-0000-0000-0000-000000000000'); // Delete all rows
  
  if (error) {
    console.error('Error clearing contacts:', error);
  } else {
    console.log('Contact submissions cleared');
  }
}

// Clear both
async function clearAll() {
  await clearConsultations();
  await clearContacts();
}
```

## Method 4: Truncate (Fastest - Removes all data and resets)

**⚠️ Warning: This permanently deletes ALL data and cannot be undone!**

```sql
TRUNCATE TABLE consultation_requests CASCADE;
TRUNCATE TABLE contact_submissions CASCADE;
```

## Quick SQL Commands

Copy and paste these into the Supabase SQL Editor:

### Clear everything:
```sql
-- Clear all form submissions
TRUNCATE TABLE consultation_requests;
TRUNCATE TABLE contact_submissions;
```

### Clear with conditions (e.g., older than 30 days):
```sql
-- Delete consultations older than 30 days
DELETE FROM consultation_requests 
WHERE created_at < NOW() - INTERVAL '30 days';

-- Delete contacts older than 30 days
DELETE FROM contact_submissions 
WHERE created_at < NOW() - INTERVAL '30 days';
```

## Important Notes

⚠️ **Backup First**: Before clearing data, consider exporting it:
1. Go to **Table Editor**
2. Select your table
3. Click **Export** to download as CSV

⚠️ **Row Level Security (RLS)**: Make sure RLS policies allow deletion, or use the service role key (which bypasses RLS).

⚠️ **Cascade Deletes**: If tables have foreign key relationships, you may need to delete in the correct order or use CASCADE.

## Recommended Approach

For quick testing/clearing, use **Method 2 (SQL Editor)**:
1. Fast and easy
2. Can clear multiple tables at once
3. Can add conditions if needed
4. Immediate results
