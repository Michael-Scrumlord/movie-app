import { MediaData } from './MediaData'
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
      <StarRating rating={props.rating}/>
      <Synopsis synopsis={props.synopsis}/>
    </div>
  )
}

// https://www.npmjs.com/package/star-based-rating //
function StarRating(props) {
return (
  <>
    <StarBasedRating 
      totalStars={10}
      previousStarsToDisplay={props.rating} />     
  </>
)
}

function Synopsis (props) {
  return (
    <div className="synopsis">
      <p className="synopsisField">{props.synopsis}</p>
    </div>
  )
}
function InfoCard (props) {
  return (
      <div className="movie-card">
        <MediaPoster mediaposter={props.mediaposter}/>
        <TitleCard {...props}/>
      </div>
  )
}

export default function MediaList(props) {
    
    var mediaType = 0;
    var listSize = 10

    // References the index in MediaData[i][j]
    switch (props.media) {
      case "Movie":
        mediaType = 0;
        break;

      case "Series":
        mediaType = 1;
        break;

      case "Book":
        mediaType = 2;
        break;
      
      case "Game":
        mediaType = 3;
        break;
    
      default:
        break;
    }

    const mediaList= [];

  for (let rank = 0; rank < listSize; rank++) {
        mediaList.push (<InfoCard media={props.media} 
          title={MediaData[mediaType][rank].Name} 
          synopsis={MediaData[mediaType][rank].Synopsis} 
          mediaposter={MediaData[mediaType][rank].Poster}
          genre={MediaData[mediaType][rank].Genre}
          rating={MediaData[mediaType][rank].UserRating}
          year={MediaData[mediaType][rank].Year}
          />  )
  }
    return (
      <div className = "content">
          {mediaList} 
        </div>
    )
  }