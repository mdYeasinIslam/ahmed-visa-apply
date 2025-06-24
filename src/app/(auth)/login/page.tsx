'use client';
import React, { FormEvent, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";
import LoadingSpinner from "@/app/loading";
import Link from "next/link";
import SubmitButton from "@/components/Auth/SubmitButton";
import { useLoginUserMutation } from "@/redux/service/auth/authApi";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks/hooks";
import { setUser } from "@/redux/features/auth";

const Page = () => {
    const dispatch = useAppDispatch()
    const [loginUser] = useLoginUserMutation()
     const router = useRouter();
    // State to manage password visibility
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    }
    const [loading,setLoading] = useState(false)
    
    const handleSubmit = (e: FormEvent<HTMLFormElement | undefined>) => {
        setLoading(true)
        e.preventDefault();
        const email = e.currentTarget?.email.value as string
        const password=e.currentTarget?.password.value as string
       try {
            if(!email || !password) {
               return toast.error("Email and password are required");
           }
            // Dispatching the loginUser mutation with email and password
            loginUser({ email, password })
                .unwrap()
                .then((response) => {
                    console.log("Login successful:", response);
                    if (response?.success) { 
                        dispatch(setUser({
                          user : response?.data?.user,
                          accessToken:response?.data?.accessToken,
                          refreshToken:response?.data?.refreshToken
                        }))
                        //store refresh token in cookies
                        document.cookie = `refreshToken=${response.data.refreshToken}; path=/; secure; HttpOnly; SameSite=Strict`;
                        document.cookie = `accessToken=${response.data.accessToken}; path=/; secure; SameSite=Strict`;
                        
                        toast.success(response?.message);
                        
                        // dispatch(setToken(response?.data?.token));
                        setLoading(false)
                        router.push('/');
                    } 
                })
                .catch((error) => {
                    setLoading(false)
                    console.error("Login failed inside:", error);
                    toast.error(error?.data?.message +'inside' || "Login failed inside");
                });
           
       } catch (error) {
        setLoading(false)
        console.error("Login failed outside:", error);
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
                  <h2 className="text-4xl font-bold text-gray-800  text-center">Log In</h2>
                </div>
                <form onSubmit={handleSubmit} className="border px-5  lg:px-10 py-16 shadow-xl rounded-md space-y-5">
                  <p className=" text-gray-600 text-start font-semibold text-xl lg:text-2xl">
                            Sign in to your accountgin
                        </p>
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
                    <div className="mb-6 relative ">
                        <label htmlFor="password" className=" flex justify-between items-center text-sm font-medium text-gray-700 ">
                            <span>Password</span>
                            <Link href={'forget-pass'} className="hover:underline cursor-pointer">Forgot Password </Link>
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
                    <SubmitButton name="Log In" />
                </form>
                  <div>
                        <h2 className="text-sm  text-gray-800  text-center">Don&quot;t have an account?
                          <Link href={'signUp'} className="underline hover:text-blue-700">Register</Link>
                        </h2>
                        
                    </div>
            </div>
        </div>

      </>
    );
};

export default Page;