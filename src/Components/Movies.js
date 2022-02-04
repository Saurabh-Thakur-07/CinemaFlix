import {movies} from './getMovies';
import React, { Component } from 'react';
import './Movies.css';

export default class Movies extends Component {
  constructor(){
      super();
      this.state={
            hover:'',
            parr:[1]
      }
  }
  render() {
      let movie = movies.results;
    return( 
    <>
        {
            movie.length == 0 ?<div className="d-flex justify-content-center loader">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div> 
            : 
            <div>
                <h3 className='text-center heading'>Trending</h3>
                <div className='movie-list'>
                    {
                        movie.map((movie)=>(
                            <div class="card movie-tile" onMouseEnter={()=>this.setState({hover:movie.id})} onMouseLeave={()=>this.setState({hover:''})}>
                            <img src={`https://www.themoviedb.org/t/p/original${movie.backdrop_path}`} className="card-img-top movie-img" alt=""/>
                            <div className="card-body movie-content">
                                <h5 className="card-title">{movie.original_title}</h5>
                                {
                                  this.state.hover == movie.id &&
                                  <a className="btn btn-primary">Add to Favourites</a>
                                }
                            </div>
                            </div>
                        ))
                    }
                </div>
                <nav aria-label="Page navigation example">
                  <ul className="pagination page-table">
                    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                    {
                        this.state.parr.map((pageid)=>(
                          <li className="page-item"><a className="page-link" href="#">{pageid}</a></li>
                        ))
                    }
                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                  </ul>
                </nav>
            </div>
        }
    </>);
  }
}
