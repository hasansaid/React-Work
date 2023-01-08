import axios from "axios";
import React, { useState, useEffect } from "react";

const UserList = ({ setActiveUserId }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .finally(setLoading(false));
  });
  return (
    <div>
      {loading && <div>Yükleniyor...</div>}
      <h2>Kullanıcılar</h2>

      <ul className="userList">
        {users.map((user) => (
          <li key={user.id} onClick={() => setActiveUserId(user.id)}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
