import React, {useState} from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  
    const [edit, setEdit] = useState(false);

    const startEditingHandler = () => {
        setEdit(!edit);
    };

    const stopEditingHandler = () => {
        setEdit(!edit);
    };

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setEdit(!edit);
    };

    return (
        <div className="new-expense">
            {!edit && <button onClick={startEditingHandler}>Add New Expense</button>}
            {edit && <ExpenseForm onCancel={stopEditingHandler} onSaveExpenseData={saveExpenseDataHandler} />}
        </div>
    )
}

export default NewExpense;