import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { fetchExpenses, postExpense, removeExpenseWithId, editExpenseWithId } from '../api/fetchFromApi';


const expensesDefaultState = [];

const expensesSlice = createSlice({
    name: 'expenses',
    initialState: expensesDefaultState,
    reducers: {
        setExpenses: (state, action) => {
            return [...state, {
                ...action.payload
            }]
        },
        addExpense: (state, action) => {
            return [...state, {
                id: uuidv4(),
                ...action.payload
            }]
        },
        removeExpense: (state, action) => {
            return state.filter(({ _id }) => _id !== action.payload.id);
        },
        editExpense: (state, action) => {
            return state.map((expense) => {
                if (expense._id === action.payload._id) {
                    return {
                        ...expense,
                        ...action.payload
                    }
                } else {
                    return expense
                }
            })
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchExpenses.fulfilled, (state, action) => {
            action.payload.forEach((expense) => {
                state.push(expense)
            })
            return state;
            // state.push(action.payload)
        });
        builder.addCase(postExpense.fulfilled, (state, action) => {
            state.push(action.payload)
            //return [...state, { ...action.payload }];

        });
        builder.addCase(removeExpenseWithId.fulfilled, (state, action) => {

            return state.filter(({ _id }) => _id !== action.payload);
        });
        builder.addCase(editExpenseWithId.fulfilled, (state, action) => {
            return state.map((expense) => {
                if (expense._id === action.payload._id) {
                    return {
                        ...expense,
                        ...action.payload
                    }
                } else {
                    return expense
                }
            })
        });
    },


});

export { expensesSlice as default, fetchExpenses, postExpense, removeExpenseWithId, editExpenseWithId };