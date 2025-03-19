import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function CreateMoviePage() {
    const initialData = {
        title: "",
        director: "",
        genre: "",
        release_year: undefined,
        abstract: "",
        image: undefined
    };

    const navigate = useNavigate()

    const [formData, setFormData] = useState(initialData)

    const setFieldValue = (e) => {
        const { name, value } = e.target

        if (name === "image") {
            setFormData({
                ...formData,
                image: e.target.files[0]
            })
        } else {
            setFormData({
                ...formData,
                [name]: value
            })
        }
    }

    const handleSubmit = () => {

        axios.post('http://localhost:3000/movies', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
            .then(() => {
                navigate("/")
            })
            .catch((err) => console.log(err))
    }
    return (
        <>
            <h1>Add Movie</h1>

            <section id="book-form">
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label>Title:</label>
                        <input
                            className="form-control"
                            name="title"
                            type="text"
                            value={formData.title}
                            onChange={setFieldValue}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label>Director:</label>
                        <input
                            className="form-control"
                            name="director"
                            type="text"
                            value={formData.director}
                            onChange={setFieldValue}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label>Genre:</label>
                        <input
                            className="form-control"
                            name="genre"
                            type="text"
                            value={formData.genre}
                            onChange={setFieldValue}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label>Release Year:</label>
                        <input
                            className="form-control"
                            name="release_year"
                            type="text"
                            value={formData.release_year}
                            onChange={setFieldValue}
                            required
                        />
                    </div>
                    
                    <div className="mb-4">
                        <label>Image:</label>
                        <input
                            className="form-control"
                            name="image"
                            type="file"
                            onChange={setFieldValue}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label>Abstract:</label>
                        <textarea
                            value={formData.abstract}
                            className="form-control"
                            name="abstract"
                            onChange={setFieldValue}
                            required
                        ></textarea>
                    </div>
                    <div className="border-top mb-3 pt-3 d-flex justify-content-between">
                        <Link className="btn btn-secondary" to="/">
                            Back
                        </Link>
                        <button className="btn btn-danger" type="submit">
                            Add Movie
                        </button>
                    </div>
                </form>
            </section>
        </>
    );

}

