import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { EmployeeProvider } from './contexts/EmployeeContext.tsx';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import EmployeeProfile from './components/EmployeeProfile';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <EmployeeProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}>
              <Route index element={<Navigate to="/employees" replace />} />
              <Route path="employees" element={<EmployeeList />} />
              <Route path="employees/new" element={<EmployeeForm />} />
              <Route path="employees/:id" element={<EmployeeForm />} />
              <Route path="employees/:id/profile" element={<EmployeeProfile />} />
            </Route>
          </Routes>
        </div>
      </Router>
      </EmployeeProvider>
    </AuthProvider>
  );
}

export default App;