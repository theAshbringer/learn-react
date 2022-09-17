/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './styles/App.css';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Posts from "./pages/Posts";
import About from "./pages/About";
import MyNavBar from './components/UI/navbar/MyNavBar';
import Error from './pages/Error';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <MyNavBar />
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/error' element={<Error />} />
          <Route path='/*' element={<Navigate to="/error" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
