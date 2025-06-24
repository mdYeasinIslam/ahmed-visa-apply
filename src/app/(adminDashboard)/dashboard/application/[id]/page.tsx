import Details from '@/components/Dashboard/application/Details'
import React from 'react'

const dummyData = {
    name: "John Doe",
    dateSubmitted: "2024-06-01",
    email: "john.doe@example.com",
    address: "123 Main St, City, Country",
    payment: "$100",
    paymentMethod: "Credit Card",
    phoneNumber: "+1234567890",
    status: "Processing",
    documents: [
        { id: "1", name: "Passport.pdf" },
        { id: "2", name: "VisaForm.pdf" },
    ],
}

const handleExport = () => {
    alert("Export clicked");
}

const handleDownload = (docId: string) => {
    alert(`Download clicked for document ID: ${docId}`);
}

const Page = () => {
    return (
        <div>
            <Details
                data={dummyData}
                onExport={handleExport}
                onDownload={handleDownload}
            />
        </div>
    )
}

export default Page
