import React from 'react'

const apllicationData = [
    { date: '2024-06-01', status: 'Processing' },
    { date: '2024-06-02', status: 'approved' },
    { date: '2024-06-03', status: 'Processing' },
    { date: '2024-06-04', status: 'approved' },
]

const ApplicationStatus = () => {
  return (
    <div className='max-w-3xl space-y-5 my-10'>
      <h1 className='text-2xl font-semibold'>Application status</h1>
      <div className=' grid grid-cols-1 gap-5 '>
        {
            apllicationData?.map((data,idx)=>{
                return <div key={idx} className='flex justify-between bg-[#F3FAFF] py-5 px-4 text-sm'>
                    <h1 className='flex flex-col gap-2'><span className='text-[#475163]'> Apply date </span><span>{data.date}</span></h1>
                    <p className='flex flex-col  gap-2'><span className='text-[#475163]'>Apply Status </span><span className='bg-[#EAF3E8] text-[#89B513] px-3  rounded-xl py-1'>{data.status}</span></p>
                </div>
            })
        }
      </div>
    </div>
  )
}

export default ApplicationStatus
