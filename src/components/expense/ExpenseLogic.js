import React from "react";
import "./ExpenseLogic.css";
import ExpenseItem from "./ExpenseItem";

function ExpenseLogic(props) {
  let expenseContent = "";
  props.filteredExpenses.length === 0
    ? (expenseContent = (
        <h2 className="expenses-list__fallback">no result here</h2>
      ))
    : (expenseContent = props.filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      )));
  return <ul className="expenses-list">{expenseContent}</ul>;
}

export default ExpenseLogic;
