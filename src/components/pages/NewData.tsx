// src/pages/newData.tsx
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/just.jpeg";
import image from "../../assets/img/1.webp";
import image1 from "../../assets/img/2.webp";
import image2 from "../../assets/img/3.webp";
import image3 from "../../assets/img/4.webp";
import image4 from "../../assets/img/6.webp";

const newData: React.FC = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header */}
            <header className="flex justify-between items-center p-6 bg-white shadow-md">
                <div className="flex items-center space-x-3">
                    <img src={logo} alt="Casa de Justicia" className="h-16 w-16 rounded-full" />
                    <h1 className="text-3xl font-extrabold text-gray-800">CASA DE JUSTICIA</h1>
                </div>
                <h2 className="text-xl font-bold text-gray-600 tracking-wide">INFORMATE CON NOSOTROS</h2>
                <div className="text-gray-500 font-semibold text-lg">VIERNES 27 OCTUBRE</div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto p-6 grid grid-cols-12 gap-6">
                {/* Sidebar - Lo de hoy */}
                <aside className="col-span-3 bg-white p-5 rounded-lg shadow-sm">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Lo de hoy</h2>
                    <div className="space-y-4">
                        {[1, 2, 3, 4, 5].map((item) => (
                            <div key={item} className="p-4 bg-gray-50 rounded-lg shadow-md border-l-4 border-blue-600">
                                <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant at se ut ipsum leo.</p>
                            </div>
                        ))}
                    </div>
                </aside>

                {/* Noticias destacadas */}
                <section className="col-span-6 bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">#EnTendencia</h2>
                    <div className="space-y-4">
                        <span className="text-blue-600 text-sm font-semibold">#Noticia1</span>
                        <img src={image} alt="Noticia" className="w-full h-64 object-cover mt-4 rounded-lg shadow-sm" />
                        <div className="mt-4">
                            <h3 className="text-xl font-bold text-gray-800">Titular</h3>
                            <p className="text-gray-500 text-sm">10 octubre 2024</p>
                            <p className="text-gray-700 mt-2">
                                Según una reciente publicación en EL PAÍS, la sensación de impunidad y el desconocimiento de las leyes son el caldo de cultivo para los delitos contra la vida íntima.
                            </p>
                            <Link to={`/noticia/1`} className="inline-block mt-4 text-blue-600 font-semibold hover:underline">
                                Ver más
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Sidebar - Publicidad */}
                <aside className="col-span-3 bg-white p-5 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Publicidad</h2>
                    <img src={image4} alt="Publicidad" className="w-full h-auto rounded-lg shadow-md" />
                </aside>
            </main>

            {/* Additional Content */}
            <section className="max-w-7xl mx-auto p-6 grid grid-cols-3 gap-6">
                {[image1, image2, image3].map((img, index) => (
                    <div key={index} className="p-4 bg-white rounded-lg shadow-md">
                        <img src={img} alt={`Noticia adicional ${index + 1}`} className="w-full h-48 object-cover rounded-lg shadow-sm" />
                        <h3 className="mt-4 text-lg font-semibold text-gray-800">Título adicional</h3>
                        <p className="text-gray-600 text-sm mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque odio quis.</p>
                        <Link to={`/noticia/${index + 2}`} className="inline-block mt-4 text-blue-600 font-semibold hover:underline">
                            Ver más
                        </Link>
                    </div>
                ))}
            </section>

            {/* Siguiente Button */}
            <div className="flex justify-center mt-8">
                <Link to="/contenido-adicional" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition">
                    Siguiente
                </Link>
            </div>
        </div>
    );
};

export default newData;
