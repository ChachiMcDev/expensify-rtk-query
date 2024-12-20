import React from "react";
import { useSelector } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import getVisibleExpenses from "../selectors/expenses";
import { useGetAllExpensesQuery } from "../api/getAllExpenses";

const ExpenseList = () => {
  const filts = useSelector((state) => state.filters);
  const getuserId = useSelector((state) => state.auth.userid);

  const { data, error, isLoading } = useGetAllExpensesQuery(
    `expenses/${getuserId}`
  );

  return (
    <div>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data.length !== 0 ? (
        <div className="content-container">
          <div className="list-header">
            <div className="show-for-mobile">Expenses</div>
            <div className="show-for-desktop">Expense</div>
            <div className="show-for-desktop">Amount</div>
          </div>

          {getVisibleExpenses(data, filts).map((expense, iny) => (
            <div key={iny}>
              <ExpenseListItem {...expense} />
            </div>
          ))}
        </div>
      ) : (
        <div className="content-container">
          <div className="list-item list-item--message">
            <span>No Expenses</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpenseList;
