import InfoCard from './InfoCard'
import { MediaData } from './MediaData'

export default function SeriesList() {
    return(
      <div className="content">
        <InfoCard media="Series" 
                  title={MediaData[1][0].Name} 
                  synopsis={MediaData[1][0].Synopsis} 
                  movieposter={MediaData[1][0].Poster}
                  genre={MediaData[1][0].Genre}
                  rating={MediaData[1][0].UserRating}/>
        <InfoCard media="Series" 
                  title={MediaData[1][1].Name} 
                  synopsis={MediaData[1][1].Synopsis} 
                  movieposter={MediaData[1][1].Poster}
                  genre={MediaData[1][1].Genre}
                  rating={MediaData[1][1].UserRating}/>
        <InfoCard media="Series" 
                  title={MediaData[1][2].Name} 
                  synopsis={MediaData[1][2].Synopsis} 
                  movieposter={MediaData[1][2].Poster}
                  genre={MediaData[1][2].Genre}
                  rating={MediaData[1][2].UserRating}/>
        <InfoCard media="Series" 
                  title={MediaData[1][3].Name} 
                  synopsis={MediaData[1][3].Synopsis} 
                  movieposter={MediaData[1][3].Poster}
                  genre={MediaData[1][3].Genre}
                  rating={MediaData[1][3].UserRating}/>
        <InfoCard media="Series" 
                  title={MediaData[1][4].Name} 
                  synopsis={MediaData[1][4].Synopsis} 
                  movieposter={MediaData[1][4].Poster}
                  genre={MediaData[1][4].Genre}
                  rating={MediaData[1][4].UserRating}/>
        <InfoCard media="Series" 
                  title={MediaData[1][5].Name} 
                  synopsis={MediaData[1][5].Synopsis} 
                  movieposter={MediaData[1][5].Poster}
                  genre={MediaData[1][5].Genre}
                  rating={MediaData[1][5].UserRating}/>
        <InfoCard media="Series" 
                  title={MediaData[1][6].Name} 
                  synopsis={MediaData[1][6].Synopsis} 
                  movieposter={MediaData[1][6].Poster}
                  genre={MediaData[1][6].Genre}
                  rating={MediaData[1][6].UserRating}/>
        <InfoCard media="Series" 
                  title={MediaData[1][7].Name} 
                  synopsis={MediaData[1][7].Synopsis} 
                  movieposter={MediaData[1][7].Poster}
                  genre={MediaData[1][7].Genre}
                  rating={MediaData[1][7].UserRating}/>
        <InfoCard media="Series" 
                  title={MediaData[1][8].Name} 
                  synopsis={MediaData[1][8].Synopsis} 
                  movieposter={MediaData[1][8].Poster}
                  genre={MediaData[1][8].Genre}
                  rating={MediaData[1][8].UserRating}/>
        <InfoCard media="Series" 
                  title={MediaData[1][9].Name} 
                  synopsis={MediaData[1][9].Synopsis} 
                  movieposter={MediaData[1][9].Poster}
                  genre={MediaData[1][9].Genre}
                  rating={MediaData[1][9].UserRating}/>
      </div>
    )
  }