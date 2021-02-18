import React, { Component } from "react";
import EmployeeRow from "../EmployeeRow/EmployeeRow";
import EmployeeSearch from "../EmployeeSearch/EmployeeSearch";

class Employees extends Component {
  state = {
    employees: [
      {
        id: 1,
        image: "url",
        name: "Hank",
        phone: "444-555-4444",
        email: "hank@email.com",
        dob: "02-09-1991"
      },
      {
        id: 2,
        image: "url",
        name: "Nancy",
        phone: "444-556-4444",
        email: "nancy@email.com",
        dob: "02-09-1989"
      },
      {
        id: 3,
        image: "url",
        name: "Dale",
        phone: "444-557-4444",
        email: "dale@email.com",
        dob: "02-09-1986"
      }
    ],
    searchEmployee: ""
  };

  handleInputChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const searchEmployee = {
      id: this.state.employees.length + 1,
      name: this.state.searchEmployee
    };

    const employeesArray = [...this.state.employees];
    employeesArray.push(searchEmployee);

    this.setState({
      employees: employeesArray,
      searchEmployee: ""
    });
  };

  render() {
    return (
      <div className="container">
        {/* //search form */}
        <EmployeeSearch />
        {/* <div className="row">
          <div className="col-lg-12">
            <form onSubmit={this.handleSubmit}>
              <div className="mb-3">
                <label htmlFor="employee" className="form-label">
                  Search for Employee
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="employee"
                  value={this.state.searchEmployee}
                  name="searchEmployee"
                  onChange={this.handleInputChange}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div> */}

        {/* //employee table */}
        <div className="row">
          <div className="col">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                </tr>
              </thead>
              <tbody>
                {this.state.employees.map(employee => (
                  <EmployeeRow {...employee} key={employee.id} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Employees;
