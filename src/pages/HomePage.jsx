import axios from "axios"
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";


export default function HomePage() {

  const [movies, setMovies] = useState([]);

  const fetchIndex = () => {
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

  



  useEffect(fetchIndex, [])

  return (
    <>
      <h1 className="text-danger mt-4">Films</h1>
      <div className="row row-cols-3">
        {renderMovie()}
      </div>
    </>
  );
}