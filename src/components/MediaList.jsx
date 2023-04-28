import InfoCard from './InfoCard'
import { MediaData } from './MediaData'

export default function MediaList(props) {
    var i = 0;
    // References the index in MediaData[i][j]
    switch (props.media) {
      case "Movie":
        i = 0;
        break;

      case "Series":
        i = 1;
        break;

      case "Book":
        i = 2;
        break;
      
      case "Game":
        i = 3;
        break;
    
      default:
        break;
    }
    // I should probably do something about this...
    return(
      <div className="content">
                <InfoCard media={props.media} 
                  title={MediaData[i][0].Name} 
                  synopsis={MediaData[i][0].Synopsis} 
                  mediaposter={MediaData[i][0].Poster}
                  genre={MediaData[i][0].Genre}
                  rating={MediaData[i][0].UserRating}
                  year={MediaData[i][0].Year}
                />
                <InfoCard media={props.media} 
                  title={MediaData[i][1].Name} 
                  synopsis={MediaData[i][1].Synopsis} 
                  mediaposter={MediaData[i][1].Poster}
                  genre={MediaData[i][1].Genre}
                  rating={MediaData[i][1].UserRating}
                  year={MediaData[i][1].Year}
                />
                <InfoCard media={props.media} 
                  title={MediaData[i][2].Name} 
                  synopsis={MediaData[i][2].Synopsis} 
                  mediaposter={MediaData[i][2].Poster}
                  genre={MediaData[i][2].Genre}
                  rating={MediaData[i][2].UserRating}
                  year={MediaData[i][2].Year}
                />
                <InfoCard media={props.media} 
                  title={MediaData[i][3].Name} 
                  synopsis={MediaData[i][3].Synopsis} 
                  mediaposter={MediaData[i][3].Poster}
                  genre={MediaData[i][3].Genre}
                  rating={MediaData[i][3].UserRating}
                  year={MediaData[i][3].Year}
                />
                <InfoCard media={props.media} 
                  title={MediaData[i][4].Name} 
                  synopsis={MediaData[i][4].Synopsis} 
                  mediaposter={MediaData[i][4].Poster}
                  genre={MediaData[i][4].Genre}
                  rating={MediaData[i][4].UserRating}
                  year={MediaData[i][4].Year}
                />
                <InfoCard media={props.media} 
                  title={MediaData[i][5].Name} 
                  synopsis={MediaData[i][5].Synopsis} 
                  mediaposter={MediaData[i][5].Poster}
                  genre={MediaData[i][5].Genre}
                  rating={MediaData[i][5].UserRating}
                  year={MediaData[i][5].Year}
                />
                <InfoCard media={props.media} 
                  title={MediaData[i][6].Name} 
                  synopsis={MediaData[i][6].Synopsis} 
                  mediaposter={MediaData[i][6].Poster}
                  genre={MediaData[i][6].Genre}
                  rating={MediaData[i][6].UserRating}
                  year={MediaData[i][6].Year}
                />
                <InfoCard media={props.media} 
                  title={MediaData[i][7].Name} 
                  synopsis={MediaData[i][7].Synopsis} 
                  mediaposter={MediaData[i][7].Poster}
                  genre={MediaData[i][7].Genre}
                  rating={MediaData[i][7].UserRating}
                  year={MediaData[i][7].Year}
                />
                <InfoCard media={props.media} 
                  title={MediaData[i][8].Name} 
                  synopsis={MediaData[i][8].Synopsis} 
                  mediaposter={MediaData[i][8].Poster}
                  genre={MediaData[i][8].Genre}
                  rating={MediaData[i][8].UserRating}
                  year={MediaData[i][8].Year}
                />
                <InfoCard media={props.media} 
                  title={MediaData[i][9].Name} 
                  synopsis={MediaData[i][9].Synopsis} 
                  mediaposter={MediaData[i][9].Poster}
                  genre={MediaData[i][9].Genre}
                  rating={MediaData[i][9].UserRating}
                  year={MediaData[i][9].Year}
                />
      </div>
    )
  }