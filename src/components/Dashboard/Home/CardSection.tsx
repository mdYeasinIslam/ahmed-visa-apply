'use client';
import LoadingSpinner from "@/app/loading";
import { useGetVisaApplicationsQuery } from "@/redux/service/applyForm/visaApi";
import { ApplicationType } from "@/types/application";
import React, { useState } from "react";
import { FcApproval } from "react-icons/fc";
import { ImCancelCircle } from "react-icons/im";
import { MdOutlinePendingActions } from "react-icons/md";



const CardSection = () => {
    // console.log(applications)
     const { data, error, isLoading,refetch } = useGetVisaApplicationsQuery({ page: 1, limit: 100000, searchTerm: '', status: '' })
      const [applications, setAppliations] = useState<ApplicationType[]>(data?.data || []);
      React.useEffect(() => {
        if (data?.data) {
            refetch()
          setAppliations(data.data);
        }
      }, [data?.data]);
    
    
    
     const totalPending = applications.filter(app=>app.status==='PENDING')
    const totalApproved = applications.filter(app=>app.status==='APPROVED')
    const totalRejected = applications.filter(app=>app.status==='REJECTED')
    const cards = [
        {
            label: "Pending Applications",
            value: totalPending?.length,
            icon: <MdOutlinePendingActions size={32} color="#fff" />,
            iconBg: "bg-[#F5D142]",
        },
        {
            label: "Approved Applications",
            value: totalApproved?.length,
            icon: <FcApproval  size={32} color="#fff" />,
            iconBg: "bg-lime-200",
        },
        {
            label: "Rejected Application",
            value: totalRejected?.length,
            icon: <ImCancelCircle size={32} color="#fff" />,
            iconBg: "bg-[#ef4444]",
        },
    ];

      if (isLoading) {
    return <div><LoadingSpinner /></div>
  }
  if (error) {
    return <div className="text-center py-10 text-red-500">Error loading Application data</div>
  }
    // console.log(totalPending)
    return <div className="w-full flex flex-col md:flex-row gap-4 px-5 lg:px-0 xl:px-0">
        {cards.map((card, idx) => (
            <div
                key={idx}
                className="flex-1 bg-white rounded-lg p-6 flex flex-row items-center justify-between min-w-[220px] shadow-lg border"
            >
                <div className="flex flex-col">
                    <span className="text-gray-700 text-base font-semibold">{card.label}</span>
                    <span className="mt-3 text-2xl font-bold text-gray-900">{card.value}</span>
                </div>
                <div className={`w-16 h-16 rounded-full flex items-center justify-center ${card.iconBg}`}>
                    {card.icon}
                </div>
            </div>
        ))}
    </div>
}

export default CardSection;