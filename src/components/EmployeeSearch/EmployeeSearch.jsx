import React from "react";

const EmployeeSearch = props => {
  return (
    <div className="row bg-light">
      <div className="col-md-12 mt-5 mb-5">
        <form>
          <div className="form-group">
            <div className="col-md-8">
              <input
                type="text"
                className="form-control mb-3"
                id="employee"
                name="searchEmployee"
                placeholder="Search for Employee"
                value={props.searchEmployee}
                onChange={props.handleSearch}
              />
            </div>
            <div className="col-md-4">
              <button type="submit" className="btn btn-success">
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeSearch;
