import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import Sprint from './Pages/Sprint/Sprint';
import Admin from './Pages/Admin/Admin';
import { BrowserRouter, Link, Route, Routes,Router } from 'react-router-dom';
import MainPage from './Pages/MainPage/MainPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<MainPage/>}></Route>
            <Route path='/admin' element={<Admin/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/sprint' element={<Sprint/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
