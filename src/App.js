import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar"
import Home from './components/Home';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div><Navbar/><Home/></div>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
