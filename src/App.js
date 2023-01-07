import React from 'react';
import Header from './components/header.jsx';
import Login from './components/login.jsx';

function App () {
  const isLoggedIn = true;
  const fullName = 'Hasan Said SERTKAYA';

  return (
    <div>
      {/* Merhaba &nbsp; */}

      {isLoggedIn
        ? <div> <Header /> <hr /> Hoşgeldin {fullName} </div>
        : <Login />}
    </div>
  );
}

export default App;
