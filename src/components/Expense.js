import React from "react";
import { deleteExpense } from "../services/UserService";

const Expenses = ({ users, expenses, refreshData }) => {
  console.log("expenses length:::", expenses.length);
  if (expenses.length === 0) return null;

  const ExpenseRow = (expense, index) => {
    const clickDeleteExpense = () => {
      deleteExpense(index).then(() => {
        refreshData();
      });
    };

    //delete entry
    return (
      <tr key={index} className={index % 2 === 0 ? "odd" : "even"}>
        <td>{index + 1}</td>
        <td>{users[expense.nameID]}</td>
        <td>{expense.value}</td>
        <td>{expense.description}</td>
        <td>
          <button onClick={clickDeleteExpense}>Delete</button>
        </td>
      </tr>
    );
  };

  const expenseTable = expenses.map((expense, index) =>
    ExpenseRow(expense, index)
  );
  //creating a table that shows the expense for ea. user
  return (
    <div
      style={{
        boxShadow: "1px 2px 6px 0.75px",
        margin: "4em",
        padding: "1em",
        border: "10px",
      }}
      className="container"
    >
      <h2>List of Expenses</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Expense</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>{expenseTable}</tbody>
      </table>
    </div>
  );
};

export default Expenses;
