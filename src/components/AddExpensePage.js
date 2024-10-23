import React from "react";
import ExpenseForm from "./ExpenseForm";
import { useNavigate } from "react-router-dom";
import { useAddExpenseMutation } from "../api/getAllExpenses";

const AddExpensePage = () => {
  const navtoHome = useNavigate();
  const [addExpense] = useAddExpenseMutation();
  return (
    <div>
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">Add Expense</h1>
        </div>
      </div>
      <div className="content-container">
        <ExpenseForm
          onSubmit={(expense) => {
            addExpense(expense);
            navtoHome("/");
          }}
        />
      </div>
    </div>
  );
};

export default AddExpensePage;
