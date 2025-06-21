import React from "react";
import { Link } from 'react-router-dom';

const CardMovie = ({ mov }) => {
  return (
    <>
    <div className=" col-md-3 my-2 p-0">
      <Link to={`/movie/${mov.id}`}>
        <div className="card m-2">
          <img src={`https://image.tmdb.org/t/p/w500/` + mov.poster_path} className="card__image" alt="hu" />
          <div className="card__overlay">
            <div className="overlay__text text-center w-100 p-2">
              <p>اسم الفيلم : {mov.original_title}</p>
              <p>تاريخ الاصدار:{mov.release_date}</p>
              <p>عدد المقيمين: {mov.vote_count}</p>
              <p>التقييم:{mov.vote_average} </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
    </>
  );
};

export default CardMovie;
