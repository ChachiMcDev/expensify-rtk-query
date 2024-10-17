import React from "react";
import { useParams } from 'react-router-dom';
import ExpenseForm from "./ExpenseForm";
import { useNavigate } from "react-router-dom";

import {
    useGetExpenseByIdQuery,
    useEditExpenseMutation,
    useRemoveExpenseByIdMutation
} from "../api/getAllExpenses";

const EditExpensePage = () => {
    const sendToDashboard = useNavigate();
    const { id } = useParams();
    const { data, error, isLoading } = useGetExpenseByIdQuery(id);
    const [editExpense] = useEditExpenseMutation();
    const [removeExpenseById] = useRemoveExpenseByIdMutation(id);

    return (
        <div>
            {error ? (
                <>Oh no, there was an error</>
            ) : isLoading ? (
                <>Loading...</>
            ) : data ? (
                <>
                    <ExpenseForm expense={data} onSubmit={(expense) => {
                        editExpense(expense);
                    }} />
                    <button onClick={
                        () => {
                            removeExpenseById(id);
                            sendToDashboard('/dashboard');
                        }
                    }>Remove</button>
                </>
            ) : null}
        </div>
    )
};

export default EditExpensePage;
