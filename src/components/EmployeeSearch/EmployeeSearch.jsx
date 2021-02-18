import React from "react";

const EmployeeSearch = props => {
  return (
    <div className="row">
      <div className="col-lg-12 mt-5 mb-5">
        <form onSubmit={props.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="employee"
              name="newEmployee"
              placeholder="Search for Employee"
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
