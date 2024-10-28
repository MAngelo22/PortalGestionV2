import React from 'react';
import { Link } from 'react-router-dom';
import { Edit, Trash2, User } from 'lucide-react';
import { useEmployees } from '../contexts/EmployeeContext.tsx';

const EmployeeList: React.FC = () => {
  const { employees, deleteEmployee } = useEmployees();

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Lista de Empleados</h2>
        <Link
          to="/employees/new"
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
        >
          Añadir Empleado
        </Link>
      </div>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rol</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
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
                  <button onClick={() => deleteEmployee(employee.id)} className="text-red-600 hover:text-red-900">
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