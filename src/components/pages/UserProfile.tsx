import React, { useState } from "react";

const UserProfile: React.FC = () => {
    // Estados para la información del usuario
    const [name, setName] = useState("Nombre Usuario");
    const [email, setEmail] = useState("usuario@example.com");
    const [password, setPassword] = useState("");
    const [editMode, setEditMode] = useState(false);
    const [error, setError] = useState("");

    // Manejador para actualizar el perfil
    const handleSave = () => {
        if (!name || !email) {
            setError("Por favor, completa todos los campos.");
            return;
        }

        setError("");
        setEditMode(false);
        console.log("Perfil actualizado:", { name, email, password });
        alert("Perfil actualizado exitosamente");
    };

    // Manejador para cancelar la edición
    const handleCancel = () => {
        setEditMode(false);
        setError("");
    };

    return (
        <div className="p-8 max-w-md mx-auto bg-white rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-6 text-blue-700">Perfil de Usuario</h2>

            {/* Modo de Visualización */}
            {!editMode ? (
                <>
                    <div className="mb-4">
                        <p className="text-lg font-medium text-gray-800">
                            <strong>Nombre:</strong> {name}
                        </p>
                    </div>
                    <div className="mb-4">
                        <p className="text-lg font-medium text-gray-800">
                            <strong>Email:</strong> {email}
                        </p>
                    </div>
                    <button
                        onClick={() => setEditMode(true)}
                        className="w-full bg-blue-600 hover:bg-blue-700 transition-colors text-white py-2 rounded-lg font-semibold"
                    >
                        Editar Perfil
                    </button>
                </>
            ) : (
                // Modo de Edición
                <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                    {error && <p className="text-red-500 text-center">{error}</p>}

                    <div>
                        <label className="block mb-2 text-sm font-semibold text-gray-700">Nombre</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300" 
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-semibold text-gray-700">Correo Electrónico</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300" 
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-semibold text-gray-700">Contraseña</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                            placeholder="Nueva contraseña"
                        />
                        <small className="text-gray-500">Deja en blanco si no deseas cambiarla</small>
                    </div>

                    <div className="flex space-x-4 mt-6">
                        <button
                            onClick={handleSave}
                            className="w-full bg-blue-600 hover:bg-blue-700 transition-colors text-white py-2 rounded-lg font-semibold"
                        >
                            Guardar Cambios
                        </button>
                        <button
                            onClick={handleCancel}
                            className="w-full bg-gray-400 hover:bg-gray-500 transition-colors text-white py-2 rounded-lg font-semibold"
                        >
                            Cancelar
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default UserProfile;
