import React from 'react';
import './App.css';
import NavHeader from "./components/NavHeader";
import { Route, Routes } from 'react-router-dom'; 
import AddMedia from './components/AddMedia';
import MediaList from './components/MediaList';

function AllMedia(props){
  return(
    <>
      <MediaList media={props.media}/>
      <AddMedia media={props.media}/>
    </>
  )
}

function App() {
  return (
    <>
      <NavHeader />
      <Routes>
        <Route path="/" element={<AllMedia media="Movie"/>} > </Route>
        <Route path="/MovieList" element={<AllMedia media="Movie"/>} />
        <Route path="/BookList" element={<AllMedia media="Book"/>}/>
        <Route path="/SeriesList" element={<AllMedia media="Series"/>}/>
        <Route path="/GamesList" element={<AllMedia media="Game"/>}/>
      </Routes>
    </>
  );
}
export default App;
