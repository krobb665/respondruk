import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { 
  ArrowUpIcon, 
  ArrowDownIcon, 
  UsersIcon, 
  ClockIcon, 
  CheckCircleIcon,
  XCircleIcon,
  ExclamationCircleIcon
} from '@heroicons/react/24/outline';

type StatCardProps = {
  title: string;
  value: string | number;
  change: number;
  icon: React.ComponentType<{ className?: string }>;
};

function StatCard({ title, value, change, icon: Icon }: StatCardProps) {
  const isPositive = change >= 0;
  
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="p-5">
        <div className="flex items-center">
          <div className="flex-shrink-0 bg-primary-500 rounded-md p-3">
            <Icon className="h-6 w-6 text-white" aria-hidden="true" />
          </div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dt className="text-sm font-medium text-gray-500 truncate">{title}</dt>
              <dd className="flex items-baseline">
                <div className="text-2xl font-semibold text-gray-900">{value}</div>
                <div
                  className={`ml-2 flex items-baseline text-sm font-semibold ${
                    isPositive ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {isPositive ? (
                    <ArrowUpIcon className="self-center flex-shrink-0 h-5 w-5 text-green-500" />
                  ) : (
                    <ArrowDownIcon className="self-center flex-shrink-0 h-5 w-5 text-red-500" />
                  )}
                  <span className="sr-only">{isPositive ? 'Increased' : 'Decreased'} by</span>
                  {Math.abs(change)}%
                </div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

type Incident = {
  id: string;
  title: string;
  status: 'resolved' | 'in-progress' | 'pending';
  priority: 'high' | 'medium' | 'low';
  reportedAt: string;
  assignedTo: string;
};

const mockIncidents: Incident[] = [
  {
    id: 'INC-001',
    title: 'Power outage in building A',
    status: 'in-progress',
    priority: 'high',
    reportedAt: '2025-06-02T14:32:00Z',
    assignedTo: 'John D.',
  },
  {
    id: 'INC-002',
    title: 'Broken window in conference room',
    status: 'pending',
    priority: 'medium',
    reportedAt: '2025-06-02T10:15:00Z',
    assignedTo: 'Jane S.',
  },
  {
    id: 'INC-003',
    title: 'AC not working in office 302',
    status: 'resolved',
    priority: 'low',
    reportedAt: '2025-06-01T16:45:00Z',
    assignedTo: 'Mike R.',
  },
  {
    id: 'INC-004',
    title: 'Fire alarm test needed',
    status: 'pending',
    priority: 'medium',
    reportedAt: '2025-06-01T09:20:00Z',
    assignedTo: 'Sarah L.',
  },
];

function IncidentRow({ incident }: { incident: Incident }) {
  const statusIcons = {
    resolved: <CheckCircleIcon className="h-5 w-5 text-green-500" />,
    'in-progress': <ClockIcon className="h-5 w-5 text-yellow-500" />,
    pending: <ExclamationCircleIcon className="h-5 w-5 text-red-500" />,
  };

  const priorityColors = {
    high: 'bg-red-100 text-red-800',
    medium: 'bg-yellow-100 text-yellow-800',
    low: 'bg-blue-100 text-blue-800',
  };

  return (
    <tr className="hover:bg-gray-50">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {incident.id}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-5 w-5 mr-2">
            {statusIcons[incident.status]}
          </div>
          {incident.title}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span
          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
            priorityColors[incident.priority]
          }`}
        >
          {incident.priority.charAt(0).toUpperCase() + incident.priority.slice(1)}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {new Date(incident.reportedAt).toLocaleDateString()}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {incident.assignedTo}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <Link to={`/app/incidents/${incident.id}`} className="text-primary-600 hover:text-primary-900">
          View
        </Link>
      </td>
    </tr>
  );
}

export function DashboardPage() {
  const [stats, setStats] = useState([
    { id: 1, title: 'Total Incidents', value: '1,234', change: 12, icon: UsersIcon },
    { id: 2, title: 'Open Incidents', value: '89', change: -5, icon: ExclamationCircleIcon },
    { id: 3, title: 'Avg. Response Time', value: '2.4h', change: -15, icon: ClockIcon },
    { id: 4, title: 'Resolved (30d)', value: '1,145', change: 8, icon: CheckCircleIcon },
  ]);

  const { data: incidents = mockIncidents, isLoading } = useQuery({
    queryKey: ['incidents'],
    queryFn: async () => {
      // In a real app, you would fetch this from your API
      return new Promise<Incident[]>((resolve) => {
        setTimeout(() => resolve(mockIncidents), 500);
      });
    },
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">
          Welcome back! Here's what's happening with your incidents.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatCard
            key={stat.id}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            icon={stat.icon}
          />
        ))}
      </div>

      {/* Recent Incidents */}
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Recent Incidents</h3>
            <Link
              to="/app/incidents"
              className="text-sm font-medium text-primary-600 hover:text-primary-500"
            >
              View all
            </Link>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  ID
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Title
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Priority
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Reported
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Assigned To
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">View</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {isLoading ? (
                <tr>
                  <td colSpan={6} className="px-6 py-4 text-center text-sm text-gray-500">
                    Loading incidents...
                  </td>
                </tr>
              ) : incidents.length > 0 ? (
                incidents.map((incident) => (
                  <IncidentRow key={incident.id} incident={incident} />
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-6 py-4 text-center text-sm text-gray-500">
                    No incidents found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
