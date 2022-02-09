import React, { Component } from 'react';
import './Favourites.css'
import { movies } from './getMovies';
export default class Favourites extends Component {
    constructor(){
        super();
        this.state={
            genres:[],
            currGenre:'All Genres'
        }
    }
    render() {
            const movie = movies.results;
            let genreids = {28: 'Action'          ,12: 'Adventure'       ,16: 'Animation'       ,35: 'Comedy'          ,80: 'Crime'           ,99: 'Documentary'     ,18: 'Drama'           ,10751: 'Family'          ,14: 'Fantasy'         ,36: 'History'         ,27: 'Horror'          ,10402: 'Music'           ,9648: 'Mystery'         ,10749: 'Romance'         ,878: 'Science'          ,10770: 'TV'             ,53: 'Thriller'          ,10752: 'War'            ,37: 'Western'         , };
            let temp=[];
            movies.results.forEach((movie)=>{
                if(!temp.includes(genreids[movie.genre_ids[0]])){
                    temp.push(genreids[movie.genre_ids[0]]);
                }
            })
            temp.unshift("All Genres");
            // this.setState({
            //     genres:[...temp]
            // })
            console.log(temp);
            return(
             <div>
            <div className='row favourites-page'>
                <div className='col-3 genres-list'>
                    <ul class="list-group">
                        {
                            temp.map((genre)=>(
                                this.state.currGenre == genre ? 
                                <li class="list-group-item winner">{genre}</li>:
                                <li class="list-group-item loser">{genre}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className='col'>
                        <div className='row'>
                            <div className='col'>
                                <input type="text" className='input-group-text' placeholder='Search'></input>
                            </div>
                            <div className='col'>
                                <input type="number" className='input-group-text' placeholder='Rows Count'></input>
                            </div>
                        </div>
                        <div className='row'>
                            <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Title</th>
                                            <th scope="col">Genres</th>
                                            <th scope="col">Popularity</th>
                                            <th scope="col">Rating</th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            movie.map((movie)=>(
                                                <tr>
                                                    <td><img className='fav-img' src={`https://www.themoviedb.org/t/p/original${movie.backdrop_path}`} alt=''></img> {movie.original_title}</td>
                                                    <td>{genreids[movie.genre_ids[0]]}</td>
                                                    <td>{movie.popularity}</td>
                                                    <td>{movie.vote_average}</td>
                                                    <td><button type="button" class="btn btn-danger">Delete</button></td>
                                                </tr>
                                            ))
                                        }
                                        
                                    </tbody>
                            </table>
                        </div>   
                     <div className='row last-pagination'>
                        <nav aria-label="Page navigation example">
                            <ul class="pagination">
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                            </ul>
                        </nav>
                     </div>
                </div>
            </div>
        </div>
    )                
  }
}
