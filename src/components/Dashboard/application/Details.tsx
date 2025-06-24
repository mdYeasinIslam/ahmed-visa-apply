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
};

const statusOptions = [
    "Processing",
    "Approved",
    "Rejected",
    "Pending",
];

const Details: React.FC<ApplicationDetailsProps> = ({
    data,
    // onExport,
    // onDownload,
}) => {
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
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 24,
                    marginBottom: 24,
                }}
            >
                <div>
                    <label>Name</label>
                    <input
                        value={data.name}
                        readOnly
                        style={inputStyle}
                    />
                </div>
                <div>
                    <label>Date submitted</label>
                    <input
                        value={data.dateSubmitted}
                        readOnly
                        style={inputStyle}
                        type="date"
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input
                        value={data.email}
                        readOnly
                        style={inputStyle}
                        type="email"
                    />
                </div>
                <div>
                    <label>Address</label>
                    <input
                        value={data.address}
                        readOnly
                        style={inputStyle}
                    />
                </div>
                <div>
                    <label>Payment</label>
                    <input
                        value={data.payment}
                        readOnly
                        style={inputStyle}
                    />
                </div>
                <div>
                    <label>Payment Method</label>
                    <input
                        value={data.paymentMethod}
                        readOnly
                        style={inputStyle}
                    />
                </div>
                <div>
                    <label>Phone number</label>
                    <input
                        value={data.phoneNumber}
                        readOnly
                        style={inputStyle}
                    />
                </div>
                <div>
                    <label>Statas</label>
                    <select value={data.status}  style={selectStyle}>
                        {statusOptions.map((s) => (
                            <option key={s} value={s}>
                                {s}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div style={{ fontWeight: 600, color: "#1a1a4b", marginBottom: 8, fontSize: 14 }}>
                Uploaded Documents
            </div>
            <div>
                {data.documents.map((doc) => (
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
                        <span style={{ fontSize: 18 }}>{doc.name}</span>
                        <button
                            style={{
                                background: "#bdbdbd",
                                color: "#fff",
                                border: "none",
                                borderRadius: 8,
                                padding: "8px 24px",
                                cursor: "pointer",
                                fontWeight: 500,
                            }}
                            // onClick={() => onDownload(doc.id)}
                        >
                            Download
                        </button>
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
