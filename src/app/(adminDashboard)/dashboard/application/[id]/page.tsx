'use client'
import LoadingSpinner from '@/app/loading';
import Details from '@/components/Dashboard/application/Details'
import { useGetApplicationByIDQuery } from '@/redux/service/applyForm/visaApi';
import { ApplicationType } from '@/types/application';
import { useParams } from 'next/navigation';
import React, { useState } from 'react'

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
    const param = useParams()
    const { data, error, isLoading } = useGetApplicationByIDQuery(String(param.id))

    const [application, setAppliations] = useState<ApplicationType | undefined>(data?.data);
    React.useEffect(() => {
        if (data?.data) {

            setAppliations(data?.data);
        }
    }, [data?.data]);

    if (isLoading) {
        return <div><LoadingSpinner /></div>
    }
    if (error) {
        return <div className="text-center py-10 text-red-500">Error loading Application data</div>
    }
    return (
        <div>
            <Details
                data={dummyData}
                application={application}
                onExport={handleExport}
                onDownload={handleDownload}
            />
        </div>
    )
}

export default Page
