import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import Service from './components/Service';
import Gallery from './components/Gallery';
import Works from './components/Works';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/Projects" element={<Projects/>} />
        <Route path="/Service" element={<Service/>} />
        <Route path='/Gallery' element={<Gallery/>} />
        <Route path="/Works" element={<Works />} />
        <Route path="/Works/:id" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
