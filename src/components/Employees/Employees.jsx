import React, { Component } from "react";
import EmployeeRow from "../EmployeeRow/EmployeeRow";
import EmployeeSearch from "../EmployeeSearch/EmployeeSearch";

class Employees extends Component {
  state = {
    employees: [],
    searchEmployee: ""
  };

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=50")
      .then(response => response.json())
      .then(data => {
        const employees = data.results.map(result => {
          const employee = {
            id: result.login.uuid,
            image: result.picture.thumbnail,
            name: result.name.first + " " + result.name.last,
            phone: result.phone,
            email: result.email,
            dob: result.dob.date
          };
          return employee;
        });
        this.setState({ employees });
      })
      .catch(error => console.log(error));
  }

  // search or filter employee
  handleSearch = e => {
    const { name, value } = e.target;
    console.log(value);
    const filteredEmployees = this.state.employees.filter(employee => {
      if(employee.name.includes(value)){
        return true;
      }
      else {
        return false;
      }
    });
    console.log(filteredEmployees);
  };

  // handleSubmit = e => {
  //   e.preventDefault();

  //   const searchEmployee = {
  //     id: this.state.employees.length + 1,
  //     name: this.state.searchEmployee
  //   };

  //   const employeesArray = [...this.state.employees];
  //   employeesArray.push(searchEmployee);

  //   this.setState({
  //     employees: employeesArray,
  //     searchEmployee: ""
  //   });
  // };

  render() {
    return (
      <div className="container">
        {/* //search form */}
        <EmployeeSearch handleSearch={this.handleSearch} />

        {/* //employee table */}
        <div className="row">
          <div className="col">
            <table className="table">
              <thead>
                <tr>
                  {/* <th scope="col">#</th> */}
                  <th scope="col">Image</th>
                  <th scope="col">Name</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Email</th>
                  <th scope="col">DOB</th>
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
