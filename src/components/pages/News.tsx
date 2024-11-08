import React from "react";

const News: React.FC = () => {
    // Ejemplo de datos de noticias
    const newsData = [
        {
            id: 1,
            title: "Nueva Iniciativa para la Justicia Social",
            description: "La Casa de la Justicia lanza un programa de mediación comunitaria para mejorar el acceso a la justicia en Quibdó.",
            image: "https://via.placeholder.com/300",
            date: "08/11/2024",
        },
        {
            id: 2,
            title: "Actualización en los Servicios de Turnos",
            description: "Se han mejorado los tiempos de espera y la asignación de turnos en la Casa de la Justicia para una atención más rápida.",
            image: "https://via.placeholder.com/300",
            date: "07/11/2024",
        },
        {
            id: 3,
            title: "Semana de la Justicia 2024",
            description: "Eventos, conferencias y talleres para la comunidad durante la Semana de la Justicia en Quibdó.",
            image: "https://via.placeholder.com/300",
            date: "06/11/2024",
        },
    ];

    return (
        <div className="p-8 max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold text-white text-center mb-10">Noticias</h1>

            <div className="space-y-8">
                {newsData.map((news) => (
                    <div key={news.id} className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row md:space-x-6">
                        <img 
                            src={news.image} 
                            alt={news.title} 
                            className="w-full md:w-1/3 rounded-lg object-cover h-48 md:h-auto mb-4 md:mb-0"
                        />
                        <div className="flex-1">
                            <h2 className="text-2xl font-semibold text-blue-700 mb-2">{news.title}</h2>
                            <p className="text-gray-600 mb-4">{news.description}</p>
                            <p className="text-sm text-gray-500">Publicado el: {news.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default News;
