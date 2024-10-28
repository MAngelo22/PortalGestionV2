import React, { createContext, useState, useContext } from 'react';

interface Employee {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface EmployeeContextType {
  employees: Employee[];
  addEmployee: (employee: Omit<Employee, 'id'>) => void;
  updateEmployee: (employee: Employee) => void;
  deleteEmployee: (id: string) => void;
}

const EmployeeContext = createContext<EmployeeContextType | undefined>(undefined);

export const EmployeeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [employees, setEmployees] = useState<Employee[]>([
    { id: '1', name: 'Alice Johnson', email: 'alice@example.com', role: 'Manager' },
    { id: '2', name: 'Bob Smith', email: 'bob@example.com', role: 'Employee' },
    { id: '3', name: 'Charlie Brown', email: 'charlie@example.com', role: 'Employee' },
  ]);

  const addEmployee = (employee: Omit<Employee, 'id'>) => {
    const newEmployee = {
      ...employee,
      id: (employees.length + 1).toString(),
    };
    setEmployees([...employees, newEmployee]);
  };

  const updateEmployee = (updatedEmployee: Employee) => {
    setEmployees(employees.map(emp => 
      emp.id === updatedEmployee.id ? updatedEmployee : emp
    ));
  };

  const deleteEmployee = (id: string) => {
    setEmployees(employees.filter(emp => emp.id !== id));
  };

  return (
    <EmployeeContext.Provider value={{ employees, addEmployee, updateEmployee, deleteEmployee }}>
      {children}
    </EmployeeContext.Provider>
  );
};

export const useEmployees = () => {
  const context = useContext(EmployeeContext);
  if (context === undefined) {
    throw new Error('useEmployees must be used within an EmployeeProvider');
  }
  return context;
};