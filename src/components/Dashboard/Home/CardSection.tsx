'use client';
import React from "react";
import { FaRegFileAlt, FaCamera, FaSyncAlt } from "react-icons/fa";

const cards = [
    {
        label: "New Application",
        value: "126",
        icon: <FaRegFileAlt size={32} color="#fff" />,
        iconBg: "bg-[#232F5A]",
    },
    {
        label: "Pending Applications",
        value: "123",
        icon: <FaCamera size={32} color="#fff" />,
        iconBg: "bg-[#F5D142]",
    },
    {
        label: "Processed Applications",
        value: "152",
        icon: <FaSyncAlt size={32} color="#fff" />,
        iconBg: "bg-[#13A7A7]",
    },
];

const CardSection = () => (
    <div className="w-full flex flex-col md:flex-row gap-4 px-5 lg:px-0 xl:px-0">
        {cards.map((card, idx) => (
            <div
                key={idx}
                className="flex-1 bg-white rounded-lg p-6 flex flex-row items-center justify-between min-w-[220px] shadow-sm"
            >
                <div className="flex flex-col">
                    <span className="text-gray-700 text-base font-normal">{card.label}</span>
                    <span className="mt-3 text-2xl font-bold text-gray-900">{card.value}</span>
                </div>
                <div className={`w-16 h-16 rounded-full flex items-center justify-center ${card.iconBg}`}>
                    {card.icon}
                </div>
            </div>
        ))}
    </div>
);

export default CardSection;