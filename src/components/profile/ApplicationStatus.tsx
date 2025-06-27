'use client'
import LoadingSpinner from '@/app/loading'
import { useGetEachUserApplicationsQuery } from '@/redux/service/applyForm/visaApi'
import { ApplicationType } from '@/types/application'
import React, { useState } from 'react'

const StatusBadge = ({ status }: { status: string }) => {
    let color = "";
    let bg = "";
    switch (status) {
        case "PROCESSING":
            color = "text-blue-600";
            bg = "bg-blue-100";
            break;
        case "APPROVED":
            color = "text-green-600";
            bg = "bg-green-100";
            break;
        case "Pending":
            color = "text-orange-600";
            bg = "bg-orange-100";
            break;
        case "REJECTED":
            color = "text-red-600";
            bg = "bg-red-100";
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
const ApplicationStatus = () => {
const { data,error,isLoading }  = useGetEachUserApplicationsQuery({ page: 1, limit: 100 })

  const [applications, setAppliations] = useState<ApplicationType[]>(data?.data || []);
  React.useEffect(() => {
    if (data?.data) {
      setAppliations(data.data);
    }
  }, [data?.data]);

  // console.log(applications)
 if (isLoading) {
    return <div><LoadingSpinner /></div>
  }
  if (error) {
    return <div className="text-center py-10 text-red-500">Error loading Application data</div>
  }
  return (
    <div className='max-w-3xl space-y-5 my-10'>
      <h1 className='text-2xl font-semibold'>Application status</h1>
      <div className=' grid grid-cols-1 gap-5 '>
        {
            applications?.map((data,idx)=>{
                return <div key={idx} className='flex justify-between bg-[#F3FAFF] py-5 px-4 text-sm'>
                    <h1 className='flex flex-col gap-2'><span className='text-[#475163]'> Apply date </span><span>{data?.createdAt?.split("T")[0]}</span></h1>
                    <p className='flex flex-col  gap-2 text-right'><span className='text-right'>Apply Status </span><span className=''> <StatusBadge status={data?.status} /></span></p>
                </div>
            })
        }
      </div>
    </div>
  )
}

export default ApplicationStatus
