import React from "react";

const EmployeeRow = props => {
  return (
    <tr>
      <th scope="row">{props.id}</th>
      <td>{props.image}</td>
      <td>{props.name}</td>
      <td>{props.phone}</td>
      <td>{props.email}</td>
      <td>{props.dob}</td>
    </tr>
  );
};

export default EmployeeRow;
