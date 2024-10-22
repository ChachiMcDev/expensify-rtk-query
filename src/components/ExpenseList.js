import React from "react";
import { connect, useSelector } from "react-redux";
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
      ) : data ? (
        <div className="content-container">
          <div>
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
      ) : null}
    </div>
  );

  // return (
  //     <div>
  //         <h1>Expenses List</h1>
  //         {expenses.map((expense, iny) => (
  //             <div key={iny}>
  //                 <ExpenseListItem {...expense} />
  //             </div>
  //         ))}

  //     </div>
  // );
};

export default ExpenseList;

// const mapStateToProps = (state) => {
//     return {
//         expenses: getVisibleExpenses(state.expenses, state.filters)
//     }
// }

// export default connect(mapStateToProps)(ExpenseList);
