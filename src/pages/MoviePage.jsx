import axios from "axios"
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import ReviewCard from "../components/ReviewCard"
import ReviewForm from "../components/ReviewForm"


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

    const navigate = useNavigate()

    const deleteCard = () => {
        axios.delete(`http://localhost:3000/movies/${id}`)
        .then(navigate("/"))

    }


    return (
        <>
        <div className="container mt-5">
            <div className="col-4">

            <div className="card mb-4">
                <img src={movie?.image} alt={movie?.title} className="image-fluid" />
                <div className="card-body">
                    <h5 className="card-title">{movie?.title}</h5>
                    <span>
                        {movie?.genre}
                    </span>
                    <p>
                        {movie?.abstract}
                    </p>
                    <button onClick={deleteCard} className="btn btn-danger float-end">Delete</button>
                    <button className="btn btn-warning" onClick={() => navigate(-1)}>
                        Back
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

            <section>
                {movie?.id && <ReviewForm movie_id={movie.id} fecthShow={fecthShow} />}
            </section>
        </>
    )
}    