/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './styles/App.css';
import { BrowserRouter } from "react-router-dom";
import MyNavBar from './components/UI/navbar/MyNavBar';
import AppRouter from './components/AppRouter';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <MyNavBar />
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
