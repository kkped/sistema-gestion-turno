import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-700 text-white p-10 mt-8 text-center">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">

                {/* Columna de información de contacto */}
                <div>
                    <h2 className="text-lg font-semibold text-blue-400 mb-4">Contáctanos</h2>
                    <p className="flex items-center justify-center md:justify-start gap-2 mb-2">
                        <FaMapMarkerAlt /> Calle 10 # 2-36, Quibdó, Chocó
                    </p>
                    <p className="flex items-center justify-center md:justify-start gap-2 mb-2">
                        <FaPhoneAlt /> +57 123 456 7890
                    </p>
                    <p className="flex items-center justify-center md:justify-start gap-2">
                        <FaEnvelope /> contacto@casadejusticia.com
                    </p>
                </div>

                {/* Columna de redes sociales */}
                <div>
                    <h2 className="text-lg font-semibold text-blue-400 mb-4">Síguenos en redes sociales</h2>
                    <div className="flex justify-center md:justify-start gap-6">
                        <a href="#" aria-label="Facebook" className="hover:text-blue-500 transition-colors">
                            <FaFacebook size={28} />
                        </a>
                        <a href="#" aria-label="Twitter" className="hover:text-blue-400 transition-colors">
                            <FaTwitter size={28} />
                        </a>
                        <a href="#" aria-label="Instagram" className="hover:text-pink-500 transition-colors">
                            <FaInstagram size={28} />
                        </a>
                    </div>
                </div>

                {/* Columna de derechos reservados */}
                <div>
                    <h2 className="text-lg font-semibold text-blue-400 mb-4">Legal</h2>
                    <p>Casa de Justicia Quibdó</p>
                    <p>Todos los derechos reservados © {new Date().getFullYear()}</p>
                </div>
            </div>

            {/* Línea divisoria y mensaje adicional */}
            <div className="mt-8 border-t border-gray-600 pt-4">
                <p className="text-xs text-gray-300">
                    Este sitio está diseñado para ofrecer información y servicios de justicia accesibles para todos.
                </p>
            </div>
        </footer>
    );
};


export default Footer;
