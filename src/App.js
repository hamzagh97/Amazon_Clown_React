import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Expenses from "./components/expense/Expenses";
import AddNewExpenseInput from "./components/AddNewExpense/AddNewExpenseInput";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const passData = function (gatheredInfo) {
    expenses.push(gatheredInfo);
  };
  return (
    <div className="App">
      <Header />
      <Home />
      <AddNewExpenseInput onAddNewExpenseInputPass={passData} />
      <Expenses data={expenses} />
    </div>
  );

  // ... and so on
}

export default App;
