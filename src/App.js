import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { Question1 } from './pages/question1/Question1';
import { Question2 } from './pages/question2/Question2';
import { Question3 } from './pages/question3/Question3';
import { Game } from './pages/game/Game';
import { Hero } from './pages/hero/Hero';
import { FinalPage } from './pages/finalPage/FinalPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Hero/>} />
          <Route exact path="/game" element={<Game/>} />
          <Route exact path="/question1" element={<Question1/>} />
          <Route exact path="/question2" element={<Question2/>} />
          <Route exact path="/question3" element={<Question3/>} />
          <Route exact path="/finalPage" element={<FinalPage/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
