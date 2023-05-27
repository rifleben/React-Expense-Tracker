import React, {useState} from "react"

import "./ExpenseForm.css"

const ExpenseForm = (props) => {
    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState("")
    const [date, setDate] = useState("")

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: title,
            amount: amount,
            date: new Date(date)
        };
        props.onSaveExpenseData(expenseData);
        
        setTitle("");
        setAmount("");
        setDate("");
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={title} onChange={titleChangeHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input onChange={amountChangeHandler} type="number" value={amount} min="0.01" step="0.01"></input>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input onChange={dateChangeHandler} type="date" value={date} min="2019-01-01" max="2022-12-31"></input>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm