import React from "react";

const EmployeeSearch = props => {
  return (
    <div className="row bg-light">
      <div className="col-md-12 mt-5 mb-5">
        <form onSubmit={props.handleSubmit}>
          <div className="form-group">
            <div className="col-md-8">
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
            <div className="col-md-4">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeSearch;
