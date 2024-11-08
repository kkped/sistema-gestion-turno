import React from "react";
import DashboardCard from "../DashboardCard";
import { Link } from "react-router-dom";

const UserDashboard: React.FC = () => {
    const cards = [
        {
            title: "Perfil",
            content: (
                <div className="text-center">
                    <p className="mb-4 text-gray-700">Accede a tus datos de perfil y actualízalos si es necesario.</p>
                    <Link 
                        to="/profile" 
                        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200 ease-in-out"
                    >
                        Gestionar Perfil
                    </Link>
                </div>
            ),
        },
        {
            title: "Reservar Turno",
            content: (
                <div className="text-center">
                    <p className="mb-4 text-gray-700">Reserva un nuevo turno de forma rápida y sencilla.</p>
                    <Link 
                        to="/turno-request" 
                        className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200 ease-in-out"
                    >
                        Agendar Turno
                    </Link>
                </div>
            ),
        },
        {
            title: "Próximos Turnos",
            content: (
                <div className="text-center text-gray-700">
                    <p>No tienes turnos agendados.</p>
                   
                </div>
            ),
        },
        {
            title: "Historial de Turnos",
            content: (
                <div className="text-center text-gray-700">
                    <p>Aquí se muestra tu historial de turnos pasados.</p>
                </div>
            ),
        },
    ];

    return (
        <div className="p-8 max-w-4xl mx-auto space-y-6 bg-white shadow-lg rounded-lg mt-10">
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">Mi Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cards.map((card, index) => (
                    <DashboardCard key={index} title={card.title} content={card.content} />
                ))}
            </div>
        </div>
    );
};

export default UserDashboard;
