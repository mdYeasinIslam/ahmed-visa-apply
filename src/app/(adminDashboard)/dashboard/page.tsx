'use client'
import LoadingSpinner from "@/app/loading";
import ApplicationTable from "@/components/Dashboard/Home/ApplicationTable";
import CardSection from "@/components/Dashboard/Home/CardSection";
import { useGetVisaApplicationsQuery } from "@/redux/service/applyForm/visaApi";
import { ApplicationType } from "@/types/application";
import React, { useState } from "react";

const DashbaordPage = () => {
  const [pageForPagination, setPageForPagination] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const [status,setStatus] = useState("")
  const { data, error, isLoading,refetch } = useGetVisaApplicationsQuery({ page: pageForPagination, limit: 10, searchTerm, status })

  const [applications, setAppliations] = useState<ApplicationType[]>(data?.data || []);
  React.useEffect(() => {
    if (data?.data) {
      refetch()
      setAppliations(data.data);
    }
  }, [data?.data,refetch]);

  console.log(status)


  if (isLoading) {
    return <div><LoadingSpinner /></div>
  }
  if (error) {
    return <div className="text-center py-10 text-red-500">Error loading Application data</div>
  }
  return (
    <section className=' h-screen  space-y-5'>
      {/* <PageWrapper title="Overview" /> */}
      <h1 className="text-xl font-semibold text-[#1F2C5B]">Dashboard Overview</h1>
      <div className=" space-y-5">
        <div>

          <CardSection applications={applications} />
        </div>
        {/* <PerformanceChart/> */}
        <ApplicationTable
          totalData={data?.meta?.total || 0}
          totalPage={data?.meta?.totalPage || 1}
          currentPage={pageForPagination}
          applications={applications} title="Recent Applications"
          setPageForPagination={setPageForPagination}
          setSearchTerm={setSearchTerm}
          setStatus={setStatus}
        />
      </div>
    </section>
  )
};

export default DashbaordPage;
