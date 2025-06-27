/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/api/baseApi";

interface LoginRequest {
  email: string;
  password: string;
}

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (user) => ({
        url: "/auth/register",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["auth"],
    }),
    loginUser: builder.mutation<any, LoginRequest>({
      query: (user) => ({
        url: "/auth/login",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["auth"],
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout", 
        method: "POST",
      }),
      invalidatesTags: ["auth"],
    }),
    forgatPassword: builder.mutation<any, { email: string }>({
      query: (user) => ({
        url: "/auth/forgot-password",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["auth"],
    }),
    resetPassword: builder.mutation({
      query: ({ token, user }) => ({
        url: `/auth/reset-password/${token}`,
        method: "POST",
        body: user,
        headers: {
          Authorization: `${token}`,
        },
      }),
      invalidatesTags: ["auth"],
    }),
    changePassword: builder.mutation({
      query: (password) => ({
        url: "/auth/change-password",
        method: "POST",
        body: password,
      }),
      invalidatesTags: ["auth"],
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogoutMutation,
  useChangePasswordMutation,
  useForgatPasswordMutation,
  useResetPasswordMutation,
} = authApi;
export const { endpoints: authEndpoints } = authApi;
