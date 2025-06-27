/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/api/baseApi";

interface ContactResponse {
    success: boolean
    message: string
    data: {
        messageId: string;
    }
}
const contactApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        contactUs: builder.mutation<ContactResponse, unknown>({
            query: (body) => ({
                url: '/contact-us',
                method: "POST",
                body,
            }),
            invalidatesTags: ["contact"],

        })


    }),
});

export const {
    useContactUsMutation
} = contactApi;
export const { endpoints: contactEndpoints } = contactApi;
