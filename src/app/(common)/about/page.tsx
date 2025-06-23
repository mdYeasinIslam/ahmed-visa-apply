import Image from 'next/image'
import React from 'react'
import img from '../../../../public/about/about1.png'
const Page = () => {

  return (
    <section className='my-10 md:my-16 lg:my-28'>
        <div className='container mx-auto space-y-20'>
            <div className=' flex flex-col-reverse md:grid md:grid-cols-3 '>
                <div className="text-black col-span-2 space-y-6 w-[80%]">
                    <h1 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold'>Our Mission</h1>
                    <p className='text-[#9B9A9A]'>We are committed to making the visa application process easy, transparent, and stress-free. Whether you&qout;re planning a vacation, studying abroad, or traveling for business — VisaPortal helps you get the right visa, without the confusion.</p>
                </div>
                <figure className="">
                    <Image
                        src={img}
                        alt='about image'
                        width={500}
                        height={500}
                        className='w-[450px] h-full'
                    />
                </figure>
            </div>
            <div className=' grid grid-cols-1  md:grid-cols-3 '>
                
                <figure className="">
                    <Image
                        src={img}
                        alt='about image'
                        width={500}
                        height={500}
                        className='w-[450px] h-full'
                    />
                </figure>
                <div className="text-black md:col-span-2 space-y-6  md:pl-16  xl:pl-20">
                    <h1 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold'>Our Mission</h1>
                    <p className='text-[#9B9A9A] overflow-y-scroll'>We are committed to making the visa application process easy, transparent, and stress-free. Whether you&qout;re planning a vacation, studying abroad, or traveling for business — VisaPortal helps you get the right visa, without the confusion.</p>
                </div>  
            </div>
        </div>
    </section>
  )
}

export default Page
