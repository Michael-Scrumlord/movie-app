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
      </div>
    )
  }
  
  function Synopsis () {
    return (
      <div className="synopsis">
        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h5>
      </div>
    )
  }
  
  export default function InfoCard (props) {
    return (
        <div className="movie-card">
          <MoviePoster />
          <TitleCard media={props.media}/>
          <Synopsis />
        </div>
    )
  }
  