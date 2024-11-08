import React from "react";


interface DashboardCardProps{
    title: string;
    content: string;
}

const DashboardCard: React.FC <DashboardCardProps> = ({title, content}) => {

    return(
        <div className="bg-white p-4 rounded shadow-md">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>

            <p className="text-gray-600">{content}</p>
        </div>
    );
};

export default DashboardCard;