import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaCalendarAlt, FaClock } from 'react-icons/fa';

const LegalAdvice: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

    const validateForm = () => {
        const newErrors: { name?: string; email?: string } = {};
        if (!name) newErrors.name = 'El nombre es obligatorio';
        if (!email) {
            newErrors.email = 'El correo electrónico es obligatorio';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Formato de correo inválido';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Reservado:', { name, email, date, time });
            alert('Tu turno ha sido reservado con éxito.');
            setName('');
            setEmail('');
            setDate('');
            setTime('');
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-10 transition transform hover:scale-105">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">Asesoría Legal</h2>
            
            <p className="text-gray-700 mb-8 leading-relaxed">
                Nuestro servicio de Asesoría Legal está diseñado para brindarte la orientación profesional que necesitas en temas legales complejos, ayudándote a tomar decisiones informadas y proteger tus derechos e intereses.
            </p>

            <h3 className="text-xl font-semibold text-blue-600 mb-4">Reserva tu Turno</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="form-group">
                    <label htmlFor="name" className="block font-semibold mb-2">Nombre:</label>
                    <div className="relative">
                        <FaUser className="absolute left-3 top-3 text-gray-400" />
                        <input
                            type="text"
                            id="name"
                            placeholder="Escribe tu nombre completo"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className={`w-full px-12 py-3 border rounded-lg focus:outline-none focus:border-blue-500 ${errors.name ? 'border-red-500' : ''}`}
                            aria-describedby="nameError"
                        />
                    </div>
                    {errors.name && <small id="nameError" className="text-red-500 text-sm">{errors.name}</small>}
                </div>

                <div className="form-group">
                    <label htmlFor="email" className="block font-semibold mb-2">Correo Electrónico:</label>
                    <div className="relative">
                        <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                        <input
                            type="email"
                            id="email"
                            placeholder="correo@ejemplo.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className={`w-full px-12 py-3 border rounded-lg focus:outline-none focus:border-blue-500 ${errors.email ? 'border-red-500' : ''}`}
                            aria-describedby="emailError"
                        />
                    </div>
                    {errors.email && <small id="emailError" className="text-red-500 text-sm">{errors.email}</small>}
                </div>

                <div className="form-group">
                    <label htmlFor="date" className="block font-semibold mb-2">Fecha:</label>
                    <div className="relative">
                        <FaCalendarAlt className="absolute left-3 top-3 text-gray-400" />
                        <input
                            type="date"
                            id="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                            className="w-full px-12 py-3 border rounded-lg focus:outline-none focus:border-blue-500"
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="time" className="block font-semibold mb-2">Hora:</label>
                    <div className="relative">
                        <FaClock className="absolute left-3 top-3 text-gray-400" />
                        <input
                            type="time"
                            id="time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            required
                            className="w-full px-12 py-3 border rounded-lg focus:outline-none focus:border-blue-500"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition transform hover:scale-105"
                >
                    Reservar Turno
                </button>
            </form>
        </div>
    );
};

export default LegalAdvice;
