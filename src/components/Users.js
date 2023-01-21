import React from "react";
import { deleteUser } from "../services/UserService";

export const Users = ({ users, refreshData, expenses }) => {
  console.log("users length:::", users.length);
  if (users.length === 0) return null;
  let usersTotals = {};
  expenses.forEach((expense, index) => {
    if (expense.nameID in usersTotals) {
      usersTotals[expense.nameID] += expense.value;
    } else {
      usersTotals[expense.nameID] = expense.value;
    }
  });

  const UserRow = (user, index) => {
    const clickDeleteUser = () => {
      deleteUser(index).then(() => {
        refreshData();
      });
    };

    const canNotDelete = usersTotals.hasOwnProperty(index);

    return (
      <tr key={index} className={index % 2 === 0 ? "odd" : "even"}>
        <td>{index + 1}</td>
        <td>{user}</td>
        <td>
          <button onClick={clickDeleteUser} disabled={canNotDelete}>
            Delete
          </button>
        </td>
      </tr>
    );
  };

  const userTable = users.map((user, index) => UserRow(user, index));

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
      <h2>Users</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Users added</th>
          </tr>
        </thead>
        <tbody>{userTable}</tbody>
      </table>
    </div>
  );
};
