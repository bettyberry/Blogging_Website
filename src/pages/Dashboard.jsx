import React from 'react';
import { FiHome, FiUsers, FiBook, FiSettings, FiBell, FiLogOut } from 'react-icons/fi';

const Sidebar = ({ onMenuClick }) => {
  const mainMenuItems = [
    { id: "dashboard", icon: <FiHome size={24} />, label: "Dashboard" },
    { id: "students", icon: <FiUsers size={24} />, label: "Students" },
    { id: "teachers", icon: <FiUsers size={24} />, label: "Teachers" },
    { id: "classes", icon: <FiBook size={24} />, label: "Classes" },
    { id: "settings", icon: <FiSettings size={24} />, label: "Settings" },
    { id: "notifications", icon: <FiBell size={24} />, label: "Notifications" },
    { id: "logout", icon: <FiLogOut size={24} />, label: "Logout" },
  ];

 
      {/* Main Content */}
      <main className="ml-80 p-8 w-full bg-gray-100">
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white shadow rounded-lg p-8">
            <h3 className="text-xl font-bold">Total Students</h3>
            <p className="text-4xl font-bold">2,853</p>
            <p className="text-base text-gray-500">+12% from last month</p>
          </div>
          <div className="bg-white shadow rounded-lg p-8">
            <h3 className="text-xl font-bold">Total Teachers</h3>
            <p className="text-4xl font-bold">145</p>
            <p className="text-base text-gray-500">+3% from last month</p>
          </div>
          <div className="bg-white shadow rounded-lg p-8">
            <h3 className="text-xl font-bold">Active Classes</h3>
            <p className="text-4xl font-bold">87</p>
            <p className="text-base text-gray-500">+5% from last semester</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Sidebar;
