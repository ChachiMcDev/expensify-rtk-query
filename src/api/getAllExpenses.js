import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const getAllExpensesApi = createApi({
    reducerPath: 'getAllExpenses',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:3000/' }),
    endpoints: (builder) => ({
        getAllExpenses: builder.query({
            query: (expurl) => `api/${expurl}`
        })
    })
});

export const { useGetAllExpensesQuery } = getAllExpensesApi;