import React from "react";
import { FaCalendarPlus } from "react-icons/fa";
import TurnoForm from "../TurnoForm";

const TurnoRequest: React.FC = () => {
    return (
        <div className="p-8 max-w-3xl mx-auto bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg shadow-2xl transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
            <div className="text-center mb-6">
                <h2 className="text-3xl font-bold flex items-center justify-center text-blue-700 space-x-2">
                    <FaCalendarPlus className="text-blue-700 mr-2" />
                    <span>Solicitar Un Nuevo Turno</span>
                </h2>
                <p className="text-gray-700 mt-2">
                    Completa el siguiente formulario para reservar un turno de forma rápida y sencilla.
                </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <TurnoForm />
            </div>
        </div>
    );
};

export default TurnoRequest;
