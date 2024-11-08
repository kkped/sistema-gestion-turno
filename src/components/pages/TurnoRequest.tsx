import React from "react";
import { FaCalendarPlus } from "react-icons/fa";
import TurnoForm from "../TurnoForm";

const TurnoRequest: React.FC = () => {
    return (
        <div className="p-8 max-w-3xl mx-auto bg-white rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            <div className="text-center mb-6">
                <h2 className="text-3xl font-bold flex items-center justify-center text-blue-600 space-x-2">
                    <FaCalendarPlus className="text-blue-600 mr-2" />
                    <span>Solicitar Un Nuevo Turno</span>
                </h2>
                <p className="text-gray-600 mt-2">
                    Completa el siguiente formulario para reservar un turno de forma rápida y sencilla.
                </p>
            </div>
            <TurnoForm />
        </div>
    );
};

export default TurnoRequest;
