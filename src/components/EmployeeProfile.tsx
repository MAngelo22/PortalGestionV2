import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useEmployees } from '../contexts/EmployeeContext';

interface WorkHistory {
  position: string;
  company: string;
  startDate: string;
  endDate: string;
}

interface Education {
  degree: string;
  institution: string;
  year: string;
}

const EmployeeProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { employees } = useEmployees();
  
  const employee = employees.find(emp => emp.id === id);

  if (!employee) {
    return <Navigate to="/employees" replace />;
  }

  // Mock additional data based on the employee
  const profileData = {
    profilePicture: `https://source.unsplash.com/300x300/?portrait&${employee.id}`,
    personalData: {
      dateOfBirth: '1985-05-15',
      address: '123 Main St, Anytown, USA',
      phoneNumber: '+1 (555) 123-4567',
    },
    education: [
      {
        degree: 'Bachelor of Science in Computer Science',
        institution: 'Tech University',
        year: '2007',
      },
      {
        degree: 'Master of Business Administration',
        institution: 'Business School',
        year: '2010',
      },
    ] as Education[],
    workHistory: [
      {
        position: 'Senior Software Engineer',
        company: 'Tech Corp',
        startDate: '2015-01-01',
        endDate: '2020-12-31',
      },
      {
        position: 'Project Manager',
        company: 'Innovative Solutions',
        startDate: '2021-01-01',
        endDate: 'Present',
      },
    ] as WorkHistory[],
  };

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6 flex items-center">
        <img
          className="h-24 w-24 rounded-full object-cover mr-6"
          src={profileData.profilePicture}
          alt={employee.name}
        />
        <div>
          <h3 className="text-2xl leading-6 font-medium text-gray-900">{employee.name}</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">{employee.role}</p>
        </div>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Email</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{employee.email}</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Cumpleaños</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{profileData.personalData.dateOfBirth}</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Dirección</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{profileData.personalData.address}</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Nº de teléfono</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{profileData.personalData.phoneNumber}</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Educación</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                {profileData.education.map((edu, index) => (
                  <li key={index} className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                    <div className="w-0 flex-1 flex items-center">
                      <span className="ml-2 flex-1 w-0 truncate">
                        {edu.degree} - {edu.institution} ({edu.year})
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Trayectoria</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                {profileData.workHistory.map((work, index) => (
                  <li key={index} className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                    <div className="w-0 flex-1 flex items-center">
                      <span className="ml-2 flex-1 w-0 truncate">
                        {work.position} at {work.company} ({work.startDate} - {work.endDate})
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default EmployeeProfile;