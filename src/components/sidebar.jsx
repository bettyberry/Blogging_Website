import React from 'react';
import { FiHome, FiUsers, FiBook, FiSettings, FiBell, FiLogOut } from 'react-icons/fi';

const Sidebar = ({ onMenuClick }) => {
  const menuItems = [
    { id: "dashboard", icon: <FiHome size={24} />, label: "Dashboard" },
    { id: "students", icon: <FiUsers size={24} />, label: "Students" },
    { id: "teachers", icon: <FiUsers size={24} />, label: "Teachers" },
    { id: "classes", icon: <FiBook size={24} />, label: "Classes" },
    { id: "settings", icon: <FiSettings size={24} />, label: "Settings" },
    { id: "notifications", icon: <FiBell size={24} />, label: "Notifications" },
    { id: "logout", icon: <FiLogOut size={24} />, label: "Logout" },
  ];

  return (
    <aside className="w-80 h-screen bg-gray-900 text-black fixed border-r border-gray-300">
      
      <div className="p-6">
        <a className="flex items-center gap-4" href="/">
          <img src="/src/imgs/logo.png" alt="Logo" className="w-16 h-16" />
          <span className="text-3xl font-bold">Admin Panel</span>
        </a>
      </div>

      {/* Navigation Menu */}
      <nav className="mt-6">
        <ul>
          {menuItems.map((item) => (
            <li
              key={item.id}
              className="p-4 hover:bg-gray-700 cursor-pointer flex items-center gap-4"
              onClick={() => onMenuClick(item.id)}
            >
              <span>{item.icon}</span>
              <span className="text-xl">{item.label}</span>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
