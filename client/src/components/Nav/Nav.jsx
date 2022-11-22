import React from 'react';
import { Link } from 'react-router-dom';
import s from './Nav.module.css';
import Search from '../Search/Search';
import { useDispatch } from 'react-redux';
import { getAllVideogames, setError } from '../../redux/actions';

const Nav  = () => {

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(getAllVideogames());
        dispatch(setError())
    }

    return (
        <nav className={s.container}>
            <Link to='/videogames'>
                <h1 className={s.home} onClick={handleClick}>Videogames</h1>
            </Link>
            <Search/>
            <Link to='/create'>
               <button className={s.boton}>Create Videogame</button> 
            </Link>
        </nav>
    )
}

export default Nav;