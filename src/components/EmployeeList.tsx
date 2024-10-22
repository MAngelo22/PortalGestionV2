import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Edit, Trash2, User } from 'lucide-react';

interface Employee {
  id: string;
  name: string;
  email: string;
  role: string;
}

const EmployeeList: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    // In a real application, you would fetch this data from an API
    const mockEmployees: Employee[] = [
      { id: '1', name: 'Alice Johnson', email: 'alice@example.com', role: 'Manager' },
      { id: '2', name: 'Bob Smith', email: 'bob@example.com', role: 'Employee' },
      { id: '3', name: 'Charlie Brown', email: 'charlie@example.com', role: 'Employee' },
    ];
    setEmployees(mockEmployees);
  }, []);

  const handleDelete = (id: string) => {
    // In a real application, you would call an API to delete the employee
    setEmployees(employees.filter(employee => employee.id !== id));
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Employee List</h2>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link to={`/employees/${employee.id}/profile`} className="text-indigo-600 hover:text-indigo-900">
                    {employee.name}
                  </Link>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{employee.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{employee.role}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <Link to={`/employees/${employee.id}/profile`} className="text-gray-600 hover:text-gray-900 mr-4">
                    <User className="h-5 w-5 inline" />
                  </Link>
                  <Link to={`/employees/${employee.id}`} className="text-indigo-600 hover:text-indigo-900 mr-4">
                    <Edit className="h-5 w-5 inline" />
                  </Link>
                  <button onClick={() => handleDelete(employee.id)} className="text-red-600 hover:text-red-900">
                    <Trash2 className="h-5 w-5 inline" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;