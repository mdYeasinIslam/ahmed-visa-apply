import AboutUs from '@/components/about/AboutUs'
import ContactSection from '@/components/contactPage/ContactSection'
import ApplicationNow from '@/components/LandingPage/ApplicationNow'
import ChooseUsSection from '@/components/LandingPage/ChooseUsSection'
import React from 'react'
const Page = () => {

  return (
    <section className='my-10 md:my-16 lg:my-28'>
        <div className='space-y-10'>
           <AboutUs/>
           <ApplicationNow/>
           <ChooseUsSection/>
           <ContactSection/>
        </div>
    </section>
  )
}

export default Page
