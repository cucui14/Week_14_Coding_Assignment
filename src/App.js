//importing app.css stylesheet
import './App.css';
//importing MovieList component
import MovieList from '../src/components/MovieList.jsx';

//allMovies array of objects
let allMovies = [
  {
    moviename: 'Harry Potter and The Deathly Hallows Part 2',
    movieposter:
      'https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg',
    reviews: [
      {
        parentid: '1',
        id: '1',
        name: 'Angel Pureco',
        review: 'This is a really good movie!',
        starsgiven: 2,
      },
      {
        parentId: '1',
        id: '2',
        name: 'Lizz Gaxiola',
        review: 'This movie was fine!',
        starsgiven: 1,
      },
      {
        parentId: '1',
        id: '3',
        name: 'Lexi Bermudez',
        review: 'I liked this movie!',
        starsgiven: 3,
      },
    ],
    movieRating: '3',
    movieId: '1',
  },
  {
    moviename: 'Avatar',
    movieposter:
      'https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_.jpg',
    reviews: [
      {
        parentid: '2',
        id: '1',
        name: 'Angel Pureco',
        review: 'This movie was beautiful!',
        starsgiven: 3,
      },
      {
        parentId: '2',
        id: '2',
        name: 'Lizz Gaxiola',
        review: 'I loved this movie!',
        starsgiven: 5,
      },
    ],
    movieRating: '4',
    movieId: '2',
  },
  {
    moviename: 'Avengers',
    movieposter:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
    reviews: [
      {
        parentid: '3',
        id: '1',
        name: 'Angel Pureco',
        review: 'So much action!',
        starsgiven: 4,
      },
      {
        parentId: '3',
        id: '2',
        name: 'Lizz Gaxiola',
        review: 'Good movie but lacking in some parts.',
        starsgiven: 2,
      },
    ],
    movieRating: '4',
    movieId: '3',
  },
];

//function component named App
function App() {
  //returns a div with the MovieList component in the div.
  //Passing allMovies as a prop named movies
  return (
    <div>
      <MovieList movies={allMovies} />
    </div>
  );
}

//exporting function component App
export default App;
