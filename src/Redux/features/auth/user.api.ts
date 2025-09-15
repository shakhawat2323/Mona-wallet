import { baseApi } from "@/Redux/baseApi";
// import type { IResponse, ISendOtp, IVerifyOtp } from "@/Types";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    myprofile: builder.mutation({
      query: (userInfo) => ({
        url: "/user/register",
        method: "POST",
        data: userInfo,
      }),
    }),

    getuser: builder.query({
      query: () => ({
        url: `/stats/overiew`,
        method: "GET",
      }),
      //   providesTags: ["USER"],
    }),
  }),
});

export const { useMyprofileMutation, useGetuserQuery } = userApi;
