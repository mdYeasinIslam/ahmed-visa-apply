'use client'
import React, { useState } from 'react'
import Personalinfo from '@/components/profile/Personalinfo'
import ApplicationStatus from '@/components/profile/ApplicationStatus'
import EditProfile from '@/components/profile/EditProfile'



const Page = () => {
      const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <section className='container mx-auto my-28'>
        <h1 className='text-2xl font-semibold mb-5'>Profile Overview</h1>
        <Personalinfo showModal={showModal} />
        <ApplicationStatus/>
        <div>
            <EditProfile 
                open={open}
                handleOk={handleOk}
                handleCancel={handleCancel}
            />

        </div>
    </section>
  )
}

export default Page
