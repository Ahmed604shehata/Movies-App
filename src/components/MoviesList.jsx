import React from "react";
import CardMovie from "./CardMovie";
import PaginationComponent from './Pagination';

const MoviesList = ({ movies, getPage, pageCount }) => {
  return (
    <>
    <div className="row pt-5 p-5 bg-dark">
      {movies.length >= 1 ? (movies.map((mov) => {
        return (<CardMovie key={mov.id} mov={mov} />)
      })) : <h2 className="text-center p-5">لا يوجد افلام...</h2>}

      {movies.length >= 1 ? (<PaginationComponent getPage={getPage} pageCount={pageCount} />) : null}

    </div>
    </>
  );
};

export default MoviesList;
