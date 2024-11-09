import React from "react";

interface DashboardCardProps {
    title: string;
    content: React.ReactNode;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, content }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">{title}</h3>
            <div className="text-gray-700 text-sm">
                {content}
            </div>
        </div>
    );
};

export default DashboardCard;
