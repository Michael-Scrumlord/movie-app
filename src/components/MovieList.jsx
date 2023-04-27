import InfoCard from './InfoCard'
import { MediaData } from './MediaData'

export default function MovieList() {
    return(
      <div className="content">
        <InfoCard media="Movie" 
                  title={MediaData[0][0].Name} 
                  synopsis={MediaData[0][0].Synopsis} 
                  movieposter={MediaData[0][0].Poster}
                  genre={MediaData[0][0].Genre}
                  rating={MediaData[0][0].UserRating}
                  year={MediaData[0][0].Year}
                />
        <InfoCard media="Movie"
                  title={MediaData[0][1].Name} 
                  synopsis={MediaData[0][1].Synopsis} 
                  movieposter={MediaData[0][1].Poster}
                  genre={MediaData[0][1].Genre}
                  rating={MediaData[0][1].UserRating}
                  year={MediaData[0][1].Year}
        />
        <InfoCard media="Movie"
                  title={MediaData[0][2].Name} 
                  synopsis={MediaData[0][2].Synopsis} 
                  movieposter={MediaData[0][2].Poster}
                  genre={MediaData[0][2].Genre}
                  rating={MediaData[0][2].UserRating}
                  year={MediaData[0][2].Year}
        />
        <InfoCard media="Movie"
                  title={MediaData[0][3].Name} 
                  synopsis={MediaData[0][3].Synopsis} 
                  movieposter={MediaData[0][3].Poster}
                  genre={MediaData[0][3].Genre}
                  rating={MediaData[0][3].UserRating}
                  year={MediaData[0][3].Year}
        />
        <InfoCard media="Movie"
                  title={MediaData[0][4].Name} 
                  synopsis={MediaData[0][4].Synopsis} 
                  movieposter={MediaData[0][4].Poster}
                  genre={MediaData[0][4].Genre}
                  rating={MediaData[0][4].UserRating}
                  year={MediaData[0][4].Year}
        />
        <InfoCard media="Movie"
                  title={MediaData[0][5].Name} 
                  synopsis={MediaData[0][5].Synopsis} 
                  movieposter={MediaData[0][5].Poster}
                  genre={MediaData[0][5].Genre}
                  rating={MediaData[0][5].UserRating}
                  year={MediaData[0][5].Year}
        />
        <InfoCard media="Movie"
                  title={MediaData[0][6].Name} 
                  synopsis={MediaData[0][6].Synopsis} 
                  movieposter={MediaData[0][6].Poster}
                  genre={MediaData[0][6].Genre}
                  rating={MediaData[0][6].UserRating}
                  year={MediaData[0][6].Year}
        />

        <InfoCard media="Movie"
                  title={MediaData[0][7].Name} 
                  synopsis={MediaData[0][7].Synopsis} 
                  movieposter={MediaData[0][7].Poster}
                  genre={MediaData[0][7].Genre}
                  rating={MediaData[0][7].UserRating}
                  year={MediaData[0][7].Year}
        />
        <InfoCard media="Movie"
                  title={MediaData[0][8].Name} 
                  synopsis={MediaData[0][8].Synopsis} 
                  movieposter={MediaData[0][8].Poster}
                  genre={MediaData[0][8].Genre}
                  rating={MediaData[0][8].UserRating}
                  year={MediaData[0][8].Year}
        />
        <InfoCard media="Movie"
                  title={MediaData[0][9].Name} 
                  synopsis={MediaData[0][9].Synopsis} 
                  movieposter={MediaData[0][9].Poster}
                  genre={MediaData[0][9].Genre}
                  rating={MediaData[0][9].UserRating}
                  year={MediaData[0][9].Year}
        />
      </div>
    )
  }