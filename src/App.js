import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './component/NavBar';
import MyBooks from './component/MyBooks';
import Categories from './component/Categories';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<MyBooks />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
