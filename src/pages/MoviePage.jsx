import axios from "axios"
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import ReviewCard from "../components/ReviewCard"


export default function MoviePage() {

    const { id } = useParams()

    const [movie, setMovie] = useState({})

    const fecthShow = () => {
        axios.get(`http://localhost:3000/movies/${id}`)
            .then((res) => setMovie(res.data))
            .catch((error) => console.log(error))
    }

    useEffect(fecthShow, [id])

    const renderMovie = () => {
        return movie.reviews?.map((review) => {
            return <ReviewCard key={review.id} review={review} />;
        })
    }

    const navigate = useNavigate();


    return (
        <>
        <div className="container mt-5">
            <div className="col-4">

            <div className="card mb-4">
                <img src={movie?.image} alt={movie?.title} />
                <div className="card-body">
                    <h5 className="card-title">{movie?.title}</h5>
                    <span>
                        {movie?.genre}
                    </span>
                    <p>
                        {movie?.abstract}
                    </p>
                    <button className="btn btn-primary" onClick={() => navigate(-1)}>
                        Torna indietro
                    </button>
                </div>
            </div>
            </div>

        </div>
            {/* qui andrà la pagina di dettaglio del prodotto */}

            <section>
                <h4>Our community reviews</h4>
                {renderMovie()}
            </section>
        </>
    )
}    