import React, {useState} from 'react';
import Color from './components/color.jsx';
import Form from './components/form.jsx';
import Counter from './components/counter.jsx';
import Header from './components/header.jsx';
import Login from './components/login.jsx';
import User from './components/user.jsx';
import UserState from './components/userState.jsx';

function App () {
  // const isLoggedIn = true;
  // const fullName = 'Hasan Said SERTKAYA';

  const [isVisible, setIsVisible] = useState (true);

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

      {/* <User
        // title="Kişiler"
        data={user}
        friends={['Ali ', 'Ayşe ', 'Murat']}
      /> */}

      {isVisible && <Counter />}
      <button onClick={() => setIsVisible (!isVisible)}>Göster/Gizle</button>

      {/* <UserState /> */}

      {/* <Color /> */}

      {/* <Form /> */}
    </div>
  );
}

export default App;
