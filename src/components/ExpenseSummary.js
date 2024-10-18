import React from "react";
import getTotalForExpenses from '../selectors/expenses-total';
import numeral from 'numeral';
import { useGetAllExpensesQuery } from "../api/getAllExpenses";
import { useSelector } from "react-redux";
import getVisibleExpenses from '../selectors/expenses'

export default (props) => {
    const filts = useSelector(state => state.filters);
    const getuserId = useSelector(state => state.auth.userid);
    const { data, error, isLoading } = useGetAllExpensesQuery(`expenses/${getuserId}`);

    if(data){
        const expenses = getVisibleExpenses(data, filts);
        const expensesWord = expenses.length === 1 ? 'expense' : 'expenses';
        const expensestotal = numeral(getTotalForExpenses(expenses)).format('$0,0.00');
        return (
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">You are viewing {expenses.length} {expensesWord} totalling: {expensestotal}</h1>
                </div>
    
            </div>
        )
    }else {
        return (
            <div>Error..error...error</div>
        )
    }
    //const expenses = props.expenses;

};

