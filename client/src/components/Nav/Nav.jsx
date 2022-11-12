import React from 'react';
import { Link } from 'react-router-dom';
import s from './Nav.module.css';
import Search from '../Search/Search';

const Nav  = () => {
    return (
        <nav className={s.container}>
            <Link to='/videogames'>
                <h1 className={s.home}>Videogames</h1>
            </Link>
            <Search/>
            <Link to='/create'>
               <button className={s.boton}>Create Videogame</button> 
            </Link>
        </nav>
    )
}

export default Nav;