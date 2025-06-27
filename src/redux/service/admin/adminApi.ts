/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/api/baseApi";
import { AdminProfileData } from "@/types/AdminType";



type AdminProfileResponse = {
    success: boolean;
    message: string;
    data: AdminProfileData;
};



type UpdateResponse = {
  success: boolean,
  message: string,
  data: AdminProfileData
 
}
const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
  
    getAdminData: builder.query<AdminProfileResponse, void>({
      query: () => '/users/profile-data',
      providesTags: ["admin"],
    }),
    updateAdminData: builder.mutation<UpdateResponse,unknown>({
      query: ({ body }) => ({
        url: `/users/update-profile`,
        method: "PUT",
        body,
        }),
        invalidatesTags: ["admin"]
    }),
    

  }),
});

export const {
  useGetAdminDataQuery,
  useUpdateAdminDataMutation
} = adminApi;
export const { endpoints: visaEndpoints } = adminApi;
