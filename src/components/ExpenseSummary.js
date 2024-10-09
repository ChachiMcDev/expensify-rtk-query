import React from "react";
import { useSelector } from 'react-redux';
import getVisibleExpenses from '../selectors/expenses';
import getTotalForExpenses from '../selectors/expenses-total';
import numeral from 'numeral';

export default () => {
    const exps = useSelector(state => state.expenses);
    const filts = useSelector(state => state.filters);
    const expenses = getVisibleExpenses(exps, filts);
    console.log('trying to figure out state', expenses);
    const expensesWord = expenses.length === 1 ? 'expense' : 'expenses';
    const expensestotal = numeral(getTotalForExpenses(expenses)).format('$0,0.00');
    return (
        <div>
            <h1>You are viewing {expenses.length} {expensesWord} totalling: {expensestotal}</h1>
        </div>
    )
};

