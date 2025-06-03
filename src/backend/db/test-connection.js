const { Client } = require('pg');
require('dotenv').config();

// Database connection configuration
const dbConfig = {
  host: 'db.vtkrsspzeyadznykyqun.supabase.co',
  port: 5432,
  database: 'postgres',
  user: 'postgres',
  password: process.env.SUPABASE_DB_PASSWORD, // This will be set via environment variable
  ssl: {
    rejectUnauthorized: false // For development only, use proper SSL in production
  }
};

async function testConnection() {
  const client = new Client(dbConfig);
  
  try {
    await client.connect();
    console.log('Successfully connected to the database');
    
    // Test query
    const result = await client.query('SELECT version()');
    console.log('Database version:', result.rows[0].version);
    
    // List all tables in the public schema
    const tables = await client.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
    `);
    
    console.log('\nTables in the database:');
    tables.rows.forEach((row, i) => {
      console.log(`${i + 1}. ${row.table_name}`);
    });
    
  } catch (err) {
    console.error('Error connecting to the database:', err);
  } finally {
    await client.end();
    console.log('\nConnection closed');
  }
}

testConnection();
