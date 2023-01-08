import React, { useEffect, useState } from "react";

const Users = () => {
  //Fetch fonksiyonu kullanılarak veri çekme işlemi yapılmaktadır.

  const [users, setUsers] = useState([]);
  const [loding, setLoding] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .finally(() => setLoding(false));
  }, []);
  return (
    <div>
      <h2>Users</h2>
      {loding && <div>Yükleniyor...</div>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.id}/-/{user.name} /-/ {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
