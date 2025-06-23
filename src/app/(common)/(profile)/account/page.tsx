
import React from 'react'
import Personalinfo from '@/components/profile/Personalinfo'
import ApplicationStatus from '@/components/profile/ApplicationStatus'
const Page = () => {
  return (
    <section className='container mx-auto my-28'>
        <h1 className='text-2xl font-semibold mb-5'>Profile Overview</h1>
        <Personalinfo/>
        <ApplicationStatus/>
    </section>
  )
}

export default Page
