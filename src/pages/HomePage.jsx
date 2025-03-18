import axios from "axios"
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";


export default function HomePage() {

  const [movies, setMovies] = useState([]);

  const fetchShow = () => {
    axios.get("http://localhost:3000/movies")
      .then((res) => {
        setMovies(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const renderMovie = () => {
    return movies.map((movie) => {
        return (
          <div className="col" key={movie.id}>
            <MovieCard movie={movie} />
          </div>
        )
      })
  }



  useEffect(fetchShow, [])

  return (
    <>
      <h1 className="text-primary">Films</h1>
      <h2>Qui andranno tutti i film</h2>
      <div className="row row-cols-3">
       {renderMovie()}
      </div>
    </>
  );
}