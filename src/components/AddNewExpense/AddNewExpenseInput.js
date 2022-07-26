import React, { useState } from "react";
import "./AddNewExpenseInput.css";
import AddNewExpenseForm from "./AddNewExpenseForm";

function AddNewExpenseInput(props) {
  const passData = function (newExpense) {
    props.onAddNewExpenseInputPass(newExpense);
    setShowForm(false);
  };

  const [showForm, setShowForm] = useState(false);

  const showFormHnadler = function () {
    setShowForm(true);
  };

  const showButtonHandler = function () {
    setShowForm(false);
  };

  let content = "";
  if (showForm === false) {
    content = <button onClick={showFormHnadler}>add new expense</button>;
  } else if (showForm === true) {
    content = (
      <AddNewExpenseForm
        passShowButtonHandler={showButtonHandler}
        onSaveGatheredInfo={passData}
      />
    );
  }

  return <div className="new-expense">{content} </div>;
}

export default AddNewExpenseInput;
