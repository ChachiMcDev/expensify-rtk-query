import React from "react";
import { useParams } from "react-router-dom";
import ExpenseForm from "./ExpenseForm";
import { useNavigate } from "react-router-dom";

import {
  useGetExpenseByIdQuery,
  useEditExpenseMutation,
  useRemoveExpenseByIdMutation,
} from "../api/getAllExpenses";

const EditExpensePage = () => {
  const sendToDashboard = useNavigate();
  const { id } = useParams();
  const { data, error, isLoading } = useGetExpenseByIdQuery(id);
  const [editExpense] = useEditExpenseMutation();
  const [removeExpenseById] = useRemoveExpenseByIdMutation(id);

  return (
    <div>
      <div className="page-header">
        <div className="content-container">
          <h1>Edit Expense</h1>
        </div>
      </div>
      <div className="content-container">
        {error ? (
          <div className="form__error ">Oh no, there was an error</div>
        ) : isLoading ? (
          <div className="form__error ">Loading...</div>
        ) : data ? (
          <>
            <ExpenseForm
              expense={data}
              onSubmit={(expense) => {
                editExpense(expense);
              }}
            />
            <button
              className="button button--secondary"
              onClick={() => {
                removeExpenseById(id);
                sendToDashboard("/dashboard");
              }}
            >
              Remove Expense
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default EditExpensePage;
