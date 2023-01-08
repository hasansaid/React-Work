import React, { useState } from "react";

function UserState() {
  const [user, setUser] = useState({
    name: "Hasan",
    surName: "Sertkaya",
  });
  const Change = () => {
    // ...user state de ki veriyi sabit tutar
    setUser({ ...user, name: "Ali" });
  };
  const ChangeTwo = () => {
    setUser({ ...user, surName: "Taşkaya" });
  };
  return (
    <div>
      <p>
        {user.name} {user.surName}
      </p>
      <button onClick={Change}>Adını Değiştir</button>
      <button onClick={ChangeTwo}>Soyadını Değiştir</button>
      <button onClick={() => setUser({ name: "Hasan", surName: "Sertkaya" })}>
        Sıfırla
      </button>
    </div>
  );
}

export default UserState;
