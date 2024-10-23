import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";

const ExpenseListItem = ({ _id, description, amount, createdAt, note }) => {
  return (
    <Link className="list-item" to={`/edit/${_id}`}>
      <div>
        <h3 className="list-item__title">{description}</h3>
        <span className="list-item__subtitle">
          {moment(createdAt).format("MMMM Do, YYYY")}
        </span>

        {note ? (
          <div>
            <span className="list-item__note">Notes: </span>
            {note}
          </div>
        ) : (
          ""
        )}
      </div>
      <div>
        <h3 className="list-item__data">{numeral(amount).format("$0,0.00")}</h3>
      </div>
    </Link>
  );
};

export default ExpenseListItem;
