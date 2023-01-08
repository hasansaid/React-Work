import axios from "axios";
import React, { useState, useEffect } from "react";

const UserDetail = ({ activeUserId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${activeUserId}`).then(
      (res) => setUser(res.data)
    );
  }, [activeUserId]);

  return (
    <div>
      <h2>Kullanıcı Detayı</h2>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};

export default UserDetail;
