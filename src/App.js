import React from 'react';
import './App.css';
import NavHeader from "./components/NavHeader";
import { Route, Routes } from 'react-router-dom'; 
import AddMedia from './components/AddMedia';
import MediaList from './components/MediaList';

function App() {
  return (
    <>
      <NavHeader />
      <AddMedia />
      <Routes>
        <Route path="/" element={<MediaList media="Movie"/>} />
        <Route path="/MovieList" element={<MediaList media="Movie"/>} />
        <Route path="/BookList" element={<MediaList media="Book"/>} />
        <Route path="/SeriesList" element={<MediaList media="Series"/>} />
        <Route path="/GamesList" element={<MediaList media="Games"/>} />
      </Routes>
    </>
  );
}
export default App;
