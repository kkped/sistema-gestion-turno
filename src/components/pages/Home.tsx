import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaVideo, FaRegCalendarAlt, FaInfoCircle, FaCommentDots, FaTimes, FaPaperPlane } from "react-icons/fa";

const Home: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<string[]>([]);
    const [userInput, setUserInput] = useState("");

    const toggleChat = () => setIsOpen(!isOpen);

    const handleSendMessage = () => {
        if (userInput.trim()) {
            setMessages([...messages, userInput]);
            setUserInput("");
            // Respuesta automática de ejemplo
            setTimeout(() => {
                setMessages((prevMessages) => [
                    ...prevMessages,
                    "Gracias por tu mensaje. Un representante te responderá pronto.",
                ]);
            }, 1000);
        }
    };

    return (
        <div
            className="p-8 max-w-5xl mx-auto space-y-12 text-center min-h-screen"
            style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            {/* Encabezado de Bienvenida */}
            <header className="text-center">
                <h1 className="text-5xl font-bold text-white mb-4">
                    Bienvenidos a la Casa de la Justicia Quibdó
                </h1>
                <p className="text-lg text-white mb-10">
                    Accede a los servicios de justicia de manera rápida y organizada.
                </p>
            </header>

            {/* Sección de Importancia de Acudir a la Casa de Justicia */}
            <Section 
                title="Importancia de Acudir a la Casa de Justicia" 
                icon={<FaInfoCircle className="text-blue-500" />} 
                content="La Casa de Justicia ofrece un espacio seguro y accesible para resolver disputas, obtener orientación legal y facilitar la mediación en conflictos. Es un servicio esencial para la comunidad que permite a los ciudadanos acceder a justicia de manera efectiva."
                backgroundColor="bg-blue-50"
            />

            {/* Sección de Acceso a Funciones Principales */}
            <section className="bg-blue-100 p-6 rounded-lg shadow-md">
                <h2 className="text-3xl font-semibold text-center mb-6">
                    Acceso a Funciones Principales
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { to: "/login", label: "Iniciar Sesión" },
                        { to: "/register", label: "Registrarse" },
                        { to: "/dashboard", label: "Mis Turnos" },
                        { to: "/services", label: "Servicios Disponibles" }
                    ].map((link) => (
                        <Link 
                            key={link.to} 
                            to={link.to} 
                            className="p-6 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition transform hover:scale-105 shadow-lg text-center"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </section>

            {/* Sección de Misión y Visión */}
            <Section 
                title="Misión y Visión" 
                icon={<FaRegCalendarAlt className="text-blue-500" />} 
                content={
                    <>
                        <p className="mb-2"><strong>Misión:</strong> Brindar acceso a servicios de justicia de calidad para la comunidad, facilitando la resolución de conflictos de manera eficiente y respetuosa.</p>
                        <p><strong>Visión:</strong> Ser un referente de justicia en Quibdó, promoviendo la paz y el desarrollo social a través de la accesibilidad a servicios legales.</p>
                    </>
                }
                backgroundColor="bg-gray-100"
            />

            {/* Sección de Instrucciones para los Usuarios */}
            <Section 
                title="Instrucciones para los Usuarios" 
                icon={<FaInfoCircle className="text-green-500" />} 
                content={
                    <ul className="list-disc pl-5 space-y-3 text-gray-700">
                        <li>Para solicitar un turno, selecciona la opción "Solicitar Turno" y completa los datos requeridos.</li>
                        <li>Consulta el estado de tu turno para verificar tu posición en la fila o tiempo estimado de espera.</li>
                        <li>Lee las instrucciones en cada sección para facilitar el proceso.</li>
                    </ul>
                }
                backgroundColor="bg-green-100"
            />

            {/* Sección para el Video Explicativo */}
            <Section 
                title="Video Explicativo" 
                icon={<FaVideo className="text-blue-500" />} 
                content={
                    <div className="relative aspect-w-16 aspect-h-9 bg-gray-300 rounded-lg overflow-hidden shadow-lg">
                        <iframe
                            src="https://www.youtube.com/embed/ID_DEL_VIDEO"
                            title="Video Explicativo"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                        ></iframe>
                    </div>
                }
                backgroundColor="bg-gray-100"
            />

            {/* Mapa de Ubicación */}
            <Section 
                title="Ubicación de la Casa de Justicia" 
                icon={<FaMapMarkerAlt className="text-blue-500" />} 
                content={
                    <div className="relative aspect-w-16 aspect-h-9 bg-gray-300 rounded-lg overflow-hidden shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10000!2d-74.08175!3d4.60971"
                            title="Mapa de Ubicación"
                            frameBorder="0"
                            allowFullScreen
                            className="w-full h-full"
                        ></iframe>
                    </div>
                }
                backgroundColor="bg-blue-50"
            />

            {/* Chatbot */}
            <div className="fixed bottom-4 right-4 flex flex-col items-end">
                <button
                    onClick={toggleChat}
                    className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
                >
                    {isOpen ? <FaTimes size={24} /> : <FaCommentDots size={24} />}
                </button>
                {isOpen && (
                    <div className="bg-white border rounded-lg shadow-lg w-80 mt-2 p-4">
                        <h3 className="text-lg font-semibold text-blue-600 mb-2">Chat de Información</h3>
                        <div className="overflow-y-auto h-48 mb-2 border rounded-lg p-2 text-sm text-gray-700">
                            {messages.map((msg, index) => (
                                <div key={index} className="mb-1">
                                    {index % 2 === 0 ? (
                                        <div className="text-right text-blue-600">{msg}</div>
                                    ) : (
                                        <div className="text-left text-gray-500">{msg}</div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center">
                            <input
                                type="text"
                                value={userInput}
                                onChange={(e) => setUserInput(e.target.value)}
                                placeholder="Escribe tu mensaje"
                                className="border border-gray-300 rounded-lg px-3 py-1 flex-1 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <button
                                onClick={handleSendMessage}
                                className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition"
                            >
                                <FaPaperPlane />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

// Componente reutilizable para secciones
interface SectionProps {
    title: string;
    icon?: React.ReactNode;
    content: React.ReactNode;
    backgroundColor: string;
}

const Section: React.FC<SectionProps> = ({ title, icon, content, backgroundColor }) => (
    <section className={`${backgroundColor} p-6 rounded-lg shadow-md text-left transition duration-300 ease-in-out transform hover:scale-105`}>
        <h2 className="text-3xl font-semibold text-center mb-4 flex items-center justify-center space-x-2">
            {icon}
            <span>{title}</span>
        </h2>
        <div className="text-gray-700">{content}</div>
    </section>
);

export default Home;
