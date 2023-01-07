import React from 'react';
import Header from './components/header/header.jsx';

function App () {
  const isLoggedIn = false;
  const fullName = 'Hasan Said SERTKAYA';

  return (
    <div>
      <Header />
      Merhaba &nbsp;

      {isLoggedIn
        ? <div>Hoşgeldin {fullName}</div>
        : <button>
            'Lütfen Giriş Yapınız !!!'
          </button>}

    </div>
  );
}

export default App;
