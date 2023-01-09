import React from 'react';
import Main from './components/lessonOne/main';
import UserListApp from './components/lessonTwo/user-list-app';
import Users from './components/lessonTwo/users';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from 'react-router-dom';

import Home from './components/lessonTwo/home';
import UsersTwo from './components/lessonTwo/usersTwo';
import Menu from './components/lessonTwo/menu';
import Contact from './components/lessonTwo/contact';

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route index element={<Home />} />
        <Route path="users-two" element={<UsersTwo />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
