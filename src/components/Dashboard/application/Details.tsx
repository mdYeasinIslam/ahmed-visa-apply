import { ApplicationType } from "@/types/application";
import React from "react";

type ApplicationDetailsProps = {
    data: {
        name: string;
        dateSubmitted: string;
        email: string;
        address: string;
        payment: string;
        paymentMethod: string;
        phoneNumber: string;
        status: string;
        documents: { id: string; name: string }[];
    };
    onExport: () => void;
    onDownload: (docId: string) => void;
    application: ApplicationType | undefined
};

const statusOptions = [
    "Processing",
    "Approved",
    "Rejected",
    "Pending",
];

const Details: React.FC<ApplicationDetailsProps> = ({
    data,
    application
    // onExport,
    // onDownload,
}) => {

    console.log(application)
    return (
        <div style={{ padding: 24 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div style={{ fontWeight: 600, color: "#1a1a4b", marginBottom: 12 }}>
                    Application Details
                </div>
                <button
                    style={{
                        padding: "8px 16px",
                        background: "#fff",
                        border: "1px solid #d1d5db",
                        borderRadius: 6,
                        cursor: "pointer",
                        fontWeight: 500,
                    }}
                // onClick={onExport}
                >
                    Export CSV or Excel
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-5 mb-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                        value={application?.firstName}
                        readOnly
                        className="w-full px-3 py-2 border border-[#1a1a4b] rounded-md mt-1 mb-3 text-base bg-white"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date submitted</label>
                    <input
                        value={application?.createdAt.split('T')[0]}
                        readOnly
                        className="w-full px-3 py-2 border border-[#1a1a4b] rounded-md mt-1 mb-3 text-base bg-white"
                        type="date"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                        value={application?.email}
                        readOnly
                        className="w-full px-3 py-2 border border-[#1a1a4b] rounded-md mt-1 mb-3 text-base bg-white"
                        type="email"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                    <input
                        value={application?.address}
                        readOnly
                        className="w-full px-3 py-2 border border-[#1a1a4b] rounded-md mt-1 mb-3 text-base bg-white"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Payment</label>
                    <input
                        value={`$ ${application?.payment ? application?.payment : "100"} `}
                        readOnly
                        className="w-full px-3 py-2 border border-[#1a1a4b] rounded-md mt-1 mb-3 text-base bg-white"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone number</label>
                    <input
                        value={application?.phone}
                        readOnly
                        className="w-full px-3 py-2 border border-[#1a1a4b] rounded-md mt-1 mb-3 text-base bg-white"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                    <input
                        value={application?.status}
                        readOnly
                        className="w-full px-3 py-2 border border-[#1a1a4b] rounded-md mt-1 mb-3 text-base bg-white"
                    />
                </div>
            </div>
            <div style={{ fontWeight: 600, color: "#1a1a4b", marginBottom: 8, fontSize: 14 }}>
                Uploaded Documents
            </div>
            <div>
                {application?.documents && application?.documents.map((doc) => (
                    <div
                        key={doc.id}
                        style={{
                            background: "#f5f5f5",
                            borderRadius: 8,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: "20px 24px",
                            marginBottom: 16,
                        }}
                    >
                        <span style={{ fontSize: 18 }}>{doc.fileName}</span>
                        <a
                            href={doc.fileUrl}  // URL of the file
                            download={doc.fileName}  // This will use the file name when downloaded
                            className="bg-[#364fa8] hover:bg-[#1F2C5B] duration-500 text-white border-none rounded-lg px-6 py-2 cursor-pointer font-medium"
                        >
                            Download
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "10px 12px",
    border: "1px solid #1a1a4b",
    borderRadius: 6,
    marginTop: 4,
    marginBottom: 12,
    fontSize: 16,
    background: "#fff",
};

const selectStyle: React.CSSProperties = {
    ...inputStyle,
    background: "#1a1a4b",
    color: "#fff",
    fontWeight: 500,
};

export default Details;
