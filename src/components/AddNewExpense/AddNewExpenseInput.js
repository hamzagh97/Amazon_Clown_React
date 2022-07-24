import React from "react";
import "./AddNewExpenseInput.css";
import AddNewExpenseForm from "./AddNewExpenseForm";

function AddNewExpenseInput(props) {
  const passData = function (gatheredInfo) {
    props.onAddNewExpenseInputPass(gatheredInfo);
  };
  return (
    <div className="new-expense">
      <AddNewExpenseForm onSaveGatheredInfo={passData} />
    </div>
  );
}

export default AddNewExpenseInput;
