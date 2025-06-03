# Respondr UK - Frontend

This is the frontend application for Respondr UK, a comprehensive incident management system designed for emergency response teams.

## Features

- **User Authentication**: Secure login and user management
- **Incident Dashboard**: Real-time incident tracking and management
- **Team Collaboration**: Coordinate with team members effectively
- **Analytics & Reporting**: Generate detailed reports and insights
- **Responsive Design**: Works on desktop and mobile devices

## Tech Stack

- **React 18** - Frontend library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **React Query** - Data fetching and state management
- **Heroicons** - Icon set
- **Headless UI** - Accessible UI components

## Prerequisites

- Node.js 16+ and npm/yarn
- Git

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd respondr-uk/frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory with the following variables:
   ```env
   VITE_API_URL=http://localhost:3000/api
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   The application will be available at `http://localhost:3000`

## Available Scripts

- `dev` - Start development server
- `build` - Build for production
- `preview` - Preview production build locally
- `lint` - Run ESLint
- `format` - Format code with Prettier

## Project Structure

```
src/
├── components/     # Reusable UI components
├── contexts/       # React contexts for state management
├── hooks/          # Custom React hooks
├── layouts/        # Page layout components
├── pages/          # Page components
│   ├── auth/       # Authentication pages
│   └── dashboard/  # Dashboard pages
├── services/       # API service functions
├── styles/         # Global styles and Tailwind directives
├── types/          # TypeScript type definitions
└── utils/          # Utility functions
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, please contact support@respondruk.com
