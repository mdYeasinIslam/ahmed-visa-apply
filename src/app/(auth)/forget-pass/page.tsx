'use client';
import React, { FormEvent, useState } from "react";
// import { useAppDispatch } from "@/redux/hooks";
// import { useLoginUserMutation } from "@/redux/services/auth/authApi";
// import { setToken } from "@/redux/services/auth/authSlice";
import { toast } from "sonner";
import LoadingSpinner from "@/app/loading";
import SubmitButton from "@/components/Auth/SubmitButton";
import { useForgatPasswordMutation } from "@/redux/service/auth/authApi";
// import LoadingSpinner from "@/app/loading";

const Page = () => {
    // Importing the useAppDispatch hook to dispatch actions
    // const dispatch = useAppDispatch()
    const [forgatPassword]  = useForgatPasswordMutation()
    //  const router = useRouter();
    const [loading,setLoading] = useState(false)
    
    const handleSubmit = (e: FormEvent<HTMLFormElement | undefined>) => {
        setLoading(true)
        e.preventDefault();
        const email = e.currentTarget?.email.value as string
       try {
            if(!email ) {
               return toast.error("Email and password are required");
           }
            // Dispatching the loginUser mutation with email and password
            forgatPassword({email})
                .unwrap()
                .then((response) => {
                    console.log("reset password link send to the email successfully:", response);
                    if (response?.success) { 
                        toast.success(response?.message + 'Please check your email');
                         setLoading(false)
                        // router.push('/');
                    } 
                })
                .catch((error) => {
                    setLoading(false)
                    console.error("forgot-pass failed :", error);
                    toast.error(error?.data?.message || "forgot-pass failed ");
                });
           
       } catch (error) {
        setLoading(false)
        console.error("forgot-pass failed :", error);
       }
    };

    return (
      <>
        {
          loading  && <div className="absolute right-[25%] 2xl:right-[33%]"><LoadingSpinner/></div>
        }
        {/* Right Side - Login Form */}
        <div className={`w-full md:flex items-center justify-center px-5 md:px-0  ${loading ? 'opacity-50':''}`}>
            <div className="xl:w-[500px] rounded-lg space-y-6">
                <div className="">
                  <h2 className="text-4xl font-bold text-gray-800  text-center">Forgot Password</h2>
                </div>
                <form onSubmit={handleSubmit} className="border px-5  lg:px-10 py-16 shadow-xl rounded-md space-y-5">
                    {/* Email Input */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your email"
                            />
                    </div>

                  
                    {/* Submit Button */}
                   <SubmitButton name=" Reset Your Password"   />
                </form>
            </div>
        </div>

      </>
    );
};

export default Page;