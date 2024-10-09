import React from "react";
import { useParams } from 'react-router-dom';
import ExpenseForm from "./ExpenseForm";
import { useDispatch, useSelector } from "react-redux";
import expensesSlice from "../slicereducers/expensesSlice";
import { useNavigate } from "react-router-dom";
import { removeExpenseWithId, editExpenseWithId } from "../slicereducers/expensesSlice";


const EditExpensePage = (props) => {
    const { editExpense, removeExpense } = expensesSlice.actions
    const sendToDashboard = useNavigate();

    const dispatch = useDispatch();
    const { id } = useParams();
    const getExpenses = useSelector((state) => state.expenses.find((expense) => expense._id === id));

    return (
        <div>

            <ExpenseForm expense={getExpenses} onSubmit={(expense) => {
                //dispatch(editExpense(expense));
                dispatch(editExpenseWithId(expense));
            }} />
            <button onClick={
                () => {
                    //dispatch(removeExpense({ id }))
                    dispatch(removeExpenseWithId(id))

                    sendToDashboard('/');
                }
            }>Remove</button>
        </div>
    )
};

export default EditExpensePage;

// const mapStateToProps = (state, props) => {
//     //const id = "e9309366-2f23-44bc-a3df-837e786a1069"
//     const { id } = useParams();

//     return {
//         expense: state.expenses.find((expense) => expense.id === id)
//     }
// }

// export default connect(mapStateToProps)(EditExpensePage);