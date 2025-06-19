'use client';
import React, { FormEvent, useState } from "react";
// import { useAppDispatch } from "@/redux/hooks";
// import { useLoginUserMutation } from "@/redux/services/auth/authApi";
// import { setToken } from "@/redux/services/auth/authSlice";
import { toast } from "sonner";
import LoadingSpinner from "@/app/loading";
import SubmitButton from "@/components/Auth/SubmitButton";
// import LoadingSpinner from "@/app/loading";

const Page = () => {
    // Importing the useAppDispatch hook to dispatch actions
    // const dispatch = useAppDispatch()
    // Using the loginUser mutation from authApi
    // const [loginUser] = useLoginUserMutation()
    //  const router = useRouter();

    const [loading,setLoading] = useState(false)
    
    const handleSubmit = (e: FormEvent<HTMLFormElement | undefined>) => {
        setLoading(true)
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const otp = formData.get("otp");
        // console.log(email, password);
        
       try {
            if(!otp) {
               return toast.error("Email and password are required");
           }
            // Dispatching the loginUser mutation with email and password
            // loginUser({ email, password })
            //     .unwrap()
            //     .then((response) => {
            //         console.log("Login successful:", response);
            //         if (response?.success) { 
            //             localStorage.setItem("token", response?.data?.token);
            //             toast.success(response?.message);
            //             dispatch(setToken(response?.data?.token));
            //            setLoading(false)
            //             router.push('/');
            //         } 
            //     })
            //     .catch((error) => {
            //         setLoading(false)
            //         console.error("Login failed inside:", error);
            //         toast.error(error?.data?.message +'inside' || "Login failed inside");
            //     });
           
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
                  <h2 className="text-4xl font-bold text-gray-800  text-center">Email Verification</h2>
                </div>
                <form onSubmit={handleSubmit} className="border px-5  lg:px-10 py-16 shadow-xl rounded-md space-y-5">
                    {/* OTP Input */}
                    <div className="mb-4">
                        <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
                            OTP
                        </label>
                        <input
                            type="number"
                            id="otp"
                            name="otp"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter OTP"
                            />
                    </div>

                    {/* Submit Button */}
                   <SubmitButton name="Continue" />
                </form>
            </div>
        </div>

      </>
    );
};

export default Page;