'use client'
import Image from 'next/image'
import React, { useState } from 'react'
// import img from '../../../public/profile/profile.png'
import { Button } from 'antd'
import { useGetAdminDataQuery } from '@/redux/service/admin/adminApi'
import LoadingSpinner from '@/app/loading'
import { AdminProfileData } from '@/types/AdminType'
import EditProfile from '@/components/profile/EditProfile'
import { User } from 'lucide-react'

const Personalinfo = () => {
    const { data, error, isLoading } = useGetAdminDataQuery()

    const [adminData, setAdminData] = useState<AdminProfileData>();
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




    React.useEffect(() => {
        if (data?.data) {

            setAdminData(data.data);
        }
    }, [data?.data]);
    console.log(adminData)
    if (isLoading) {
        return <div><LoadingSpinner /></div>
    }
    if (error) {
        return <div className="text-center py-10 text-red-500">Error loading Application data</div>
    }
    return (
        <div className=' md:grid grid-cols-3 shadow-xl p-6'>

            <aside className='col-span-2 space-y-5'>

                <figure>
                    {
                        adminData?.imageUrl? (
                            <Image
                                src={adminData?.imageUrl}
                                alt='profile image'
                                width={500}
                                height={500}
                                className='w-24 h-24 rounded-full'
                            />
                        ) : (
                           <User className='w-24 h-24 rounded-full border-2' />
                        )
                    }
                </figure>
                {/* personal Information */}
                <div className='space-y-3'>
                    <h1 className=' md:grid grid-cols-2 lg:grid-cols-3 '>
                        <span className='text-[#7E8490]'> Name  </span> <span>: {adminData?.name}</span>
                    </h1>
                    <h3 className='md:grid grid-cols-2 lg:grid-cols-3  '>
                        <span className='text-[#7E8490]'> Email  </span> <span>: {adminData?.email}</span>
                    </h3>
                    <h3 className='md:grid grid-cols-2 lg:grid-cols-3  '>
                        <span className='text-[#7E8490]'> Phone  </span> <span>: {adminData?.phone ? adminData.phone : 'N/A'}</span>
                    </h3>
                    <h3 className='md:grid grid-cols-2 lg:grid-cols-3  '>
                        <span className='text-[#7E8490]'> Passport  </span> <span>: {adminData?.passportNumber ? adminData.passportNumber : 'N/A'}</span>
                    </h3>
                    <h3 className='md:grid grid-cols-2 lg:grid-cols-3  '>
                        <span className='text-[#7E8490]'> Nationality  </span> <span>: {adminData?.nationality ? adminData.nationality : 'N/A'}</span>
                    </h3>
                </div>
            </aside>
            <aside className='w-full flex justify-end'>
                <Button onClick={showModal} size='large' className='font-semibold hover:text-[#1F2C5B]'>Edit Profile</Button>
            </aside>
            <div>
                <EditProfile
                    adminData={adminData}
                    open={open}
                    handleOk={handleOk}
                    handleCancel={handleCancel}
                />

            </div>
        </div>
    )
}

export default Personalinfo
