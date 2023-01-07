import React from "react";

function User(props) {
  //   console.log(props);
  return (
    <div>
      <table>
        <tr>
          <td>Name: {props.name}</td>
          <br />
          <td>Surname: {props.surname}</td>
          <br />
          <td>Age: {props.age}</td>
        </tr>
      </table>
      <hr />
    </div>
  );
}

export default User;
