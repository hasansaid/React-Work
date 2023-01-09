import React, { useState } from "react";
import "./style.css";
import UserDetail from "./user-detail";
import UserList from "./user-list";
const UserListApp = () => {
  const [activeUserId, setActiveUserId] = useState(null);

  return (
    <div className="App">
      <div>
        <p>
          {" "}
          User id : {activeUserId}{" "}
          <button onClick={() => setActiveUserId(false)}>Id sil</button>
        </p>

        <UserList setActiveUserId={setActiveUserId} />
      </div>
      {activeUserId && (
        <div>
          <UserDetail activeUserId={activeUserId} />
        </div>
      )}
    </div>
  );
};

export default UserListApp;
