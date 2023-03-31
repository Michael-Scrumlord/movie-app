import React from "react";
import { Link } from "react-router-dom";

export default function NavHeader() {
  return (
    <div className="header">
      <h1 className="logo">.movie-app</h1>
      <h3 className="loginText">Login / Register</h3>
      <div className="header-search">
        <br></br>
        <input type="text" placeholder="Search..." className="header-searchbar"></input>
      </div>
      <div className="grid-container">
        <a href="/MovieList" Link to = "/MovieList" className="header-link">
        <button className= "header-button">Movies</button>
        </a>
        <a href="/SeriesList" Link to ="/SeriesList" className="header-link">
          <button className= "header-button">Series</button>
        </a>
        <a href="/BookList" Link to ="/BookList" className="header-link">
          <button className= "header-button">Books</button>
        </a>
        <a href="/GamesList" Link to ="/GamesList" className="header-link">
          <button className= "header-button">Games</button>
        </a>
      </div>
    </div>
  )
}