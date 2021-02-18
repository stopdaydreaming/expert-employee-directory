import React from "react";

const EmployeeRow = ({ image, name, phone, email, dob}) => {
  return (
    <tr>
      <td><img src={image} alt="employee photo" /></td>
      <td>{name}</td>
      <td>{phone}</td>
      <td>{email}</td>
      <td>{dob.substring(0,10)}</td>
    </tr>
  );
};

export default EmployeeRow;
