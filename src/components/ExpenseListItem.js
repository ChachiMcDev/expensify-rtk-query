import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from 'numeral';



const ExpenseListItem = ({ _id, description, amount, createdAt, note }) => {

    return (
        <div>
            <Link to={`/edit/${_id}`}>
                <h3>Description: {description}</h3>
            </Link>
            <p>Amount: {numeral(amount / 100).format('$0,0.00')}</p>
            <p>Created At: {moment(createdAt).format('MMMM Do, YYYY')}</p>
            <p>Notes: {note}</p>
        </div>
    )
};


export default ExpenseListItem;
