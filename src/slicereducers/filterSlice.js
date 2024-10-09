import { createSlice } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

const filterDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: dayjs().startOf('month').valueOf(),
    endDate: dayjs().endOf('month').valueOf()
}


const filtersSlice = createSlice({
    name: 'filters',
    initialState: filterDefaultState,
    reducers: {
        getFilters: (state, action) => {
            return state
        },
        setTextFilter: (state, action) => {
            return {
                ...state,
                text: action.payload === undefined ? '' : action.payload
            }

        },
        sortByAmount: (state) => {
            return {
                ...state,
                sortBy: 'amount'
            }
        },
        sortByDate: (state) => {
            return {
                ...state,
                sortBy: 'date'
            }
        },
        setStartDate: (state, action) => {
            return {
                ...state,
                startDate: action.payload
            }
        },
        setEndDate: (state, action) => {
            return {
                ...state,
                endDate: action.payload
            }
        }
    }
});

export default filtersSlice

