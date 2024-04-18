import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar"
import Home from './components/Home/Home';
import Reason from './components/Reason/Reason';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div><Navbar/><Home/><Reason/></div>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
