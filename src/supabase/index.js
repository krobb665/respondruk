import { createClient } from '@supabase/supabase-js';
import 'dotenv/config';

// Initialize the Supabase client
const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testSupabaseConnection() {
  try {
    console.log('Testing Supabase connection...');
    
    // Test authentication
    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
      email: 'your-email@example.com',
      password: 'your-password',
    });
    
    if (authError && authError.status !== 400) {
      console.error('Authentication test failed:', authError);
    } else {
      console.log('Authentication test passed!');
    }
    
    // List all tables using raw SQL
    console.log('\nFetching tables using raw SQL...');
    const { data: tables, error: tablesError } = await supabase.rpc('get_tables');
    
    if (tablesError) {
      console.error('Error executing raw SQL:', tablesError);
      
      // Create the get_tables function if it doesn't exist
      console.log('\nCreating get_tables function...');
      const { error: createFnError } = await supabase.rpc('create_get_tables_fn');
      
      if (createFnError) {
        console.error('Error creating function:', createFnError);
        
        // Try direct SQL execution
        console.log('\nTrying direct SQL execution...');
        const { data: sqlResult, error: sqlError } = await supabase
          .from('sql')
          .select('*')
          .eq('query', 'SELECT table_name FROM information_schema.tables WHERE table_schema = \'public\'');
          
        if (sqlError) {
          console.error('Error executing direct SQL:', sqlError);
          console.log('\nPlease check your Supabase dashboard for the SQL editor to run queries directly.');
        } else {
          console.log('SQL result:', sqlResult);
        }
      } else {
        console.log('Function created successfully. Rerun the script.');
      }
    } else {
      console.log('Tables in your database:');
      tables.forEach((table, i) => {
        console.log(`${i + 1}. ${table.table_name}`);
      });
    }
    
  } catch (error) {
    console.error('Error testing Supabase connection:', error);
  }
}

testSupabaseConnection();
