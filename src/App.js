import React from 'react';
// import Header from './components/header.jsx';
// import Login from './components/login.jsx';
import User from './components/user.jsx';

function App () {
  // const isLoggedIn = true;
  // const fullName = 'Hasan Said SERTKAYA';

  const user = {
    firstname: 'Hasan Said',
    lastname: 'SERTKAYA',
    email: 'hs@gmail.com',
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

      <User data={user} friends={['Ali ', 'Ayşe ', 'Murat']} />
    </div>
  );
}

export default App;
