import React from "react";

const EmployeeSearch = props => {
  return (
    <div className="row">
      <div className="col-lg-12">
        <form onSubmit={props.handleSubmit}>
          <div className="form-group">
          <label htmlFor="employee" className="form-label">
                  Search for Employee
                </label>
            <input
              type="text"
              className="form-control"
              id="employee"
              name="newEmployee"
              value={props.newEmployee}
              onChange={props.handleInputChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmployeeSearch;
