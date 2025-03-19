import { Link } from 'react-router-dom'


export default function MovieCard({ movie }) {

    const { id, title, director, genre, abstract, image } = movie

    return (
        <>
            <div className="card mb-4">
                <img src={image} alt={title} />
                <div className="card-body">
                    <h3 className="card-title">{title}</h3>
                    <h5>{director}</h5>
                    <span>
                        {genre} 
                    </span>
                    <p>
                        {abstract}
                    </p>
                    <Link to={`/movies/${id}`} className="btn btn-danger">
                        Read More
                    </Link>
                </div>
            </div>
        </>
    )
}