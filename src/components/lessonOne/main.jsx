import React, { useState } from "react";
import Color from "./color.jsx";
import Form from "./form.jsx";
import Counter from "./counter.jsx";
import Header from "./header.jsx";
import Login from "./login.jsx";
import User from "./user.jsx";
import UserState from "./userState.jsx";

function Main() {
  // const isLoggedIn = true;
  // const fullName = 'Hasan Said SERTKAYA';

  const [isVisible, setIsVisible] = useState(true);

  const user = {
    firstname: "Hasan Said",
    lastname: "SERTKAYA",
    email: "hs@gmail.com",
  };

  return (
    <div>
      {/* Koşullu render.. */}
      {/* {isLoggedIn
        ? <div> <Header /> <hr /> Hoşgeldin {fullName} </div>
        : <Login />} */}

      {/* PROPS */}
      {/* 
      <User name="Hasan" surname="SERTKAYA" age={23} />
      <User name="Said" surname="SERTKAYA" age={25} /> */}

      {/* <User
        // title="Kişiler"
        data={user}
        friends={['Ali ', 'Ayşe ', 'Murat']}
      /> */}

      {isVisible && <Counter />}
      <button onClick={() => setIsVisible(!isVisible)}>Göster/Gizle</button>

      {/* <UserState /> */}

      {/* <Color /> */}

      {/* <Form /> */}
    </div>
  );
}

export default Main;
