/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './styles/App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Posts from "./pages/Posts";
import About from "./pages/About";
import MyNavBar from './components/UI/navbar/MyNavBar';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <MyNavBar />
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/posts' element={<Posts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
