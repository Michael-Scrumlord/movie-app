import React from "react";
import { Link } from "react-router-dom";

export default function NavHeader() {
  /*
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
    </div>*/

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
        <a class="navbar-brand" href="#">Media-App</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/MovieList" Link to = "/MovieList">Movies <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/SeriesList" Link to = "/SeriesList">Series</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/BookList" Link to = "/BookList">Books</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/GamesList" Link to = "/GamesList">Games</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                More
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="/About" Link to = "/About">About</a>
              </div>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
      </>
  )
}