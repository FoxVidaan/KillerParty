import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Game from './Game.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='KillerParty'>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
