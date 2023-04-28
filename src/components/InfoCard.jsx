import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import StarBasedRating from 'star-based-rating'

function MediaPoster (props) {
    return(
      <img src={props.mediaposter} className="movie-poster" alt="">
      </img>
    )
  }
  
function TitleCard(props) {
    return(
      <div className="movie-titlecard">
        <h1>{props.title} ({props.year})</h1>
        <p>{props.genre}</p>
        <button className="collapsible">
          Push Me
        </button>
        <StarRating rating={props.rating}/>
        <Synopsis synopsis={props.synopsis}/>
      </div>
    )
}
 
// https://www.npmjs.com/package/star-based-rating //
function StarRating(props) {
  return (
    <div>
      <StarBasedRating 
        totalStars={10}
        previousStarsToDisplay={props.rating} />     
    </div>
  )
}

  function Synopsis (props) {
    return (
      <div className="synopsis">
        <p className="synopsisField">{props.synopsis}</p>
      </div>
    )
  }
  
  export default function InfoCard (props) {
    return (
        <div className="movie-card">
          <MediaPoster mediaposter={props.mediaposter}/>
          <TitleCard media={props.media} 
                     title={props.title} 
                     synopsis={props.synopsis} 
                     genre={props.genre}
                     rating={props.rating}
                     year={props.year}
                     />
        </div>
    )
  }
  