import InfoCard from './InfoCard'
import { MediaData } from './MediaData'

export default function BookList() {
    return(
      <div className="content">
        <InfoCard media="Book" 
                  title={MediaData[2][0].Name} 
                  synopsis={MediaData[2][0].Synopsis} 
                  movieposter={MediaData[2][0].Poster}
                  genre={MediaData[2][0].Genre}
                  rating={MediaData[2][0].UserRating}
                  year={MediaData[2][0].Year}/>
        <InfoCard media="Book" 
                  title={MediaData[2][1].Name} 
                  synopsis={MediaData[2][1].Synopsis} 
                  movieposter={MediaData[2][1].Poster}
                  genre={MediaData[2][1].Genre}
                  rating={MediaData[2][1].UserRating}
                  year={MediaData[2][1].Year}/>
        <InfoCard media="Book" 
                  title={MediaData[2][2].Name} 
                  synopsis={MediaData[2][2].Synopsis} 
                  movieposter={MediaData[2][2].Poster}
                  genre={MediaData[2][2].Genre}
                  rating={MediaData[2][2].UserRating}
                  year={MediaData[2][2].Year}/>
        <InfoCard media="Book" 
                  title={MediaData[2][3].Name} 
                  synopsis={MediaData[2][3].Synopsis} 
                  movieposter={MediaData[2][3].Poster}
                  genre={MediaData[2][3].Genre}
                  rating={MediaData[2][3].UserRating}
                  year={MediaData[2][3].Year}/>
        <InfoCard media="Book" 
                  title={MediaData[2][4].Name} 
                  synopsis={MediaData[2][4].Synopsis} 
                  movieposter={MediaData[2][4].Poster}
                  genre={MediaData[2][4].Genre}
                  rating={MediaData[2][4].UserRating}
                  year={MediaData[2][4].Year}/>
        <InfoCard media="Book" 
                  title={MediaData[2][5].Name} 
                  synopsis={MediaData[2][5].Synopsis} 
                  movieposter={MediaData[2][5].Poster}
                  genre={MediaData[2][5].Genre}
                  rating={MediaData[2][5].UserRating}
                  year={MediaData[2][5].Year}/>
        <InfoCard media="Book" 
                  title={MediaData[2][6].Name} 
                  synopsis={MediaData[2][6].Synopsis} 
                  movieposter={MediaData[2][6].Poster}
                  genre={MediaData[2][6].Genre}
                  rating={MediaData[2][6].UserRating}
                  year={MediaData[2][6].Year}/>
        <InfoCard media="Book" 
                  title={MediaData[2][7].Name} 
                  synopsis={MediaData[2][7].Synopsis} 
                  movieposter={MediaData[2][7].Poster}
                  genre={MediaData[2][7].Genre}
                  rating={MediaData[2][7].UserRating}
                  year={MediaData[2][7].Year}/>
        <InfoCard media="Book" 
                  title={MediaData[2][8].Name} 
                  synopsis={MediaData[2][8].Synopsis} 
                  movieposter={MediaData[2][8].Poster}
                  genre={MediaData[2][8].Genre}
                  rating={MediaData[2][8].UserRating}
                  year={MediaData[2][8].Year}/>
        <InfoCard media="Book" 
                  title={MediaData[2][9].Name} 
                  synopsis={MediaData[2][9].Synopsis} 
                  movieposter={MediaData[2][9].Poster}
                  genre={MediaData[2][9].Genre}
                  rating={MediaData[2][9].UserRating}
                  year={MediaData[2][9].Year}/>
      </div>
    )
  }