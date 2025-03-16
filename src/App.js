import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { Question1 } from './pages/question1/Question1';
import { Question2 } from './pages/question2/Question2';
import { Game } from './pages/game/Game';
import { Hero } from './pages/hero/Hero';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
       {/*  <>
          <li className="nav__li">
            <Link to="/game">Game</Link>
          </li>
          <li className="nav__li">
            <Link to="/register">Register</Link>
          </li>
        </> */}
        <Routes>
          <Route exact path="/" element={<Hero/>} />
          <Route exact path="/game" element={<Game/>} />
          <Route exact path="/question1" element={<Question1/>} />
          <Route exact path="/question2" element={<Question2/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
