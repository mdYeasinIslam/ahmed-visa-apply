'use client'
import LoadingSpinner from '@/app/loading'
import SubmitButton from '@/components/Auth/SubmitButton'
import { useChangePasswordMutation } from '@/redux/service/auth/authApi'
import { Eye, EyeOff } from 'lucide-react'
import React, { FormEvent, useState } from 'react'
import { toast } from 'sonner'

const PasswordReset = () => {
  const [changePassword] = useChangePasswordMutation()
  const [currentPass, setCurrentPass] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordOne, setShowPasswordOne] = useState(false);
  const togglePasswordVisibility = (name: string) => {
    if(name === 'current') {
      setCurrentPass((prev) => !prev);
    } 
    if (name === 'pass') {
      setShowPasswordOne((prev) => !prev);
    }
    else if (name === 'confirm') {
      setShowPassword((prev) => !prev);
    }
  }
  const [loading, setLoading] = useState(false)
  const handleSubmit = (e: FormEvent<HTMLFormElement | undefined>) => {
    setLoading(true)
    e.preventDefault();
    // const token = param.toString().split('=')[2]
    const formData = new FormData(e.currentTarget);
    // const email =param.toString().split('=')[1].split('&')[0].replace('%40','@')
    const currentPassword = formData.get("current-password");
    const newPass = formData.get("new-password");
    const confirmPass = formData.get("confirm-password");
    console.log(currentPassword,confirmPass);
    try {
      
      if (!currentPassword || !confirmPass || !newPass) {
        setLoading(false)
        return toast.error("Current password, new password and confirm password are required");
      }
      if (newPass !== confirmPass) {
        setLoading(false)
        return toast.error("new password and confirm password didn't match. Please enter same password both field")
      }
      // Dispatching the loginUser mutation with email and password
      changePassword( {oldPassword:currentPassword,newPassword:confirmPass })
        .unwrap()
        .then((response) => {
          console.log("Password-change successful:", response);
          if (response?.success) {
            toast.success(response?.message);
            // router.push('/login');
            setLoading(false)
          }
          
          else {
            toast.error(response?.message);
            // router.push('/login');
            setLoading(false)
          }

        })
        .catch((error) => {
          setLoading(false)
          console.error("Password-reset failed inside:", error);
          toast.error(error?.data?.message || "Password-reset failed");
        });

    } catch (error) {
      setLoading(false)
      console.error("Password-reset failed :", error);
    }
  };
  return (
    <div className=' spacey-5 my-20'>
      <h1 className='text-2xl font-semibold mb-5'>Password Management</h1>
      {
        loading && <div className="absolute right-[25%] 2xl:right-[33%]"><LoadingSpinner /></div>
      }
      <form onSubmit={handleSubmit} className="max-w-xl border px-5  lg:px-10 py-16 shadow-xl rounded-md space-y-5">
        {/* Current Password Input */}
        <div className="mb-6 relative">
          <label htmlFor="current-password" className="block text-sm font-medium text-gray-700">
            Current Password
          </label>
          <div onClick={() => togglePasswordVisibility('current')} className="absolute right-3 top-8 text-gray-500 cursor-pointer z-10">

            {
              currentPass ? (
                <EyeOff />
              ) : (
                <Eye />
              )
            }
          </div>
          <input
            type={currentPass ? "text" : "password"}
            id="current-password"
            name="current-password"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter current password"
          />
        </div>
        {/*New Password Input */}
        <div className="mb-6 relative">
          <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">
            New Password
          </label>
          <div onClick={() => togglePasswordVisibility('pass')} className="absolute right-3 top-8 text-gray-500 cursor-pointer z-10">

            {
              showPasswordOne ? (
                <EyeOff />
              ) : (
                <Eye />
              )
            }
          </div>
          <input
            type={showPasswordOne ? "text" : "password"}
            id="new-password"
            name="new-password"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter New password"
          />
        </div>
        {/* Confirm Password Input */}
        <div className="mb-6 relative">
          <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
            Confirm Password
          </label>
          <div onClick={() => togglePasswordVisibility('confirm')} className="absolute right-3 top-8 text-gray-500 cursor-pointer z-10">
            {
              showPassword ? (
                <EyeOff />
              ) : (
                <Eye />
              )
            }
          </div>
          <input
            type={showPassword ? "text" : "password"}
            id="confirm-password"
            name="confirm-password"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Confirm password"
          />
        </div>

        {/* Submit Button */}
        <SubmitButton name="Continue" />
      </form>
    </div>
  )
}

export default PasswordReset
