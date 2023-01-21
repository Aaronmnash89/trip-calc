import { inputUnstyledClasses } from "@mui/base";
import { border } from "@mui/system";
import React, { useState } from "react";
import Expenses from "./Expense";

function ExpenseSplitter({ users, expenses, refreshData }) {
  const [expenseAmount, setExpenseAmount] = useState(0);
  const [quotient, setQuotient] = useState(0);

  const numPeople = users.length;
  var total = 0;
  expenses.forEach((expense) => {
    total += expense.value;
  });

  const split = Math.round((total / numPeople) * 100) / 100; //what is owed per person
  const splice = Math.round(total * 100) / 100; //total amount of all expenses

  function handleExpenseAmountChange(e) {
    setExpenseAmount(e.target.value);
  }

  function handleSplitExpense() {
    const q = expenseAmount;
    setQuotient(q);
  }

  let usersTotals = {};
  expenses.forEach((expense, index) => {
    if (expense.nameID in usersTotals) {
      usersTotals[expense.nameID] += expense.value;
    } else {
      usersTotals[expense.nameID] = expense.value;
    }
  });

  let whoPaidWho = [];
  // find people that haven't paid anything
  if (Object.keys(usersTotals).length < users.length) {
    for (let userID in users) {
      if (userID in usersTotals) continue;

      usersTotals[userID] = 0;
    }
  }

  if (Object.keys(usersTotals).length > 1) {
    let calculatedAmounts = [];
    //push the amount that should be paid by everyone to an array
    for (let user in usersTotals) {
      calculatedAmounts.push({
        name: users[user],
        amount: usersTotals[user] - split,
      });
    }
    //Loop to make sure everyone got paid.
    while (
      Math.round(Math.max(...calculatedAmounts.map((item) => item.amount))) !==
      0
    ) {
      let sorted = calculatedAmounts.sort((a, b) => a.amount - b.amount);
      let i = 0;
      let value = sorted[sorted.length - 1].amount + sorted[i].amount;
      whoPaidWho.push({
        giver: sorted[i].name,
        receiver: sorted[sorted.length - 1].name,
        amount: Math.round(Math.abs(sorted[i].amount) * 100) / 100,
      });
      sorted[i].amount = 0;
      sorted[sorted.length - 1].amount = value;

      calculatedAmounts = [...sorted];
    }
    console.log(whoPaidWho);
  }

  const paymentTable = whoPaidWho.map((payment, index) => (
    <tr key={index} className={index % 2 === 0 ? "odd" : "even"}>
      <td>{index + 1}</td>
      <td>{payment.giver}</td>
      <td>{payment.receiver}</td>
      <td>{payment.amount}</td>
    </tr>
  ));

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
      <h2>Payout Totals</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th></th>
            <th>Payer</th>
            <th>Receiver</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>{paymentTable}</tbody>
      </table>
    </div>
  );
}

export default ExpenseSplitter;
