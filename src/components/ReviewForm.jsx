import axios from "axios"
import { useState } from "react"

export default function ReviewForm({ movie_id, fecthShow }) {

    const endpoint = `http://localhost:3000/movies/${movie_id}/reviews`

    const initialValue = {

        name: "",
        text: "",
        vote: undefined
    }

    const [formData, setFormData] = useState(initialValue);

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post(endpoint, formData, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(() => {
                setFormData(initialValue)
                //ricaricare le recensioni da zero 
                fecthShow()
            })
            .catch(err => console.log(err))
    }

    const setFieldValue = (e) => {

        const { name, value } = e.target

        console.log(e.target)

        setFormData({
            ...formData,
            [name]: value
        })

    }

    return (
        <div className="card p-4">
            <h3>Add Review</h3>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input type="text" name="name" className="form-control" value={formData.name} onChange={setFieldValue} required />
                    <label>Text</label>
                    <input type="text" name="text" className="form-control" value={formData.text} onChange={setFieldValue} required />
                    <label>Vote</label>
                    <input type="number" min={1} max={5} name="vote" className="form-control" value={formData.vote} onChange={setFieldValue} required />
                    <div>
                        <button type="submit" className="btn btn-primary mt-4">
                            Create Review
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )

}