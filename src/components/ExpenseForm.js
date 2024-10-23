import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { useNavigate, useParams } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { useSelector } from "react-redux";

export default (props) => {
  const sendToDashboard = useNavigate();
  const authId = useSelector((state) => state.auth.userid);
  const { id } = useParams();

  const [formVals, setFormVals] = useState(
    props.expense
      ? props.expense
      : {
          userid: authId,
          description: "",
          amount: "",
          note: "",
          createdAt: moment().valueOf(),
          error: "",
        }
  );

  const onDescriptionChange = (e) => {
    setFormVals({ ...formVals, description: e.target.value });
  };
  const onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      setFormVals({ ...formVals, amount });
    }
  };
  const onNoteChange = (e) => {
    setFormVals({ ...formVals, note: e.target.value });
  };
  const onDateChange = (createdAt) => {
    if (createdAt) {
      setFormVals({ ...formVals, createdAt: createdAt.valueOf() });
    }
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!formVals.description || !formVals.amount) {
      //set error state 'Please provide description and amount.'
      setFormVals({
        ...formVals,
        error: "Please provide description and amount.",
      });
    } else {
      //clear error
      setFormVals({ ...formVals, error: "" });
      //submit values to hoc
      props.onSubmit({
        ...formVals,
        description: formVals.description,
        amount: parseFloat(formVals.amount, 10),
        note: formVals.note,
        createdAt: formVals.createdAt.valueOf(),
      });
      sendToDashboard("/dashboard");
    }
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      {formVals.error && <p className="form__error">{formVals.error}</p>}
      <input
        name="description"
        type="text"
        placeholder="Description"
        className="text-input"
        autoFocus
        value={formVals.description}
        onChange={onDescriptionChange}
      />
      <input
        name="amount"
        type="text"
        placeholder="Amount"
        className="text-input"
        value={formVals.amount}
        onChange={onAmountChange}
      />
      <DatePicker selected={formVals.createdAt} onChange={onDateChange} />
      <textarea
        name="note"
        className="textarea"
        placeholder="Add a note for your expense (optional)"
        value={formVals.note}
        onChange={onNoteChange}
      />
      <div>
        <button className="button">
          {id ? "Save Expense" : "Add Expense"}
        </button>
      </div>
    </form>
  );
};
