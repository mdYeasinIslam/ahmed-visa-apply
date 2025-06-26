/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/api/baseApi";

interface ApplyResponse {
  success : boolean
  message : string
  data :[]
}

const visaApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    
   visaApply : builder.mutation<ApplyResponse,unknown>({
    query:(body)=>({
        url:'/visa-applications',
        method:"POST", 
        body,
    }),
    invalidatesTags: ["visa"],

   })
  }),
});

export const {
  useVisaApplyMutation
} = visaApi;
export const { endpoints: visaEndpoints } = visaApi;
