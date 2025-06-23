import Image from 'next/image'
import React from 'react'
import img from '../../../public/profile/profile.png'
import { Button } from 'antd'

const Personalinfo = () => {
  return (
    <div className=' grid grid-cols-3 shadow-xl p-6'>
            
            <aside className='col-span-2 space-y-5'>

                <figure>
                    <Image
                        src={img}
                        alt='profile image'
                        width={500}
                        height={500}
                        className='w-24 h-24 rounded-full'
                    />
                </figure>
                {/* personal Information */}
                <div className='space-y-3'>
                    <h1 className='grid grid-cols-5 '>
                        <span className='text-[#7E8490]'> Name  </span> <span>: {'John Doe'}</span>
                    </h1>
                    <h3 className='grid grid-cols-5 '>
                        <span className='text-[#7E8490]'> Email  </span> <span>: {'John@gmail.com'}</span>
                    </h3>
                    <h3 className='grid grid-cols-5 '>
                        <span className='text-[#7E8490]'> Phone  </span> <span>: {'0987677'}</span>
                    </h3>
                    <h3 className='grid grid-cols-5 '>
                        <span className='text-[#7E8490]'> Passport  </span> <span>: {'3434564565'}</span>
                    </h3>
                    <h3 className='grid grid-cols-5 '>
                        <span className='text-[#7E8490]'> Nationality  </span> <span>: {'Bangladesh'}</span>
                    </h3>
                </div>
            </aside>
            <aside className='w-full flex justify-end'>
                <Button size='large' className='font-semibold hover:text-[#1F2C5B]'>Edit Profile</Button>
            </aside>

        </div>
  )
}

export default Personalinfo
