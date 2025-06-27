"use client"

import type React from "react"

import {  useEffect } from "react"
import { X } from "lucide-react"

import topImg from '../../../public/profile/topleft.png'
import bottomImg from '../../../public/profile/righBottom.png'
import Image from "next/image"
import { AdminProfileData } from "@/types/AdminType"
import { useUpdateAdminDataMutation } from "@/redux/service/admin/adminApi"
import { toast } from "sonner"

interface EditProfileModalProps {
  open: boolean
  handleOk: () => void
  handleCancel: () => void
  adminData: AdminProfileData | undefined
}

export default function EditProfileModal({ open, handleOk, handleCancel, adminData }: EditProfileModalProps) {
    const [updateAdminData] = useUpdateAdminDataMutation()


  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleCancel()
    }
  }
 const updateAdminProfile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget as HTMLFormElement;
    const name = (form.elements.namedItem('name') as HTMLInputElement)?.value;
    const phone = (form.elements.namedItem('phoneNumber') as HTMLInputElement)?.value;
    const passportNumber = (form.elements.namedItem('passportNumber') as HTMLInputElement)?.value;
    const nationality = (form.elements.namedItem('nationality') as HTMLInputElement)?.value;
    const data = {
      name,
      phone,
      passportNumber,
      nationality
    }
    const res = await updateAdminData({ body: data })
    console.log(res)
    if (res.data?.success) {
      toast.success("User profile updated successfully")
      handleOk()
    }
  }
  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleCancel()
      }
    }

    if (open) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [open, handleCancel])

  if (!open) return null

  return (
    <div
      className="fixed  inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full md:w-[90%] md:h-[80%] lg:w-[70%] lg:h-[80%] xl:w-[50%] xl:h-[80%] 2xl:w-[30%] 2xl:h-[70%] md:bg-white">
         <Image
                src={topImg}
                alt='bg image'
                width={500}
                height={500}
                className='absolute hidden md:flex  w-40 h-40 md:w-56 md:h-56'
            />
         <Image
                src={bottomImg}
                alt='bg image'
                width={500}
                height={500}
                className='absolute hidden md:flex bottom-0 right-0 w-40 h-40 md:w-52 md:h-52'
            />
        {/* Close Button LARGE device*/}
        <button
          onClick={handleCancel}
          className="absolute hidden md:flex top-4 right-4 w-8 h-8 bg-red-500 text-white rounded-full  items-center justify-center hover:bg-red-600 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      <div className="top-[10%] bg-white rounded-2xl shadow-xl w-full max-w-md mx-auto relative  border-2">
          {/* Close Button small device*/}
        <button
          onClick={handleCancel}
          className="absolute  flex md:hidden top-4 right-4 w-8 h-8 bg-red-500 text-white rounded-full  items-center justify-center hover:bg-red-600 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
        {/* Modal Content */}
        <div className="p-4 w-full h-full">
          <h2 className="text-2xl font-bold text-gray-900 text-center ">Edit Profile</h2>

          <form onSubmit={updateAdminProfile} className="space-y-2"  >
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 ">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                defaultValue={adminData?.name}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                required
              />
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 ">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={adminData?.email}
                readOnly
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                required
              />
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 ">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                defaultValue={adminData?.phone || 'N/A'}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                required
              />
            </div>

            {/* Passport Number */}
            <div>
              <label htmlFor="passportNumber" className="block text-sm font-medium text-gray-700 ">
                Passport Number
              </label>
              <input
                type="text"
                id="passportNumber"
                name="passportNumber"
                defaultValue={adminData?.passportNumber || 'N/A'}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                required
              />
            </div>

            {/* Nationality */}
            <div>
              <label htmlFor="nationality" className="block text-sm font-medium text-gray-700 ">
                Nationality
              </label>
              <input
                type="text"
                id="nationality"
                name="nationality"
                defaultValue={adminData?.nationality || 'N/A'}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                required
              />
            </div>

            {/* Save Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-blue-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-800 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}
