import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default class Navbar extends Component{
    render(){
        return(
            <div className='navbar'>
                <Link to="/" className='links'><h1>Movies App</h1></Link>
                <Link to="/favourites" className='links'><h3 className='fav-heading'>Favourites</h3></Link>
            </div>
        )
    }
}