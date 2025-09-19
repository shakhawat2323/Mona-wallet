/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/Redux/baseApi";

const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserStats: builder.query({
      query: () => ({
        url: "/stats/user",
        method: "GET",
      }),
      providesTags: ["UserStats"],
    }),
    getUserUser: builder.query({
      query: () => ({
        url: "/admin/users",
        method: "GET",
      }),
      providesTags: ["UserStats"],
    }),

    blockWallet: builder.mutation({
      query: (id: string) => ({
        url: `/admin/block/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["UserStats"],
    }),

    unblockWallet: builder.mutation({
      query: (id: string) => ({
        url: `/admin/unblock/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["UserStats"],
    }),
    usertoagent: builder.mutation<any, { id: string; role: string }>({
      query: ({ id, role }) => ({
        url: `/user/${id}`,
        method: "PATCH",
        data: { role },
      }),
      invalidatesTags: ["UserStats"],
    }),
    blockAgent: builder.mutation({
      query: (id: string) => ({
        url: `/admin/agents/suspend/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["UserStats"],
    }),
    unblockAgent: builder.mutation({
      query: (id: string) => ({
        url: `/admin/agents/approve/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["UserStats"],
    }),
    getAgents: builder.query({
      query: () => ({
        url: "/admin/agents",
        method: "GET",
      }),
      providesTags: ["UserStats"],
    }),
    getTransactions: builder.query({
      query: () => ({
        url: "/admin/transactions",
        method: "GET",
      }),
      providesTags: ["UserStats"],
    }),
  }),
});

export const {
  useGetUserStatsQuery,
  useBlockWalletMutation,
  useUnblockWalletMutation,
  useGetUserUserQuery,
  useBlockAgentMutation,
  useUnblockAgentMutation,
  useGetAgentsQuery,
  useGetTransactionsQuery,
  useUsertoagentMutation,
} = adminApi;
