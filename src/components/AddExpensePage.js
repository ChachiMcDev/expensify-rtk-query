import React from "react";
import ExpenseForm from './ExpenseForm';
import { useDispatch } from 'react-redux';
import expensesSlice from "../slicereducers/expensesSlice";
import { postExpense } from "../slicereducers/expensesSlice";
const { addExpense } = expensesSlice.actions
import { useNavigate } from "react-router-dom";

const AddExpensePage = () => {
    const dispatch = useDispatch();
    const navtoHome = useNavigate();
    return (
        <div>
            This is from the add expense component
            <ExpenseForm onSubmit={(expense) => {
                //dispatch(addExpense(expense));
                dispatch(postExpense(expense));
                navtoHome('/');
            }} />
        </div>
    )
};


export default AddExpensePage
//export default connect()(AddExpensePage);