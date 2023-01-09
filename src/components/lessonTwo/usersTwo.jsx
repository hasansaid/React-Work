import axios from "axios";
import React, { useState, useEffect } from "react";

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
      <ul>
        {users.map((user) => (
          <li>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UsersTwo;
