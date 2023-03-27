import React from "react";
import { Link } from "react-router-dom";

export default function NavHeader() {
  return (
    <div className="header">
      <div className="header-search">
        <br></br>
        <input type="text" placeholder="Search..." className="header-searchbar"></input>
      </div>
      <div className="grid-container">
        <button className= "header-button">
          <a href="/MovieList" Link to ="/MovieList" className="header-link">Movies</a>
        </button>
        <button className= "header-button">
        <a href="/SeriesList" Link to ="/SeriesList" className="header-link">Series</a>
          </button>
        <button className= "header-button">
          <a href="/BookList" Link to ="/BookList" className="header-link">Books</a>
        </button>
        <button className= "header-button">
        <a href="/GamesList" Link to ="/GamesList" className="header-link">Games</a>
          </button>
      </div>
    </div>
  )
}