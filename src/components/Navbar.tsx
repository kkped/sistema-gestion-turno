import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/new.jpg";
import { FaHome, FaClipboardList, FaPlusCircle, FaBars, FaTimes, FaNewspaper, FaPhoneAlt } from "react-icons/fa";

const Navbar: React.FC = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-black text-white p-6 shadow-lg sticky top-0 z-50">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center space-x-3">
                    <img src={logo} alt="Logo" className="h-10 w-10 rounded-full shadow-lg" />
                    <span className="text-2xl font-semibold tracking-wide text-white hover:text-gray-200 transition">TurnoMax</span>
                </Link>

                {/* Toggle Menu Button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>

                {/* Navigation Links */}
                <ul className={`flex-col md:flex md:flex-row md:space-x-6 mt-4 md:mt-0 ${isOpen ? "flex" : "hidden"} transition-all duration-300 ease-in-out`}>
                    {[
                        { to: "/", label: "Inicio", icon: <FaHome /> },
                        { to: "/dashboard", label: "Mis Turnos", icon: <FaClipboardList /> },
                        { to: "/turno-request", label: "Solicitar Turnos", icon: <FaPlusCircle /> },
                        { to: "/noticias", label: "Noticias", icon: <FaNewspaper /> },
                        { to: "/contacto", label: "Contactos", icon: <FaPhoneAlt /> }
                    ].map((link, index) => (
                        <li key={index} className={`p-2 rounded-lg ${location.pathname === link.to ? "bg-gray-700 text-white" : "hover:bg-gray-600 hover:text-white"} transition`}>
                            <Link to={link.to} className="flex items-center space-x-2">
                                {link.icon}
                                <span className="text-lg font-medium">{link.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
