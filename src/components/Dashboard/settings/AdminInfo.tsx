"use client"
import LoadingSpinner from '@/app/loading'
import { useGetAdminDataQuery, useUpdateAdminDataMutation } from '@/redux/service/admin/adminApi'
import { AdminProfileData } from '@/types/AdminType'
import React, { useState } from 'react'
import { toast } from 'sonner'

const AdminInfo = () => {
  const { data, error, isLoading } = useGetAdminDataQuery()
  const [updateAdminData] = useUpdateAdminDataMutation()
  const [adminData, setAdminData] = useState<AdminProfileData>();
  React.useEffect(() => {
    if (data?.data) {

      setAdminData(data.data);
    }
  }, [data?.data]);

  const updateAdminProfile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget as HTMLFormElement;
    const name = (form.elements.namedItem('name') as HTMLInputElement)?.value;
    const phone = (form.elements.namedItem('phone') as HTMLInputElement)?.value;
    const data = { name, phone }
    const res = await updateAdminData({ body: data })
    console.log(res)
    if (res.data?.success) {
      toast.success("Admin profile updated successfully")
    }
  }

  // console.log(adminData)
  if (isLoading) {
    return <div><LoadingSpinner /></div>
  }
  if (error) {
    return <div className="text-center py-10 text-red-500">Error loading Application data</div>
  }
  return (
    <div className=' spacey-5 my-20'>
      <h1 className='text-2xl font-semibold mb-5'>Admin Account Information</h1>
      <form className=' grid grid-cols-4  gap-5 items-center px-5' onSubmit={updateAdminProfile}>
        {/* Passport Number */}
        <div className='col-span-2'>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 ">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={adminData?.name}
            // onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
            required
          />
        </div>
        <div className='col-span-2'>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 ">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={adminData?.email}
            // onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 bg-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
            required
            readOnly
          />
        </div>
        <div className='col-span-2'>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2 ">
            Phone Number
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            defaultValue={adminData?.phone}
            // onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
            required
          />
        </div>
        <div>

        </div>
        {/* submit button */}
        <div className="pt-4 text-right">
          <button
            type="submit"
            className=" bg-[#1F2C5B] text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-800 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  )
}

export default AdminInfo
