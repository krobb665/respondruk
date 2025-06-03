import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AuthProvider } from './contexts/auth-context';
import { ProtectedRoute } from './components/auth/protected-route';
import { DashboardLayout } from './layouts/dashboard-layout';
import HomePage from './pages/home';
import { DashboardPage } from './pages/dashboard';
import { LoginPage } from './pages/auth/login';
import { NotFoundPage } from './pages/not-found';
import IncidentsPage from './pages/incidents/IncidentsPage';
import { IncidentDetailPage } from './pages/incidents/IncidentDetailPage';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router basename="/app">
        <AuthProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/app/*"
              element={
                <ProtectedRoute>
                  <DashboardLayout>
                    <Routes>
                      <Route path="dashboard" element={<DashboardPage />} />
                      <Route path="incidents" element={<IncidentsPage />} />
                      <Route path="incidents/:id" element={<IncidentDetailPage />} />
                      <Route path="*" element={<Navigate to="dashboard" />} />
                    </Routes>
                  </DashboardLayout>
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <ReactQueryDevtools initialIsOpen={false} />
        </AuthProvider>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
