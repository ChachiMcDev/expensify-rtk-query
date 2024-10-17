import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const getAllExpensesApi = createApi({
    reducerPath: 'getAllExpenses',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:3000/' }),
    refetchOnFocus: true,
    refetchOnReconnect: true,
    endpoints: (builder) => ({
        getAllExpenses: builder.query({
            query: (expurl) => `api/${expurl}`,
            providesTags: ['expenses']
        }),
        addExpense: builder.mutation({
            query: (expense) => ({
                url: `api/addexpense`,
                method: 'POST',
                body: expense
            }),
            invalidatesTags: ['expenses']
        }),
        editExpense: builder.mutation({
            query: (updates) => ({
                url: `api/editexpense`,
                method: 'PATCH',
                body: updates
            }),
            invalidatesTags: ['expenses']
        }),
        getExpenseById: builder.query({
            query: (id) => `api/getexpense/${id}`
        }),
        removeExpenseById: builder.mutation({
            query: (id) => ({
                url: `api/deleteexpense/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['expenses']
        }),
    })
});

export const {
    useGetAllExpensesQuery,
    useAddExpenseMutation,
    useEditExpenseMutation,
    useGetExpenseByIdQuery,
    useRemoveExpenseByIdMutation } = getAllExpensesApi;