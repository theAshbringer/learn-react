/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './styles/App.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Posts from "./pages/Posts";
import About from "./pages/About";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
          <div className="navbar">
              <div className="navbar__links">
                  <Link className="navbar__link" to="/about">О сайте</Link>
                  <Link className="navbar__link" to="/posts">Посты</Link>
              </div>
          </div>
          <Routes>
              <Route path='/about' element={<About/>}/>
              <Route path='/posts' element={<Posts/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
