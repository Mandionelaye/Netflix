import React from 'react'
import MovieCard from './MovieCard';
import './movieCard.css';
export default function MovieListe({movies}) {
    function Film(){
        return movies.map((movie) =>{
            return (
                <MovieCard key={movie.id}
                title={movie.title} 
                posterURL={movie.posterURL} 
                rating={movie.rating} />
            );
        })
    }
  return (
    <div className='row justify-content-center d-flex'>
        <Film ></Film>
    </div>
  )
}
