'use client';
import React, { FormEvent,  useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";
import LoadingSpinner from "@/app/loading";
import SubmitButton from "@/components/Auth/SubmitButton";
import { useResetPasswordMutation } from "@/redux/service/auth/authApi";
import { useRouter, useSearchParams } from "next/navigation";

const Page = () => {
  const [resetPassword] = useResetPasswordMutation()
const router = useRouter()
const param = useSearchParams()
console.log(param.toString().split('=')[1].split('&')[0].replace('%40','@'))

    // State to manage password visibility
    const [showPasswordOne, setShowPasswordOne] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = (name:string) => {
        if(name==='pass'){
            setShowPasswordOne((prev) => !prev);
        }
        else if(name ==='confirm'){
            setShowPassword((prev) => !prev);
        }
    }
    const [loading,setLoading] = useState(false)
    
    const handleSubmit = (e: FormEvent<HTMLFormElement | undefined>) => {
        setLoading(true)
        e.preventDefault();
        const token = param.toString().split('=')[2]
        const formData = new FormData(e.currentTarget);
        const email =param.toString().split('=')[1].split('&')[0].replace('%40','@')
        const pass = formData.get("new-password");
        const newPassword = formData.get("confirm-password");
        console.log(email, newPassword,token);
       try {
            if(!pass || !newPassword) {
              setLoading(false)
               return toast.error("Email and password are required");
           }
           if(pass !== newPassword){
            setLoading(false)
            return toast.error("new password and confirm password didn't match. Please enter same password both field")
           }
            // Dispatching the loginUser mutation with email and password
            resetPassword({token,user:{email,newPassword}})
                .unwrap()
                .then((response) => {
                    console.log("Password-reset successful:", response);
                    if (response?.success) { 
                        toast.success(response?.message);
                        router.push('/login');
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
      <>
        {
          loading  && <div className="absolute right-[25%] 2xl:right-[33%]"><LoadingSpinner/></div>
        }
        {/* Right Side - Login Form */}
        <div className={`w-full md:flex items-center justify-center px-5 md:px-0  ${loading ? 'opacity-50':''}`}>
            <div className="xl:w-[500px] rounded-lg space-y-6">
                <div className="">
                  <h2 className="text-4xl font-bold text-gray-800  text-center">Set new password</h2>
                </div>
                <form onSubmit={handleSubmit} className="border px-5  lg:px-10 py-16 shadow-xl rounded-md space-y-5">
                    {/* Password Input */}
                    <div className="mb-6 relative">
                        <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">
                           New Password
                        </label>
                        <div onClick={()=>togglePasswordVisibility('pass')} className="absolute right-3 top-8 text-gray-500 cursor-pointer z-10">

                            {
                              showPasswordOne ? (
                                <EyeOff />
                              ) : (
                                <Eye  />
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
                        <div onClick={()=>togglePasswordVisibility('confirm')} className="absolute right-3 top-8 text-gray-500 cursor-pointer z-10">
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
                            id="confirm-password"
                            name="confirm-password"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Confirm password"
                            />
                    </div>

                    {/* Submit Button */}
                <SubmitButton name="Continue" />
                </form>
                  {/* <div>
                        <h2 className="text-sm  text-gray-800  text-center">Don’t have an account?
                          <Link href={'signup'} className="underline hover:text-blue-700">Register</Link>
                        </h2>
                        
                    </div> */}
            </div>
        </div>

      </>
    );
};

export default Page;