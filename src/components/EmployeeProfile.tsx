import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

interface Employee {
  id: string;
  name: string;
  email: string;
  role: string;
  profilePicture: string;
  personalData: {
    dateOfBirth: string;
    address: string;
    phoneNumber: string;
  };
  education: {
    degree: string;
    institution: string;
    year: string;
  }[];
  workHistory: {
    position: string;
    company: string;
    startDate: string;
    endDate: string;
  }[];
}

const EmployeeProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [employee, setEmployee] = useState<Employee | null>(null);

  useEffect(() => {
    // In a real application, you would fetch this data from an API
    const mockEmployee: Employee = {
      id: id || '',
      name: 'Alice Johnson',
      email: 'alice@example.com',
      role: 'Manager',
      profilePicture: 'https://source.unsplash.com/300x300/?portrait',
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
      ],
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
      ],
    };
    setEmployee(mockEmployee);
  }, [id]);

  if (!employee) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6 flex items-center">
        <img
          className="h-24 w-24 rounded-full object-cover mr-6"
          src={employee.profilePicture}
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
            <dt className="text-sm font-medium text-gray-500">Date of Birth</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{employee.personalData.dateOfBirth}</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Address</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{employee.personalData.address}</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Phone Number</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{employee.personalData.phoneNumber}</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Education</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                {employee.education.map((edu, index) => (
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
            <dt className="text-sm font-medium text-gray-500">Work History</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                {employee.workHistory.map((work, index) => (
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