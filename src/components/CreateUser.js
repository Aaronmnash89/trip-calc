import React, { useState } from "react";

const CreateUser = ({ onChangeForm, createUser }) => {
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
          <h2>Create User</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="row">
              <div className="form-group col-md-6">
                <label htmlFor="exampleInputEmail1">First Name</label>
                <input
                  type="text"
                  onChange={(e) => onChangeForm(e)}
                  className="form-control"
                  name="firstname"
                  id="firstname"
                  aria-describedby="emailHelp"
                  placeholder="First Name"
                />
              </div>
            </div>
            <button
              type="button"
              onClick={(e) => createUser()}
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

export default CreateUser;
