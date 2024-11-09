// src/pages/AdditionalContent.tsx
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/agenda.jpg";
import image4 from "../../assets/img/1.webp";
import image from "../../assets/img/3.webp";
// import image1 from "../../assets/imagen/4.webp";
// import image2 from "../../assets/imagen/6.webp";
// import image3 from "../../assets/imagen/2.webp";

const AdditionalContent: React.FC = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <header className="flex justify-between items-center p-4 bg-white shadow-md">
                <div className="flex items-center space-x-3">
                    <img src={logo} alt="Casa de Justicia" className="h-16 w-16" />
                    <h1 className="text-3xl font-bold text-gray-800">CASA DE JUSTICIA</h1>
                </div>
                <h1 className="text-3xl font-bold text-gray-800">CONTENIDO ADICIONAL</h1>
                <div className="text-red-600 font-semibold text-lg">VIERNES 27 OCTUBRE</div>
            </header>

            <main className="max-w-7xl mx-auto p-6 grid grid-cols-12 gap-6">
                {/* Sidebar - Noticias Relevantes */}
                <aside className="col-span-3">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Noticias Relevantes</h2>
                    <div className="space-y-4">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="p-4 bg-white rounded-lg shadow-sm border-l-4 border-blue-600">
                                <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae augue non neque posuere dictum.</p>
                            </div>
                        ))}
                    </div>
                </aside>

                {/* Main Content - Artículos Destacados */}
                <section className="col-span-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Artículos Destacados</h2>
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <span className="text-blue-500 text-sm font-semibold">#Artículo1</span>
                        <img src={image} alt="Artículo" className="w-full h-64 object-cover mt-4 rounded-lg" />
                        <div className="mt-4">
                            <h3 className="text-xl font-bold text-gray-800">Titular del artículo</h3>
                            <p className="text-gray-600 text-sm">10 octubre 2024</p>
                            <p className="text-gray-700 mt-2">Este artículo aborda la situación jurídica actual de los derechos humanos en el contexto local y regional.</p>
                            <Link to={`/articulo/1`} className="mt-4 text-blue-500 font-semibold hover:underline">Leer más</Link>
                        </div>
                    </div>
                </section>

                {/* Sidebar - Anuncios */}
                <aside className="col-span-3">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Anuncios</h2>
                    <img src={image4} alt="Anuncio" className="w-full h-auto rounded-lg shadow-md" />
                </aside>
            </main>

            {/* Volver al inicio */}
            <div className="flex justify-center mt-6">
                <Link to="/" className="px-6 py-3 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-600">
                    Volver al Inicio
                </Link>
            </div>
        </div>
    );
};

export default AdditionalContent;
