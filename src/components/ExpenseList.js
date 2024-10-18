import React from "react";
import { connect, useSelector } from 'react-redux';
import ExpenseListItem from "./ExpenseListItem";
import getVisibleExpenses from '../selectors/expenses';
import { useGetAllExpensesQuery } from "../api/getAllExpenses";

import { NavLink } from "react-router-dom";

const ExpenseList = () => {

    const filts = useSelector(state => state.filters);
    const getuserId = useSelector(state => state.auth.userid);

    const { data, error, isLoading } = useGetAllExpensesQuery(`expenses/${getuserId}`);


    return (
        <>
            {error ? (
                <>Oh no, there was an error</>
            ) : isLoading ? (
                <>Loading...</>
            ) : data ? (
                <>
                    <h1>Expenses List</h1>
                    < NavLink to = "/create" > Create Expense</ NavLink>
                    {getVisibleExpenses(data, filts).map((expense, iny) => (
                        <div key={iny}>
                            <ExpenseListItem {...expense} />
                        </div>
                    ))}

                </>
            ) : null}
        </>
    )





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