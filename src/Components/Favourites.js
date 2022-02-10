import React, { Component } from 'react';
import './Favourites.css'
    export default class Favourites extends Component {
    constructor(){
        super();
        this.state={
            genres:[],
            currGenre:'All Genres',
            movies:[]
        }
    }
    componentDidMount(){
        let genreids = {28: 'Action'          ,12: 'Adventure'       ,16: 'Animation'       ,35: 'Comedy'          ,80: 'Crime'           ,99: 'Documentary'     ,18: 'Drama'           ,10751: 'Family'          ,14: 'Fantasy'         ,36: 'History'         ,27: 'Horror'          ,10402: 'Music'           ,9648: 'Mystery'         ,10749: 'Romance'         ,878: 'Science'          ,10770: 'TV'             ,53: 'Thriller'          ,10752: 'War'            ,37: 'Western'         , };
        let data = JSON.parse(localStorage.getItem('movies') || '[]');
        let temp = [];
        data.forEach((movie)=>{
            if(!temp.includes(genreids[movie.genre_ids[0]]))
            {
                temp.push(genreids[movie.genre_ids[0]]);
            }
        })
        temp.unshift('All Genres');
        // console.log(temp);
        this.setState({
            genres:[...temp],
            movies:[...data]
        })
        // console.log(this.state.genres);
    }
    handleGenreChange=(genre)=>{
        this.setState({
            currGenre: genre
        })
    }
    render() {
            let genreids = {28: 'Action'          ,12: 'Adventure'       ,16: 'Animation'       ,35: 'Comedy'          ,80: 'Crime'           ,99: 'Documentary'     ,18: 'Drama'           ,10751: 'Family'          ,14: 'Fantasy'         ,36: 'History'         ,27: 'Horror'          ,10402: 'Music'           ,9648: 'Mystery'         ,10749: 'Romance'         ,878: 'Science'          ,10770: 'TV'             ,53: 'Thriller'          ,10752: 'War'            ,37: 'Western'         , };
            console.log(this.state.currGenre);
            let filterArr = this.state.movies;
            if(this.state.currGenre!="All Genres"){
                filterArr = this.state.movies.filter((movieObj)=>genreids[movieObj.genre_ids[0]]==this.state.currGenre)
            }
            // else{
            //     filterArr = this.state.movies.filter((movie)=>{
            //         genreids[movie.genre_ids[0]] == this.state.currGenre;
            //     })
            // }
            return(
             <div>
            <div className='row favourites-page'>
                <div className='col-3 genres-list'>
                    <ul class="list-group">
                        {
                            this.state.genres.map((genre)=>(
                                this.state.currGenre == genre ? 
                                <li class="list-group-item winner">{genre}</li>:
                                <li class="list-group-item loser" onClick={()=>this.handleGenreChange(genre)}>{genre}</li>
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
                                            filterArr.map((movie)=>(
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
    );             
  }
}
