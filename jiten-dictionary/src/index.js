import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './routes/login';
import Home from './routes/home';
import Register from './routes/register';
import Loading from './routes/loading';
import Profile from './routes/profile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='' element={<Login />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path="/register" element={<Register />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
