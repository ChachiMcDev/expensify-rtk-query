import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const expenseUserApi = createApi({
    reducerPath: 'expenseUserApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:3000/' }),
    refetchOnFocus: true,
    refetchOnReconnect: true,
    endpoints: (builder) => ({
        addUser: builder.mutation({
            query: (user) => ({
                url: `api/register`,
                method: 'POST',
                body: user
            }),
            transformResponse: (response, meta, arg) => console.log(response),
        }),
    })
});

export const { useAddUserMutation } = expenseUserApi;