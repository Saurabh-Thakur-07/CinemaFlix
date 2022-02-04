import {movies} from './getMovies';
import './Banner.css';
import React, { Component } from 'react';

export default class Banner extends Component {
  render() {
      let movie = movies.results[0];
      console.log(movie);
    return (

        <div className="banner-card">
        <img src={`https://www.themoviedb.org/t/p/original${movie.backdrop_path}`} className="card-img-top banner-img" alt="..." />
                <h1 className="card-title banner-title">{movie.original_title}</h1>
                <p className="card-text banner-text">{movie.overview}</p>                
        </div>
    );
  }
}
