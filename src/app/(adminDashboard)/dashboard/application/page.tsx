'use client'
import LoadingSpinner from '@/app/loading'
import ApplicationTable from '@/components/Dashboard/Home/ApplicationTable'
import { useGetVisaApplicationsQuery } from '@/redux/service/applyForm/visaApi'
import { ApplicationType } from '@/types/application'
import React, { useState } from 'react'

const Page = () => {
  const [pageForPagination, setPageForPagination] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const [status,setStatus] = useState('')
  const { data, error, isLoading } = useGetVisaApplicationsQuery({ page: pageForPagination, limit: 10, searchTerm ,status})

  const [applications, setAppliations] = useState<ApplicationType[]>(data?.data || []);
  React.useEffect(() => {
    if (data?.data) {
      setAppliations(data.data);
    }
  }, [data?.data]);

  // console.log(status)


  if (isLoading) {
    return <div><LoadingSpinner /></div>
  }
  if (error) {
    return <div className="text-center py-10 text-red-500">Error loading Application data</div>
  }
  return (
    <div>
      <ApplicationTable
        totalData={data?.meta?.total || 0}
        currentPage={pageForPagination}
        totalPage={data?.meta?.totalPage || 1}
        applications={applications} title='Application'
        setPageForPagination={setPageForPagination}
        setSearchTerm={setSearchTerm}
        setStatus={setStatus}
      />
    </div>
  )
}

export default Page
