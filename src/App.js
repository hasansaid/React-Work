import React from 'react';
import Header from './components/header.jsx';
import Login from './components/login.jsx';
import User from './components/user.jsx';

function App () {
  const isLoggedIn = true;
  const fullName = 'Hasan Said SERTKAYA';

  return (
    <div>
      {/* Koşullu render.. */}
      {/* {isLoggedIn
        ? <div> <Header /> <hr /> Hoşgeldin {fullName} </div>
        : <Login />} */}

      <User name="Hasan" surname="SERTKAYA" age={23} />
      <User name="Said" surname="SERTKAYA" age={25} />
    </div>
  );
}

export default App;
