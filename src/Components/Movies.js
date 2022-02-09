// import {movies} from './getMovies';
import React, { Component } from 'react';
import './Movies.css';
import axios from 'axios';

export default class Movies extends Component {
  constructor(){
      super();
      this.state={
            hover:'',
            parr:[1],
            currPage:1,
            movies:[]
      }
  }
  async componentDidMount(){
    let apiData = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=c262cf74415a9e86f35728d5318a2eeb&language=en-US&page=${this.state.currPage}`);
    // console.log(apiData.data);
    this.setState({
      movies: [...apiData.data.results]
    })
  }
  changeMovies=async()=>{
      let apiData = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=c262cf74415a9e86f35728d5318a2eeb&language=en-US&page=${this.state.currPage}`);
      // console.log(apiData.data);
      this.setState({
        movies: [...apiData.data.results]
      })
  }
  handleRight=()=>{
      let temparr =[];
      for(let i=1;i<=this.state.parr.length+1;i++){
        temparr.push(i);
      }
      // console.log(temparr);
      this.setState({
          parr:[...temparr],
          currPage:this.state.currPage+1
      },this.changeMovies)
  }
  handleLeft=()=>{
    if(this.state.currPage != 1){
        this.setState({
            currPage:this.state.currPage-1
        },this.changeMovies)
    }
  }
  handleClick=(value)=>{
    if(this.state.currPage != value){
      this.setState({
        currPage:value
      },this.changeMovies)
    }
  }
  render() {
      // let movie = movies.results;
    return( 
    <>
        {
            this.state.movies.length == 0 ?<div className="d-flex justify-content-center loader">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div> 
            : 
            <div>
                <h3 className='text-center heading'>Trending</h3>
                <div className='movie-list'>
                    {
                        this.state.movies.map((movie)=>(
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
                    <li className="page-item"><a className="page-link" onClick={this.handleLeft}>Previous</a></li>
                    {
                        this.state.parr.map((pageid)=>(
                          <li className="page-item"><a className="page-link" onClick={()=>this.handleClick(pageid)}>{pageid}</a></li>
                        ))
                    }
                    <li className="page-item"><a className="page-link" onClick={this.handleRight}>Next</a></li>
                  </ul>
                </nav>
            </div>
        }
    </>);
  }
}
