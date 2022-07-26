import React, { useState } from "react";
import "./AddNewExpenseForm.css";

function AddNewExpenseForm(props) {
  const [inputTitle, setTitleState] = useState("");
  const [inputAmount, setAmountState] = useState("");
  const [inputDate, setDateState] = useState("");

  const tiltleChangeHandler = (e) => {
    setTitleState(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setAmountState(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setDateState(e.target.value);
  };
  const getNewExpense = (e) => {
    e.preventDefault();
    const title = inputTitle;
    const amount = +inputAmount;
    const date = new Date(inputDate);
    const newExpense = { title, amount, date };
    props.onSaveGatheredInfo(newExpense);

    setTitleState("");
    setAmountState("");
    setDateState("");
  };
  return (
    <form onSubmit={getNewExpense}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={inputTitle}
            onChange={tiltleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={inputAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={inputDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="button" onClick={props.passShowButtonHandler}>
          cancel
        </button>
        <button type="submit" onClick={getNewExpense}>
          Add Expense
        </button>
      </div>
    </form>
  );
}

export default AddNewExpenseForm;
