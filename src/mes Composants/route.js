import React from 'react';
import MovieDesc from './movieDesc';
import { useParams } from 'react-router-dom';
export default function Desc({movies}) {
    const {name} = useParams();
     let monFilm = movies.filter(elm=>elm.title===name);
    function Films(){
        return monFilm.map((movie) =>{
            return <MovieDesc key={movie.id} titre={movie.title} description={movie.description} rating={movie.rating} urlV={movie.urlV} />
        })
    }
  return (
    <div>
      <Films/>
    </div>
  )
}
