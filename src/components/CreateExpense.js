import React, { useState } from "react";

const CreateExpense = ({ onChangeForm, createExpense, users }) => {
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
      <div className="row">
        <div className="col-md-7 mrgnbtm">
          <h2>Create Expense</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="row">
              <div className="form-group col-md-6">
                <label htmlFor="exampleInputEmail1">First Name</label>
                <select
                  type="text"
                  onChange={(e) => onChangeForm(e)}
                  className="form-control"
                  name="firstname"
                  id="firstname"
                  aria-describedby="emailHelp"
                  placeholder="First Name"
                >
                  {users.map((user, index) => (
                    <option value={index} key={index}>
                      {user}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="exampleInputExpenses1">Expenses</label>
                <input
                  type="text"
                  onChange={(e) => onChangeForm(e)}
                  className="form-control"
                  name="expense"
                  id="expense"
                  placeholder="Expenses"
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-12">
                <label htmlFor="exampleInputDescription">Description</label>
                <input
                  type="text"
                  onChange={(e) => onChangeForm(e)}
                  className="form-control"
                  name="description"
                  id="description"
                  aria-describedby="emailHelp"
                  placeholder="Description"
                />
              </div>
            </div>
            <button
              type="button"
              onClick={(e) => createExpense()}
              className="btn btn-danger"
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateExpense;
