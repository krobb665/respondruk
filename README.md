# Respondr UK

Emergency Response Management System for UK Emergency Services

## Overview

Respondr UK is a comprehensive emergency response management system designed to help coordinate and manage emergency services across the United Kingdom. The system facilitates real-time incident tracking, resource management, and team coordination.

## Features

- Incident Management and Tracking
- Resource Allocation and Monitoring
- Team Coordination and Communication
- Real-time Updates and Notifications
- Comprehensive Audit Logging
- Role-based Access Control
- Geographic Information System (GIS) Integration
- Secure Communication Channels

## Project Structure

```
respondruk/
├── src/
│   ├── frontend/          # React/TypeScript frontend application
│   │   ├── src/          # Frontend source code
│   │   ├── public/       # Static assets
│   │   └── package.json  # Frontend dependencies
│   ├── backend/          # Node.js backend application
│   │   ├── src/         # Backend source code
│   │   ├── db/          # Database utilities
│   │   └── package.json # Backend dependencies
│   └── supabase/        # Supabase configuration and setup
├── scripts/             # Database and utility scripts
│   └── db_setup.sql    # Database schema and setup
├── docs/               # Documentation
├── config/             # Configuration files
└── .github/            # GitHub specific files
    └── workflows/      # CI/CD pipelines
```

## Technology Stack

- **Frontend**: React with TypeScript
- **Backend**: Node.js
- **Database**: PostgreSQL with PostGIS
- **Authentication**: Supabase Auth
- **Real-time**: WebSocket for live updates
- **GIS**: PostGIS for location services

## Prerequisites

- Node.js (v16 or higher)
- PostgreSQL (v13 or higher) with PostGIS extension
- Supabase CLI (for local development)

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/respondruk.git
   cd respondruk
   ```

2. Set up the database:
   ```bash
   psql -f scripts/db_setup.sql
   ```

3. Install frontend dependencies:
   ```bash
   cd src/frontend
   npm install
   ```

4. Install backend dependencies:
   ```bash
   cd ../backend
   npm install
   ```

5. Configure environment variables:
   - Copy `.env.example` to `.env` in both frontend and backend directories
   - Update the variables with your configuration

6. Start the development servers:
   ```bash
   # Terminal 1 - Frontend
   cd src/frontend
   npm run dev

   # Terminal 2 - Backend
   cd src/backend
   npm run dev
   ```

## Database Setup

The database schema (`scripts/db_setup.sql`) includes:

- User management with role-based access
- Team organization and hierarchy
- Incident tracking and status management
- Resource management and assignment
- Real-time messaging system
- Comprehensive audit logging
- Geographic data handling
- Row Level Security policies

## Security Features

- Row Level Security (RLS) enabled on all tables
- Role-based access control
- JWT-based authentication
- Audit logging for all changes
- Secure password handling with pgcrypto
- Data encryption at rest
- HTTPS-only communication

## Development Guidelines

1. Follow the TypeScript coding standards
2. Write unit tests for new features
3. Update documentation as needed
4. Follow Git commit message conventions
5. Create pull requests for all changes

## Testing

- Frontend: Jest and React Testing Library
- Backend: Jest
- Database: pgTAP (PostgreSQL testing framework)
- E2E: Cypress

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

[MIT License](LICENSE)

## Support

For support, please open an issue in the GitHub repository or contact the maintainers.
