import React from "react";

const EmployeeRow = props => {
  return (
    <tr>
      <td><img src={props.image} /></td>
      <td>{props.name}</td>
      <td>{props.phone}</td>
      <td>{props.email}</td>
      <td>{props.dob}</td>
    </tr>
  );
};

export default EmployeeRow;
