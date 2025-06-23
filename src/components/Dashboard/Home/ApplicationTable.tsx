import React from "react";

// Reusable Badge component
const StatusBadge = ({ status }: { status: string }) => {
    let color = "";
    let bg = "";
    switch (status) {
        case "Processing":
            color = "text-blue-600";
            bg = "bg-blue-100";
            break;
        case "New":
            color = "text-green-600";
            bg = "bg-green-100";
            break;
        case "Pending":
            color = "text-orange-600";
            bg = "bg-orange-100";
            break;
        default:
            color = "text-gray-600";
            bg = "bg-gray-100";
    }
    return (
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${color} ${bg}`}>
            {status}
        </span>
    );
};

// Reusable Select component
const ActionSelect = ({ value }: { value: string }) => (
    <select
        className="bg-[#232C54] text-white rounded px-2 py-1 focus:outline-none"
        defaultValue={value}
    >
        <option>Processing</option>
        <option>Pending</option>
        <option>New</option>
    </select>
);

const data = [
    {
        name: "Emery",
        date: "19 May 25 03:55 AM",
        email: "emery@exa...",
        address: "Morocco...",
        payment: "$1234",
        status: "Processing",
        action: "Processing",
    },
    {
        name: "Terry",
        date: "19 May 25 03:55 AM",
        email: "emery@exa...",
        address: "Morocco...",
        payment: "$1234",
        status: "New",
        action: "New",
    },
    {
        name: "Marcus",
        date: "19 May 25 03:55 AM",
        email: "emery@exa...",
        address: "Morocco...",
        payment: "$1234",
        status: "New",
        action: "New",
    },
    {
        name: "Emerson",
        date: "19 May 25 03:55 AM",
        email: "emery@exa...",
        address: "Morocco...",
        payment: "$1234",
        status: "New",
        action: "New",
    },
    {
        name: "Paityn",
        date: "19 May 25 03:55 AM",
        email: "emery@exa...",
        address: "Morocco...",
        payment: "$1234",
        status: "Pending",
        action: "Pending",
    },
    {
        name: "Mira",
        date: "19 May 25 03:55 AM",
        email: "emery@exa...",
        address: "Morocco...",
        payment: "$1234",
        status: "Processing",
        action: "Processing",
    },
    {
        name: "Dulce",
        date: "19 May 25 03:55 AM",
        email: "emery@exa...",
        address: "Morocco...",
        payment: "$1234",
        status: "Processing",
        action: "Processing",
    },
    {
        name: "Ryan",
        date: "19 May 25 03:55 AM",
        email: "emery@exa...",
        address: "Morocco...",
        payment: "$1234",
        status: "Pending",
        action: "Pending",
    },
    {
        name: "Zain",
        date: "19 May 25 03:55 AM",
        email: "emery@exa...",
        address: "Morocco...",
        payment: "$1234",
        status: "Processing",
        action: "Processing",
    },
];

const ApplicationTable = () => {
    return (
        <div className="">
            <h2 className="text-xl font-semibold mb-6">Recent Applications</h2>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                <input
                    type="text"
                    placeholder="Search Applications..."
                    className="border rounded px-4 py-2 w-full md:w-80 focus:outline-none"
                />
                <div className="flex gap-3">
                    <button className="border rounded px-4 py-2 bg-white hover:bg-gray-50">
                        Export CSV or Excel
                    </button>
                    <button className="border rounded px-4 py-2 flex items-center gap-2 bg-white hover:bg-gray-50">
                        Filter
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707l-6.414 6.414A2 2 0 0013 14.586V19a1 1 0 01-1.447.894l-4-2A1 1 0 017 17v-2.414a2 2 0 00-.586-1.414L3.293 6.707A1 1 0 013 6V4z" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className=" rounded-t-lg overflow-x-auto">
                <table className="min-w-full">
                    <thead>
                        <tr className="text-white text-left bg-[#232C54]">
                            <th className="px-4 py-5 font-medium">User Name</th>
                            <th className="px-4 py-5 font-medium">Date submitted</th>
                            <th className="px-4 py-5 font-medium">Email</th>
                            <th className="px-4 py-5 font-medium">Address</th>
                            <th className="px-4 py-5 font-medium">Payment</th>
                            <th className="px-4 py-5 font-medium">Status</th>
                            <th className="px-4 py-5 font-medium">Action</th>
                            <th className="px-4 py-5 font-medium">Details</th>
                        </tr>
                    </thead>
              
                    <tbody>
                        {data.map((row, idx) => (
                            <tr key={idx} className="border-b text-left last:border-b-0 bg-white">
                                <td className="px-4 py-3">{row.name}</td>
                                <td className="px-4 py-3">{row.date}</td>
                                <td className="px-4 py-3">{row.email}</td>
                                <td className="px-4 py-3">{row.address}</td>
                                <td className="px-4 py-3">{row.payment}</td>
                                <td className="px-4 py-3">
                                    <StatusBadge status={row.status} />
                                </td>
                                <td className="px-4 py-3">
                                    <ActionSelect value={row.action} />
                                </td>
                                <td className="px-4 py-3">
                                    <button className="p-2 rounded hover:bg-gray-100">
                                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <circle cx="12" cy="12" r="1.5" />
                                            <circle cx="19.5" cy="12" r="1.5" />
                                            <circle cx="4.5" cy="12" r="1.5" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {/* Pagination */}
                <div className="flex items-center justify-between px-4 py-3 text-sm text-gray-700">
                    <span>Showing 1-9 of 187</span>
                    <div className="flex items-center gap-1">
                        <button className="p-2 rounded hover:bg-gray-100" disabled>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        {[1, 2, 3, 4, 5].map((n) => (
                            <button
                                key={n}
                                className={`w-8 h-8 rounded ${n === 1 ? "bg-[#232C54] text-white" : "hover:bg-gray-100"}`}
                            >
                                {n}
                            </button>
                        ))}
                        <button className="p-2 rounded hover:bg-gray-100">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApplicationTable;
