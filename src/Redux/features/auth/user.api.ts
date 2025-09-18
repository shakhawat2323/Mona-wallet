import { baseApi } from "@/Redux/baseApi";
// import type { IResponse, ISendOtp, IVerifyOtp } from "@/Types";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addmoney: builder.mutation({
      query: (userInfo) => ({
        url: "/wallet/add-money",
        method: "POST",
        data: userInfo,
      }),
      invalidatesTags: ["TRANSACTION"], // ✅
    }),
    withdraw: builder.mutation({
      query: (userInfo) => ({
        url: "/wallet/withdraw",
        method: "POST",
        data: userInfo,
      }),
      invalidatesTags: ["TRANSACTION"], // ✅
    }),
    SendMoney: builder.mutation({
      query: (userInfo) => ({
        url: "/wallet/send-money",
        method: "POST",
        data: userInfo,
      }),
      invalidatesTags: ["TRANSACTION"],
    }),

    getuser: builder.query({
      query: () => ({
        url: `/stats/overiew`,
        method: "GET",
      }),
      providesTags: ["TRANSACTION"],
    }),
    getagent: builder.query({
      query: () => ({
        url: `/stats/agent-overview`,
        method: "GET",
      }),
      providesTags: ["TRANSACTION"],
    }),
    getTransactions: builder.query({
      query: () => ({
        url: "/wallet/overview",
        method: "GET",
      }),
      providesTags: ["TRANSACTION"],
    }),

    getProfile: builder.query({
      query: (id: string) => ({
        url: `/user/profile/${id}`,
        method: "GET",
      }),
      providesTags: ["TRANSACTION"],
    }),
    updateProfile: builder.mutation({
      query: ({ id, data }) => ({
        url: `/user/profile/${id}`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: ["TRANSACTION"],
    }),
    agentCashIn: builder.mutation({
      query: (cashInData) => ({
        url: "/agent/cash-in",
        method: "POST",
        data: cashInData,
      }),
      invalidatesTags: ["TRANSACTION"],
    }),
    agentCashOut: builder.mutation({
      query: (cashOutData) => ({
        url: "/agent/cash-out",
        method: "POST",
        data: cashOutData,
      }),
      invalidatesTags: ["TRANSACTION"],
    }),
  }),
});

export const {
  useGetProfileQuery,
  useUpdateProfileMutation,
  useAddmoneyMutation,
  useWithdrawMutation,
  useSendMoneyMutation,
  useGetTransactionsQuery,
  useGetuserQuery,
  useGetagentQuery,
  useAgentCashInMutation,
  useAgentCashOutMutation,
} = userApi;
