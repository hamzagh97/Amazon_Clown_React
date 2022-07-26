import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import "../filter/ExpensesFilter";
import ExpensesFilter from "../filter/ExpensesFilter";
import ExpenseLogic from "./ExpenseLogic";
import Chart from "./Chart";

function Expenses(props) {
  const [selectPrevState, setState] = useState("2020");
  const getSelectState = (selectState) => {
    setState(selectState);
  };
  const filteredData = props.data.filter((expense) => {
    return expense.date.getFullYear().toString() === selectPrevState;
  });

  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (const expense of filteredData) {
    chartDataPoints[expense.date.getMonth()].value += expense.amount;
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectPrevState}
          onSelectChange={getSelectState}
        />
        <Chart dataPoints={chartDataPoints} />
        <ul>
          <ExpenseLogic filteredExpenses={filteredData} />
        </ul>
      </Card>
    </div>
  );
}

export default Expenses;
