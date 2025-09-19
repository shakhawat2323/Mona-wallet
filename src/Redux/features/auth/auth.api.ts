/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/Redux/baseApi";
import type { IResponse, ISendOtp, IVerifyOtp } from "@/Types";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (userInfo) => ({
        url: "/user/register",
        method: "POST",
        data: userInfo,
      }),
    }),
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        data: userInfo,
      }),
    }),
    sendOtp: builder.mutation<IResponse<null>, ISendOtp>({
      query: (userInfo) => ({
        url: "/otp/send",
        method: "POST",
        data: userInfo,
      }),
    }),
    verifyOtp: builder.mutation<IResponse<null>, IVerifyOtp>({
      query: (userInfo) => ({
        url: "/otp/verify",
        method: "POST",
        data: userInfo,
      }),
    }),
    userInfo: builder.query({
      query: () => ({
        url: "/user/me",
        method: "GET",
      }),
      providesTags: ["USER"],
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
      invalidatesTags: ["USER"],
    }),
    setPassword: builder.mutation({
      query: (password) => ({
        url: "/auth/setpassword",
        method: "POST",
        data: password,
      }),
      invalidatesTags: ["USER"],
    }),
    changePassword: builder.mutation<
      any,
      { oldPassword: string; newPassword: string }
    >({
      query: (data) => ({
        url: "/auth/reset-password",
        method: "POST",
        data: data,
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useSendOtpMutation,
  useVerifyOtpMutation,
  useUserInfoQuery,
  useLogoutMutation,
  useSetPasswordMutation,
  useChangePasswordMutation,
} = authApi;
