import React, {Component} from 'react';
import './Navbar.css';

export default class Navbar extends Component{
    render(){
        return(
            <div className='navbar'>
                <h1>Movies App</h1>
                <h3 className='fav-heading'>Favourites</h3>
            </div>
        )
    }
}