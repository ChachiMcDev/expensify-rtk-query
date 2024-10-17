import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import authSlice from '../slicereducers/authSlice';


//        <ExpenseSummary /> found in ExpenseList component
const ExpenseDashboardPage = () => {


    return (<div>

        <ExpenseListFilters />
        <ExpenseList />

    </div>)
};

export default ExpenseDashboardPage 