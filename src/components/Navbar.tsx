import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/new.jpg";
import { FaHome, FaClipboardList, FaPlusCircle, FaBars, FaTimes, FaNewspaper, FaPhoneAlt } from "react-icons/fa";

const Navbar: React.FC = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false); // Estado para controlar el menú hamburguesa

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-black text-white p-6 shadow-lg">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
                {/* Logo en la esquina superior izquierda */}
                <Link to="/" className="flex items-center space-x-2">
                    <img src={logo} alt="Logo" className="h-10 w-10" />
                    <span className="text-2xl font-bold text-white">TurnoMax</span>
                </Link>

                {/* Icono del menú hamburguesa en pantallas pequeñas */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>

                {/* Enlaces de navegación - visibles en pantallas medianas y grandes */}
                <ul className={`md:flex md:space-x-8 ${isOpen ? "block" : "hidden"} mt-4 md:mt-0`}>
                    <li className={location.pathname === '/' ? 'font-bold text-green-300' : ''}>
                        <Link to="/" className="flex items-center space-x-2 hover:text-green-300 transition">
                            <FaHome />
                            <span>Inicio</span>
                        </Link>
                    </li>

                    <li className={location.pathname === '/dashboard' ? 'font-bold text-green-300' : ''}>
                        <Link to="/dashboard" className="flex items-center space-x-2 hover:text-green-300 transition">
                            <FaClipboardList />
                            <span>Mis Turnos</span>
                        </Link>
                    </li>

                    <li className={location.pathname === '/turno-request' ? 'font-bold text-green-300' : ''}>
                        <Link to="/turno-request" className="flex items-center space-x-2 hover:text-green-300 transition">
                            <FaPlusCircle />
                            <span>Solicitar Turnos</span>
                        </Link>
                    </li>

                    <li className={location.pathname === '/noticias' ? 'font-bold text-green-300' : ''}>
                        <Link to="/noticias" className="flex items-center space-x-2 hover:text-green-300 transition">
                            <FaNewspaper />
                            <span>Noticias</span>
                        </Link>
                    </li>

                    <li className={location.pathname === '/contacto' ? 'font-bold text-green-300' : ''}>
                        <Link to="/contacto" className="flex items-center space-x-2 hover:text-green-300 transition">
                            <FaPhoneAlt />
                            <span>Contactos</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
