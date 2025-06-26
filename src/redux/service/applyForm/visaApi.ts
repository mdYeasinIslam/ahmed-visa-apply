/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/api/baseApi";


const visaApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // registerUser: builder.mutation({
    //   query: (user) => ({
    //     url: "/auth/register",
    //     method: "POST",
    //     body: user,
    //   }),
    //   invalidatesTags: ["auth"],
    // }),
    // loginUser: builder.mutation<any, LoginRequest>({
    //   query: (user) => ({
    //     url: "/auth/login",
    //     method: "POST",
    //     body: user,
    //   }),
    //   invalidatesTags: ["auth"],
    // }),

   visaApply : builder.mutation<unknown,unknown>({
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
