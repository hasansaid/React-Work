import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";
const UsersTwo = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .finally(setLoading(false));
  }, []);

  return (
    <div>
      {loading && <p>Yükleniyor...</p>}
      <ul className="userTwo">
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`${user.id}`}> {user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersTwo;
