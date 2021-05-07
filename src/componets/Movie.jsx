import React from 'react';
import DayJS from 'react-dayjs';

const Movie = ({movie}) => {
    const IMAGES_PATH = "https://image.tmdb.org/t/p/original";
    return (
        <div class="card col-sm-6 col-md-4 col-lg-2 m-2">
            <img class="card-img-top" 
            src={IMAGES_PATH+movie.poster_path} alt={movie.title}
            data-toggle="modal" data-target="#exampleModal"
            />
            <div class="card-body">
                <h4 class="card-title ">{movie.title} (<DayJS format="YYYY">{movie.release_date}</DayJS>)</h4>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 metadata">
                            <i class="fa fa-star" aria-hidden="true"></i> 
                            <p>{movie.vote_average}/10</p>
                        </div>
                        <p class="card-text">{movie.overview.substr(0,160)}...</p>
                    </div>
                </div> 
                
            </div>
        </div>
    )
}


export default Movie;

/*
Género, debajo de VOTOS
 <div class="col-sm-8 metadata">Adventure. Sci-Fi</div>

*/