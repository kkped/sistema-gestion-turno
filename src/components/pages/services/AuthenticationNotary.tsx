import React, { useState } from 'react';

const AuthenticationNotary: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aquí puedes manejar la lógica de envío, como una llamada a una API
        console.log('Reservado:', { name, email, date, time });
        alert('Tu turno ha sido reservado con éxito.');
    };

    return (
        <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-10">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Autenticación y Notariado</h2>
            
            {/* Descripción del servicio */}
            <p className="text-gray-700 mb-6">
                Nuestro servicio de autenticación y notariado te permite asegurar la validez legal de tus documentos, 
                incluyendo poderes, contratos, y otros documentos importantes. Este servicio está diseñado para brindarte 
                confianza y seguridad en todos tus trámites legales.
            </p>

            <h3 className="text-xl font-semibold text-blue-600 mb-4">Reserva tu Turno</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="form-group">
                    <label htmlFor="name" className="block font-semibold mb-1">Nombre:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="block font-semibold mb-1">Correo Electrónico:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="date" className="block font-semibold mb-1">Fecha:</label>
                    <input
                        type="date"
                        id="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="time" className="block font-semibold mb-1">Hora:</label>
                    <input
                        type="time"
                        id="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                >
                    Reservar Turno
                </button>
            </form>
        </div>
    );
};

export default AuthenticationNotary;
