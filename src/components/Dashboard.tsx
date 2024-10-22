import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Users, LogOut } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-indigo-700 text-white p-6">
        <div className="flex items-center mb-8">
          <Users className="h-8 w-8 mr-2" />
          <span className="text-2xl font-semibold">HR Portal</span>
        </div>
        <nav>
          <Link
            to="/employees"
            className="block py-2 px-4 rounded hover:bg-indigo-600 transition-colors duration-200"
          >
            Employees
          </Link>
          <Link
            to="/employees/new"
            className="block py-2 px-4 rounded hover:bg-indigo-600 transition-colors duration-200"
          >
            Add Employee
          </Link>
        </nav>
      </aside>
      <main className="flex-1 p-8">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Welcome, {user?.name}</h1>
          <button
            onClick={logout}
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <LogOut className="h-5 w-5 mr-2" />
            Logout
          </button>
        </header>
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;