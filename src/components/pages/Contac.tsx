import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact: React.FC = () => {
    return (
        <div className="max-w-3xl mx-auto p-8 bg-white shadow-2xl rounded-lg mt-10">
            <h1 className="text-4xl font-bold text-blue-800 mb-6 text-center">Contáctanos</h1>
            
            {/* Información de contacto */}
            <div className="mb-8 text-gray-700">
                <div className="flex items-center mb-4">
                    <FaMapMarkerAlt className="text-blue-500 mr-3" />
                    <span>Calle 10 # 2-36, Quibdó, Chocó</span>
                </div>
                <div className="flex items-center mb-4">
                    <FaPhoneAlt className="text-blue-500 mr-3" />
                    <span>+57 123 456 7890</span>
                </div>
                <div className="flex items-center">
                    <FaEnvelope className="text-blue-500 mr-3" />
                    <span>contacto@casadejusticia.com</span>
                </div>
            </div>

            {/* Formulario de contacto */}
            <form className="space-y-6">
                <div>
                    <label className="block font-semibold mb-1 text-gray-700">Nombre</label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        placeholder="Tu nombre completo"
                        required
                    />
                </div>
                <div>
                    <label className="block font-semibold mb-1 text-gray-700">Correo Electrónico</label>
                    <input
                        type="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        placeholder="correo@ejemplo.com"
                        required
                    />
                </div>
                <div>
                    <label className="block font-semibold mb-1 text-gray-700">Mensaje</label>
                    <textarea
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        placeholder="Escribe tu mensaje aquí..."
                        rows={4}
                        required
                    ></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200">
                    Enviar Mensaje
                </button>
            </form>
        </div>
    );
};

export default Contact;
