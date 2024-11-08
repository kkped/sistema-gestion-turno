import React, { useState } from 'react';


const TurnoForm: React.FC = () => {
    const [isRegistered, setIsRegistered] = useState(false); // Simula si el usuario está registrado o no
    const [serviceType, setServiceType] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [address, setAddress] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Validación simple
        if (isRegistered) {
            if (!serviceType || !date || !time) {
                setError('Por favor completa todos los campos');
                return;
            }
        } else {
            if (!firstName || !lastName || !phone || !email || !gender || !address) {
                setError('Por favor completa todos los campos para registrarte');
                return;
            }
        }

        setError(''); // Limpiar error si todo está completo
        console.log('Turno Solicitado:', { firstName, lastName, phone, email, gender, address, serviceType, date, time });
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md max-w-xl mx-auto">

            {error && <p className="text-red-500 mb-4">{error}</p>}

            {/* Formulario para usuarios no registrados */}
            {!isRegistered ? (
                <>
                    <h2 className="text-2xl font-semibold mb-6 text-center">Registro de Usuario</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block mb-1 font-semibold">Nombre</label>
                            <input
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className="w-full px-3 py-2 border rounded"
                                placeholder="Escribe tu nombre"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-semibold">Apellidos</label>
                            <input
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                className="w-full px-3 py-2 border rounded"
                                placeholder="Escribe tus apellidos"
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block mb-1 font-semibold">Teléfono</label>
                        <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full px-3 py-2 border rounded"
                            placeholder="Escribe tu número de teléfono"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-1 font-semibold">Correo Electrónico</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 border rounded"
                            placeholder="correo@ejemplo.com"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-1 font-semibold">Sexo</label>
                        <select
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            className="w-full px-3 py-2 border rounded"
                        >
                            <option value="">Selecciona tu sexo</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Femenino">Femenino</option>
                            <option value="Otro">Otro</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block mb-1 font-semibold">Dirección</label>
                        <input
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="w-full px-3 py-2 border rounded"
                            placeholder="Escribe tu dirección"
                        />
                    </div>

                    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                        Registrarse
                    </button>
                </>
            ) : (
                // Formulario para usuarios registrados
                <>
                    <h2 className="text-2xl font-semibold mb-6 text-center">Reservar Turno</h2>
                    <div className="mb-4">
                        <label className="block mb-1 font-semibold">Tipo De Servicio</label>
                        <select
                            value={serviceType}
                            onChange={(e) => setServiceType(e.target.value)}
                            className="w-full px-3 py-2 border rounded"
                        >
                            <option value="">Selecciona un servicio</option>
                            <option value="Autenticación">Autenticación y Notariado</option>
                            <option value="Protección">Protección de Víctimas</option>
                            <option value="Trámite">Trámite de Registro Civil</option>
                            <option value="Seguimiento">Seguimiento y Monitoreo de Casos</option>
                            <option value="Conciliación">Conciliación</option>
                            <option value="Asesoría">Asesoría Legal</option>
                            <option value="Otro">Otro</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div>
                            <label className="block mb-1 font-semibold">Fecha</label>
                            <input
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className="w-full px-3 py-2 border rounded"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-semibold">Hora</label>
                            <input
                                type="time"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                                className="w-full px-3 py-2 border rounded"
                            />
                        </div>
                    </div>

                    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                        Confirmar Turno
                    </button>
                </>
            )}

            {/* Enlace para cambiar el estado de registro (solo para pruebas) */}
            <div className="mt-4 text-center">
                <button onClick={() => setIsRegistered(!isRegistered)} className="text-blue-600 underline">
                    {isRegistered ? "¿No tienes una cuenta? Regístrate" : "¿Ya tienes una cuenta? Inicia sesión"}
                </button>
            </div>
        </form>
    );
};

export default TurnoForm;
