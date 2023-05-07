import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Service from './pages/servicess/Service';
import NavTop from './components/navbarTop/NavTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/sevice' element={<Service />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


