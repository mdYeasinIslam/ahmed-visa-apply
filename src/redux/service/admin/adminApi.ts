/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/api/baseApi";
import { ApplicationType } from "@/types/application";

type AdminProfileData = {
    id: string;
    name: string;
    email: string;
    phone: string;
    passportNumber: string | null;
    nationality: string;
    imageUrl: string | null;
};

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
  
    getAdminData: builder.query<AdminProfileResponse, unknown>({
      query: () => '/users/profile-data',
      
      providesTags: ["admin"],
    }),
    updateAdminData: builder.mutation<UpdateResponse,unknown>({
      query: ({ id, body }) => ({
        url: `/visa-applications/update-application-status/${id}`,
        method: "PUT",
        body,
        }),
        invalidatesTags: ["visa"]
    }),
    

  }),
});

export const {
  useGetAdminDataQuery,
  useUpdateAdminDataMutation
} = adminApi;
export const { endpoints: visaEndpoints } = adminApi;
