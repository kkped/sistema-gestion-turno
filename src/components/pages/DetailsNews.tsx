// src/pages/DetailsNews.tsx
import React from "react";
import { useParams } from "react-router-dom";
import logo from "../../assets/agenda.jpg";
import image1 from "../../assets/img/3.webp";
import image2 from "../../assets/img/4.webp";
import image3 from "../../assets/img/6.webp";
import image4 from "../../assets/img/2.webp";

const DetailsNews: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    // Mapeo de imágenes según el ID de la noticia
    const imageMap: { [key: string]: string } = {
        "1": image1,
        "2": image2,
        "3": image3,
        "4": image4,
    };

    // Selecciona la imagen en función del ID, o una imagen por defecto si el ID no coincide
    const selectedImage = imageMap[id ?? "1"] || image1;

    return (
        <div className="bg-gray-100 min-h-screen">
            <header className="flex justify-between items-center p-4 bg-white shadow-md">
                <div className="flex items-center space-x-3">
                    <img src={logo} alt="Casa de Justicia" className="h-16 w-16" />
                    <h1 className="text-3xl font-bold text-gray-800">CASA DE JUSTICIA</h1>
                </div>
                <h1 className="text-3xl font-bold text-gray-800">NOTICIA COMPLETA</h1>
                <div className="text-red-600 font-semibold text-lg">VIERNES 27 OCTUBRE</div>
            </header>

            <main className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
                <span className="text-blue-500 text-sm font-semibold">#{id}</span>
                <img src={selectedImage} alt="Detalle Noticia" className="w-full h-64 object-cover mt-4 rounded-lg" />
                <div className="mt-4">
                    <h3 className="text-2xl font-bold text-gray-800">Titular Completo de la Noticia</h3>
                    <p className="text-gray-600 text-sm">10 octubre 2024</p>
                    <p className="text-gray-700 mt-4">
                        Aquí va el contenido completo de la noticia. Puedes agregar detalles adicionales sobre el evento o situación que la noticia cubre. 
                        Según una reciente publicación en EL PAÍS, la sensación de impunidad y el desconocimiento de las leyes son el caldo de cultivo para los delitos contra la vida íntima.
                    </p>
                </div>
            </main>
        </div>
    );
};

export default DetailsNews;
