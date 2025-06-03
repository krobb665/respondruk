import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';
import 'dotenv/config';

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Initialize the Supabase client with service role key for admin operations
const supabase = createClient(supabaseUrl, serviceRoleKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

async function setupDatabase() {
  try {
    console.log('Setting up database functions...');
    
    // Read the SQL file
    const sql = readFileSync('setup.sql', 'utf8');
    
    // Execute the SQL
    const { data, error } = await supabase.rpc('execute_sql', { query: sql });
    
    if (error) {
      console.error('Error setting up database:', error);
    } else {
      console.log('Database setup completed successfully!');
      console.log('You can now run the main script to interact with your database.');
    }
  } catch (error) {
    console.error('Error during setup:', error);
  }
}

setupDatabase();
