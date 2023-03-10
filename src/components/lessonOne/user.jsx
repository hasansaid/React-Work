import React from "react";
import PropTypes from "prop-types";
function User({ title, data, friends }) {
  // console.log(friends);
  //Farklı kulanımlar..
  // const data = props.data;
  // const {data}=props;
  //   const {firstname,lastname,email} = props.data;
  return (
    <div style={{ margin: "50px 0px 0px 50px" }}>
      {/* <table>
        <tr>
          <td>Name: {props.name}</td>
          <br />
          <td>Surname: {props.surname}</td>
          <br />
          <td>Age: {props.age}</td>
        </tr>
      </table>
      <hr /> */}

      {/* <table>
        <tr>
          <th>Name</th>
          <br />
          <th>Surname</th>
          <br />
          <th>Email</th>
          <br />
          <th>Friends</th>
        </tr>
        <tr>
          <td>{data.firstname}</td>
          <br />
          <td> {data.lastname}</td>
          <br />
          <td> {data.email}</td>
          <br />
          <td>
            {friends.map((friend, i) => (
              <div key={i}>
                {i + 1} - {friend}
              </div>
            ))}
          </td>
        </tr>
      </table>
      <div></div>
      <hr /> */}
      <strong>{title}</strong>
      <p>First Name: {data.firstname}</p>
      <p>Last Name: {data.lastname}</p>
      <p>Email: {data.email}</p>
      <p>Friends: {friends}</p>
    </div>
  );
}

User.propTypes = {
  //title burada tanımlamayınca çalışmadı..
  title: PropTypes.string,
  data: PropTypes.exact({
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    email: PropTypes.string,
  }),
  friends: PropTypes.array,
};

User.defaultProps = {
  title: "Kişi",
};

export default User;
