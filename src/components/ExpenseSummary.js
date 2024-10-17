import React from "react";
import getTotalForExpenses from '../selectors/expenses-total';
import numeral from 'numeral';


export default (props) => {

    const expenses = props.expenses;
    const expensesWord = expenses.length === 1 ? 'expense' : 'expenses';
    const expensestotal = numeral(getTotalForExpenses(expenses)).format('$0,0.00');
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">You are viewing {expenses.length} {expensesWord} totalling: {expensestotal}</h1>
            </div>

        </div>
    )
};

