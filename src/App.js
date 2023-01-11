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
import Login from './components/lessonTwo/miniproject/login';
import Dashboard from './components/lessonTwo/layouts/dashboard';
import Auth from './components/lessonTwo/layouts/auth';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="users-two" element={<UsersTwo />} />
          <Route path="users-two/:id" element={<UserDetail />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="auth" element={<Auth />}>
          <Route index element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
