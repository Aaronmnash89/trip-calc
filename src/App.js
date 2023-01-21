import React, { useState, useEffect } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Users } from "./components/Users";
import { DisplayBoard } from "./components/DisplayBoard";
import CreateUser from "./components/CreateUser";
import {
  getAllUsers,
  createUser,
  getAllExpenses,
  createExpense,
} from "./services/UserService";
import { colors } from "@mui/material";
import CreateExpense from "./components/CreateExpense";
import Expenses from "./components/Expense";
import ExpenseSplitter from "./components/ExpenseSplitter";

function App() {
  const [user, setUser] = useState("");
  const [expense, setExpense] = useState({
    nameID: 0,
    value: 0,
    description: "string",
  });
  const [users, setUsers] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [numberOfUsers, setNumberOfUsers] = useState(0);

  const userCreate = (e) => {
    createUser(user).then((response) => {
      console.log(response);
      setNumberOfUsers(numberOfUsers + 1);
      fetchAllUsers();
    });
  };
  const expenseCreate = (e) => {
    createExpense(expense).then(() => {
      fetchAllExpenses();
    });
  };

  const fetchAllUsers = () => {
    getAllUsers().then((users) => {
      setUsers(users);
      setNumberOfUsers(users.length);
    });
  };

  const fetchAllExpenses = () => {
    getAllExpenses().then((expenses) => {
      setExpenses(expenses);
    });
  };

  useEffect(() => {
    fetchAllUsers();
    fetchAllExpenses();
  }, []);

  const onChangeExpenseForm = (e) => {
    console.log(e.target.name);
    if (e.target.name === "firstname") {
      expense.nameID = parseInt(e.target.value);
    } else if (e.target.name === "expense") {
      expense.value = parseFloat(e.target.value);
    } else if (e.target.name === "description") {
      expense.description = e.target.value;
    }
    setExpense(expense);
  };

  const onChangeUserForm = (e) => {
    if (e.target.name === "firstname") {
      setUser(e.target.value);
    }
  };

  const refreshData = () => {
    fetchAllUsers();
    fetchAllExpenses();
  };

  return (
    <div className="App">
      <Header></Header>
      <div className="container mrgnbtm">
        <div className="row">
          <div className="col-md-8">
            <CreateUser
              user={user}
              onChangeForm={onChangeUserForm}
              createUser={userCreate}
            ></CreateUser>
            <CreateExpense
              users={users}
              expense={expense}
              onChangeForm={onChangeExpenseForm}
              createExpense={expenseCreate}
            />
          </div>
          <div className="col-md-4">
            <DisplayBoard
              numberOfUsers={numberOfUsers}
              getAllUsers={refreshData}
            ></DisplayBoard>
          </div>
        </div>
      </div>
      <div className="row mrgnbtm">
        <Users
          users={users}
          expenses={expenses}
          refreshData={refreshData}
        ></Users>
        <Expenses users={users} expenses={expenses} refreshData={refreshData} />
        <ExpenseSplitter
          users={users}
          expenses={expenses}
          refreshData={refreshData}
        />
      </div>
    </div>
  );
}

export default App;
