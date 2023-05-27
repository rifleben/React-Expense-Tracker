import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Tuition Fee for React Course",
    amount: 18.12,
    date: new Date(2023, 5, 14),
  },
  { id: "e2", title: "Xbox", amount: 300.00, date: new Date(2022, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2022, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 55.64,
    date: new Date(2022, 5, 12),
  },

  {
    id: "e5",
    title: "New Desk (Metal)",
    amount: 150,
    date: new Date(2022, 5, 12),
  },

  {
    id: "e6",
    title: "Dinner with Friends",
    amount: 100,
    date: new Date(2021, 6, 12),
  },
  {
    id: "e7",
    title: "Hotel Stay",
    amount: 104.67,
    date: new Date(2021, 5, 15),
  },

  {
    id: "e7",
    title: "Hotel drinks",
    amount: 44.67,
    date: new Date(2021, 5, 15),
  },

];


const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

const addExpenseHandler = (expense) => {
  setExpenses((prevExpenses) => {
    return [expense, ...prevExpenses];
  });
};

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
