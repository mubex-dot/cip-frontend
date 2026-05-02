import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_CIP_API,
});

export const authApiSlice = createApi({
  reducerPath: "authApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (values) => ({
        url: "/auth/login",
        method: "POST",
        body: { ...values },
      }),
    }),

    register: builder.mutation({
      query: (values) => ({
        url: "/auth/register",
        method: "POST",
        body: { ...values },
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApiSlice;
