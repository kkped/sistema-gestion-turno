import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact: React.FC = () => {
    return (
        <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-10">
            <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">Contáctanos</h1>
            
            {/* Información de contacto */}
            <div className="mb-8 text-gray-700">
                <p className="flex items-center mb-4">
                    <FaMapMarkerAlt className="text-blue-500 mr-2" />
                    Calle 10 # 2-36, Quibdó, Chocó
                </p>
                <p className="flex items-center mb-4">
                    <FaPhoneAlt className="text-blue-500 mr-2" />
                    +57 123 456 7890
                </p>
                <p className="flex items-center">
                    <FaEnvelope className="text-blue-500 mr-2" />
                    contacto@casadejusticia.com
                </p>
            </div>

            {/* Formulario de contacto */}
            <form className="space-y-4">
                <div>
                    <label className="block font-semibold mb-1">Nombre</label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                        placeholder="Tu nombre completo"
                        required
                    />
                </div>
                <div>
                    <label className="block font-semibold mb-1">Correo Electrónico</label>
                    <input
                        type="email"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                        placeholder="correo@ejemplo.com"
                        required
                    />
                </div>
                <div>
                    <label className="block font-semibold mb-1">Mensaje</label>
                    <textarea
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                        placeholder="Escribe tu mensaje aquí..."
                        rows={4}
                        required
                    ></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                    Enviar Mensaje
                </button>
            </form>
        </div>
    );
};

export default Contact;
