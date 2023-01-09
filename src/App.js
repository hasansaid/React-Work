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

import Home from './components/lessonTwo/miniproject/home';
import UsersTwo from './components/lessonTwo/miniproject/usersTwo';
import Menu from './components/lessonTwo/miniproject/menu';
import Contact from './components/lessonTwo/miniproject/contact';
import UserDetail from './components/lessonTwo/miniproject/userDetail';

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route index element={<Home />} />
        <Route path="users-two" element={<UsersTwo />} />
        <Route path="users-two/:id" element={<UserDetail />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
