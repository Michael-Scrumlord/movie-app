import React from 'react';
import './App.css';
import NavHeader from "./components/NavHeader";
import MovieList from "./components/MovieList";
import BookList from "./components/BookList";
import SeriesList from "./components/SeriesList";
import GamesList from "./components/GamesList";
import { Route, Routes } from 'react-router-dom'; 
import AddMedia from './components/AddMedia';

function App() {
  return (
    <div className="fullscreen">
      <NavHeader />
      <AddMedia />
      <Routes>
        <Route path="/" element={<MovieList/>} />
        <Route path="/MovieList" element={<MovieList/>} />
        <Route path="/BookList" element={<BookList/>} />
        <Route path="/SeriesList" element={<SeriesList/>} />
        <Route path="/GamesList" element={<GamesList/>} />
      </Routes>
    </div>
  );
}

export default App;
