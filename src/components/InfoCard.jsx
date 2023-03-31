import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import StarBasedRating from 'star-based-rating'

function MoviePoster () {
    return(
      <div className="movie-poster">
  
      </div>
    )
  }
  
function TitleCard(props) {
    return(
      <div className="movie-titlecard">
        <h1>{props.media} Title</h1>
        <button className="collapsible">
          Push Me
        </button>
        <StarRating />
        <Synopsis />
        
      </div>
    )
}
 
// https://www.npmjs.com/package/star-based-rating //
function StarRating() {
  return (
    <div>
      <StarBasedRating 
        totalStars={10}
        previousStarsToDisplay={3} />     
    </div>
  )
}

  function Synopsis () {
    return (
      <div className="synopsis">
        <textarea className="synopsisField">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</textarea>
      </div>
    )
  }
  
  export default function InfoCard (props) {
    return (
        <div className="movie-card">
          <MoviePoster />
          <TitleCard media={props.media}/>
        </div>
    )
  }
  