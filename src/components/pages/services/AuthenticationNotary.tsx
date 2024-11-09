import React, { useState } from 'react';

const AuthenticationNotary: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Reservado:', { name, email, date, time });
        alert('Tu turno ha sido reservado con éxito.');
    };

    return (
        <div className="max-w-3xl mx-auto p-8 bg-white shadow-2xl rounded-lg mt-10">
            <h2 className="text-4xl font-bold text-blue-800 mb-4 text-center">Autenticación y Notariado</h2>
            
            <p className="text-gray-700 mb-8 text-center">
                Nuestro servicio de autenticación y notariado te permite asegurar la validez legal de tus documentos, 
                incluyendo poderes, contratos, y otros documentos importantes. Este servicio está diseñado para brindarte 
                confianza y seguridad en todos tus trámites legales.
            </p>

            <h3 className="text-2xl font-semibold text-blue-600 mb-6 text-center">Reserva tu Turno</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="form-group">
                    <label htmlFor="name" className="block font-semibold text-gray-700 mb-1">Nombre:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        placeholder="Escribe tu nombre completo"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="block font-semibold text-gray-700 mb-1">Correo Electrónico:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        placeholder="correo@ejemplo.com"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="date" className="block font-semibold text-gray-700 mb-1">Fecha:</label>
                    <input
                        type="date"
                        id="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="time" className="block font-semibold text-gray-700 mb-1">Hora:</label>
                    <input
                        type="time"
                        id="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
                >
                    Reservar Turno
                </button>
            </form>
        </div>
    );
};

export default AuthenticationNotary;
