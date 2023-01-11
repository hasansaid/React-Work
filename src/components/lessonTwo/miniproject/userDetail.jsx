import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import PropTypes from "prop-types";

const UserDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const [user, setUser] = useState(null);

  //  useEffect(() => {
  //   axios(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) =>
  //     setUser(res.data)
  //   );
  // }, [id]);

  return (
    <div>
      <h2>Kullanıcı Detayları</h2>
      <pre>{JSON.stringify(location.state, null, 2)}</pre>
      <Link to={`/users-two/${Number(id) + 1}`}>Sonraki Kullanıcı</Link>
    </div>
  );
};

export default UserDetail;
