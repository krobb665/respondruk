import { UserCircleIcon } from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, UserGroupIcon, ClipboardDocumentListIcon, ChartBarIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';

type NavigationItem = {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  current: boolean;
};

export function Sidebar() {
  const location = useLocation();
  
  const navigation: NavigationItem[] = [
    { name: 'Dashboard', href: '/app/dashboard', icon: HomeIcon, current: location.pathname === '/app/dashboard' },
    { name: 'Incidents', href: '/app/incidents', icon: ClipboardDocumentListIcon, current: location.pathname.startsWith('/app/incidents') },
    { name: 'Teams', href: '/app/teams', icon: UserGroupIcon, current: location.pathname.startsWith('/app/teams') },
    { name: 'Analytics', href: '/app/analytics', icon: ChartBarIcon, current: location.pathname.startsWith('/app/analytics') },
    { name: 'Settings', href: '/app/settings', icon: Cog6ToothIcon, current: location.pathname.startsWith('/app/settings') },
  ];

  return (
    <div className="flex w-64 flex-col border-r border-gray-200 bg-white">
      <div className="flex h-16 flex-shrink-0 items-center px-6">
        <h1 className="text-xl font-bold text-gray-900">Respondr UK</h1>
      </div>
      <div className="flex flex-1 flex-col overflow-y-auto">
        <nav className="flex-1 space-y-1 px-2 py-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                item.current
                  ? 'bg-primary-50 text-primary-600'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <item.icon
                className={`mr-3 h-6 w-6 flex-shrink-0 ${
                  item.current ? 'text-primary-500' : 'text-gray-400 group-hover:text-gray-500'
                }`}
                aria-hidden="true"
              />
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex flex-shrink-0 border-t border-gray-200 p-4">
        <div className="group block w-full flex-shrink-0">
          <div className="flex items-center">
            <div>
              <UserCircleIcon className="inline-block h-10 w-10 rounded-full text-gray-400" aria-hidden="true" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                User Name
              </p>
              <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                View profile
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
