import React from "react";
import { Link } from "react-router-dom";
import {
    FaBalanceScale,
    FaFileSignature,
    FaShieldAlt,
    FaUserEdit,
    FaSearch,
    FaHandshake,
} from "react-icons/fa";

const services = [
    {
        id: 1,
        title: "Asesoría Legal",
        description: "Recibe asesoría personalizada en temas legales, adaptada a tus necesidades.",
        icon: <FaBalanceScale className="text-5xl text-blue-600 mb-4" />,
        link: "/services/legal-advice",
    },
    {
        id: 2,
        title: "Autenticación y Notariado",
        description: "Autenticación de documentos y servicios notariales para asegurar la validez de tus trámites.",
        icon: <FaFileSignature className="text-5xl text-green-600 mb-4" />,
        link: "/services/authentication-notary",
    },
    {
        id: 3,
        title: "Protección de Víctimas",
        description: "Asesoría y asistencia para personas víctimas de delitos o situaciones de riesgo.",
        icon: <FaShieldAlt className="text-5xl text-red-600 mb-4" />,
        link: "/services/victim-protection",
    },
    {
        id: 4,
        title: "Trámite de Registro Civil",
        description: "Ayuda en el proceso de registro civil, incluyendo inscripción de nacimientos, defunciones, y matrimonios.",
        icon: <FaUserEdit className="text-5xl text-purple-600 mb-4" />,
        link: "/services/civil-registration",
    },
    {
        id: 5,
        title: "Seguimiento y Monitoreo de Casos",
        description: "Monitoreo continuo y actualización sobre el estado de casos legales o administrativos.",
        icon: <FaSearch className="text-5xl text-yellow-600 mb-4" />,
        link: "/services/case-monitoring",
    },
    {
        id: 6,
        title: "Conciliación",
        description: "Facilitamos procesos de conciliación para resolver conflictos de manera amistosa y legal.",
        icon: <FaHandshake className="text-5xl text-teal-600 mb-4" />,
        link: "/services/conciliation",
    },
];

const ServicesPage: React.FC = () => {
    return (
        <div className="p-8 min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100">
            <div className="max-w-5xl mx-auto space-y-10">
                <h2 className="text-4xl font-bold text-center text-blue-800">Servicios Disponibles</h2>
                <p className="text-center text-gray-700 text-lg max-w-2xl mx-auto">
                    Descubre todos los servicios que ofrecemos para ayudarte a resolver tus problemas legales y administrativos de forma eficiente.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 flex flex-col items-center text-center"
                        >
                            <div className="mb-4">{service.icon}</div>
                            <h3 className="text-2xl font-semibold mb-2 text-gray-800">{service.title}</h3>
                            <p className="text-gray-600 mb-4">{service.description}</p>
                            <Link
                                to={service.link}
                                className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition duration-200"
                            >
                                Más Información
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
