import React, { useEffect, useState } from "react";
import axios from "axios";
import { async } from "q";

const Users = () => {
  //Fetch fonksiyonu kullanılarak veri çekme işlemi yapılmaktadır.

  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loding, setLoding] = useState(true);
  useEffect(() => {
    // axios("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => {
    //     setUsers(res.data);
    //     axios(
    //       `https://jsonplaceholder.typicode.com/posts?userId=${res.data[0].id}`
    //     ).then((res) => setPosts(res.data));
    //   })
    //   .finally(() => setLoding(false));
    getData();
  }, []);

  const getData = async () => {
    const { data: users } = await axios(
      "https://jsonplaceholder.typicode.com/users"
    );
    const { data: posts } = await axios(
      `https://jsonplaceholder.typicode.com/posts?userId=${users[0].id}`
    );

    setUsers(users);
    setPosts(posts);
    setLoding(false);
  };

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
      <hr />
      <h2>Posts</h2>
      {loding && <div>Yükleniyor...</div>}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
