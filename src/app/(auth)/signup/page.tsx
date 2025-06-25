'use client';
import React, { FormEvent, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
// import { useAppDispatch } from "@/redux/hooks";
// import { useLoginUserMutation } from "@/redux/services/auth/authApi";
// import { setToken } from "@/redux/services/auth/authSlice";
import { toast } from "sonner";
import LoadingSpinner from "@/app/loading";
import Link from "next/link";
import SubmitButton from "@/components/Auth/SubmitButton";
import { useRegisterUserMutation } from "@/redux/service/auth/authApi";
import { useRouter } from "next/navigation";

const Page = () => {
    const [registerUser] = useRegisterUserMutation()
     const router = useRouter();
    // State to manage password visibility 
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    }
    const [loading,setLoading] = useState(false)
    
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        setLoading(true)
        e.preventDefault();
         const form = e.currentTarget;
         const name = (form.elements.namedItem('name') as HTMLInputElement)?.value as string;
         const email = (form.elements.namedItem('email') as HTMLInputElement)?.value as string;
         const password = (form.elements.namedItem('password') as HTMLInputElement)?.value as string;
        // Use raw data instead of FormData
        const userData = { name, email, password };        
       try {
            if(!email || !password) {
               return toast.error("Email and password are required");
           }
            // Dispatching the Register mutation with email and password
            registerUser(userData)
                .unwrap()
                .then((response) => {
                    console.log("Register successful:", response);
                    if (response?.success) { 
                        toast.success(response?.message);
                       setLoading(false)
                        router.push('/login');
                    } 
                })
                .catch((error) => {
                    setLoading(false)
                    console.error("Register failed :", error);
                    toast.error(error?.data?.message || "Register failed ");
                });
           
       } catch (error) {
        setLoading(false)
        console.error("Register failed :", error);
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
                  <h2 className="text-4xl font-bold text-gray-800  text-center">Register</h2>
                </div>
                <form onSubmit={handleSubmit} className="border px-5  lg:px-10 py-16 shadow-xl rounded-md space-y-5">
                  <p className=" text-gray-600 text-start font-semibold text-xl lg:text-2xl">
                            Sign Up to your accountgin
                        </p>
                    {/* Name Input */}
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your name"
                            required
                            />
                    </div>
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
                            required
                            />
                    </div>

                    {/* Password Input */}
                    <div className="mb-6 relative">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <div onClick={togglePasswordVisibility} className="absolute right-3 top-8 text-gray-500 cursor-pointer z-10">

                            {
                              showPassword ? (
                                <EyeOff />
                              ) : (
                                <Eye  />
                              )
                            }
                        </div>
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            name="password"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your password"
                            required
                            />
                    </div>

                    {/* Submit Button */}
                    <SubmitButton name="Register" />
                </form>
                  <div>
                        <h2 className="text-sm  text-gray-800  text-center">Don’t have an account?
                          <Link href={'login'} className="underline hover:text-blue-700">Log in</Link>
                        </h2>
                        
                    </div>
            </div>
        </div>

      </>
    );
};

export default Page;