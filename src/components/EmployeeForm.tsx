import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useEmployees } from '../contexts/EmployeeContext.tsx';


interface EmployeeFormData {
  name: string;
  email: string;
  role: string;
}

const EmployeeForm: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { employees, addEmployee, updateEmployee } = useEmployees();
  const [formData, setFormData] = useState<EmployeeFormData>({
    name: '',
    email: '',
    role: 'Employee',
  });

  useEffect(() => {
    if (id) {
      const employee = employees.find(emp => emp.id === id);
      if (employee) {
        setFormData({
          name: employee.name,
          email: employee.email,
          role: employee.role,
        });
      }
    }
  }, [id, employees]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (id) {
      updateEmployee({ ...formData, id });
    } else {
      addEmployee(formData);
    }
    navigate('/employees');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">{id ? 'Edit Employee' : 'Add New Employee'}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="role" className="block text-sm font-medium text-gray-700">Rol</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="Empleado">Empleado</option>
            <option value="Manager">Manager</option>
            <option value="Admin">Admin</option>
          </select>
        </div>
        <div>
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {id ? 'Update Employee' : 'Add Employee'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmployeeForm;