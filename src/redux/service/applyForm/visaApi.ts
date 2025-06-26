/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/api/baseApi";
import { ApplicationType } from "@/types/application";

interface ApplyResponse {
  success: boolean
  message: string
  data: []
}
type ApplicationResponse = {
  success: boolean,
  message: string,
  data: ApplicationType[]
  meta?: { page: number, limit: number, total: number, totalPage: number };
}
const visaApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // getVisaApplications: builder.query<ApplicationResponse, { limit: number }>({
    //   query: ({ limit }) => ({
    //     url: `/visa-applications`,
    //     params: { limit: String(limit) }
    //   }),
    // }),
    getVisaApplications: builder.query<ApplicationResponse, { page: number; limit: number, searchTerm: string, status: string }>({
      query: ({ page, limit, searchTerm, status }) => {
        const params: Record<string, string> = {
          page: String(page),
          limit: String(limit),
          searchTerm,
        };

        // Conditionally include status if it's not an empty string or array
        if (status && status.length > 0) {
          params.status = status;
        }

        return {
          url: `/visa-applications`,
          params,
        };
      },
      providesTags: ["visa"],
    }),
    visaApply: builder.mutation<ApplyResponse, unknown>({
      query: (body) => ({
        url: '/visa-applications',
        method: "POST",
        body,
      }),
      invalidatesTags: ["visa"],

    })
  }),
});

export const {
  useGetVisaApplicationsQuery,
  useVisaApplyMutation
} = visaApi;
export const { endpoints: visaEndpoints } = visaApi;
