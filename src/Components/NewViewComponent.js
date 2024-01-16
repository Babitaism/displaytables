import React from "react";

export default function NewViewComponent() {
  return (
    <div className="container">
      <form>
        <div className="form-group">
          <label for="Name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name1"
            placeholder="Your Name"
          />
          <label for="Amount">Amount</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            placeholder="Amount"
          />
          <label for="Labour">Labour</label>
          <input
            type="number"
            className="form-control"
            id="labour"
            placeholder="Labour"
          />
          <label for="Desc">Description</label>
          <input
            type="text"
            className="form-control"
            id="name1"
            placeholder="Description"
          />
          <label for="time">Time</label>
          <input
            type="number"
            className="form-control"
            id="labour"
            placeholder="Time"
          />
          <label for="id">Id</label>
          <input
            type="number"
            className="form-control"
            id="labour"
            placeholder="Id"
          />
        </div>
      </form>
    </div>
  );
}
