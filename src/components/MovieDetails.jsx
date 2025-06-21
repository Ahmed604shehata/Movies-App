import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const MovieDetails = () => {
    
    const param = useParams();
    const [movie, setMovie] = useState([])

    //get  movie by details 
    const getMovieDetails = async () => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=52ef927bbeb21980cd91386a29403c78&language=ar`)
        setMovie(res.data)
    }

    // async function getMovieDetails(id){
    //    let {res} = await axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=52ef927bbeb21980cd91386a29403c78&language=ar`)
    //    setMovie(res.data)
    // }

    useEffect(() => {
        getMovieDetails();
    }, [])
    return (
        <>
        <div className="row bg-dark">
            <div className="col-md-12 d-flex flex-column ">
                    <img
                        className="img-movie w-30 my-5"
                        src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path}
                    alt="ascad" />
                    <div className="justify-content-center text-center  mx-auto">
                        <p className="card-text-details">
                            اسم الفيلم: {movie.title}
                        </p>
                        <p className="card-text-details border-bottom">
                            تاريخ الفيلم :{movie.release_date}
                        </p>
                        <p className="card-text-details border-bottom">
                            عدد المقيمين : {movie.vote_count}
                        </p>
                        <p className="card-text-details border-bottom">
                            التقييم :{movie.vote_average}
                        </p>
                    </div>
            <div className="row justify-content-center">
                    <div className="col-md-12 col-xs-12 col-sm-12 mt-1">
                    <div className="card-story  d-flex justify-content-center flex-column align-items-center">
                        <p className="card-text-title">القصة</p>
                        <h2 className="card-text-story">{movie.overview}</h2>
                    </div>
                </div>
                <div className=" col-md-12 my-5 d-flex justify-content-center ">
                    <Link to="/">
                        <button
                            style={{ backgroundColor: "#18191d", border: "none" }}
                            className="btn btn-primary mx-2">
                            عوده للرئيسيه
                        </button>
                    </Link>
                    <a href={movie.homepage} >
                        <button
                            style={{ backgroundColor: "#18191d", border: "none" }}
                            className="btn btn-primary">
                            مشاهده الفيلم
                        </button>
                    </a>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}
export default MovieDetails;
