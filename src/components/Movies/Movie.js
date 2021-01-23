import React from 'react';


export default function Movie(props){
    return(
        <div className='movie' onClick={() => props.deleteMovie(props.movie)}>
            <h1>{props.movie.name}</h1>
            <h3>{props.movie.rating}</h3>
        </div>
    );
}