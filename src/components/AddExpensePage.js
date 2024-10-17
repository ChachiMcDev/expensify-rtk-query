import React from "react";
import ExpenseForm from './ExpenseForm';
import { useNavigate } from "react-router-dom";
import { useAddExpenseMutation } from "../api/getAllExpenses";


const AddExpensePage = () => {

    const navtoHome = useNavigate();
    const [addExpense] = useAddExpenseMutation();
    return (
        <div>
            This is from the add expense component
            <ExpenseForm onSubmit={(expense) => {
                addExpense(expense);
                navtoHome('/');
            }} />
        </div>
    )
};


export default AddExpensePage
//export default connect()(AddExpensePage);