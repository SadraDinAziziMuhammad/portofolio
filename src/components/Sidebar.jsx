import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineProject,
  AiOutlineMessage,
  AiOutlineCheckCircle,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";

const menuItems = [
  { name: "Home", icon: <AiOutlineHome size={20} />, path: "/" },
  { name: "About", icon: <AiOutlineUser size={20} />, path: "/about" },
  { name: "Achievements", icon: <AiOutlineCheckCircle size={20} />, path: "/achievements" },
  { name: "Projects", icon: <AiOutlineProject size={20} />, path: "/projects" },
  { name: "Contact", icon: <AiOutlineMessage size={20} />, path: "/contact" },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Hamburger Menu */}
      <div className="md:hidden pl-2 pt-7 justify-between shadow-md bg-white">
        <button onClick={toggleSidebar} className="border-2 rounded-lg p-1">
          {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </button>
      </div>

      {/* Sidebar - for medium and above OR mobile slide-in */}
      <aside
        className={`
          bg-white shadow-lg p-6 min-h-screen flex flex-col fixed top-0 left-0 z-40 
          transition-transform duration-300 ease-in-out
          w-64
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static md:flex
        `}
      >
        {/* Profile */}
        <div className="flex flex-col items-center mb-8">
          <img
            src="/img/profile.jpg"
            alt="Sadra Din Azizi Muhammad"
            className="w-24 h-24 rounded-full"
          />
          <h2 className="mt-4 text-l font-semibold text-center">
            Sadra Din Azizi Muhammad
          </h2>
          <p className="text-xs mt-1 font-light text-center">Jakarta, Indonesia</p>
        </div>

        <hr className="border-gray-300 mb-4" />

        {/* Menu */}
        <nav className="flex flex-col gap-2 text-gray-700">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)} // Tutup sidebar setelah klik di mobile
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg w-full text-left ${
                  isActive
                    ? "bg-gray-100 font-semibold text-gray-900"
                    : "hover:bg-gray-50"
                }`
              }
            >
              <span className="text-gray-500">{item.icon}</span>
              <span className="flex-grow">{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Overlay saat sidebar terbuka di mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-30 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
}
