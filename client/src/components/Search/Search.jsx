import React from 'react';
import s from './Search.module.css';
import { useState } from 'react';
import { getAllVideogames, getByName } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Search = () => {

    const dispatch = useDispatch();

    const [input, setInput] = useState({
        search: ''
    })

    const handleChange = (e) => {
        setInput({
        [e.target.name]: e.target.value
      });
  }

  const handleClick = () => {
    dispatch(getByName(input.search))
}

    return(
        <div className={s.container}>
            <input type="text" 
            name="search" 
            placeholder='Videogame...' 
            className={s.input} 
            value={input.search} 
            onChange={handleChange}/>
            <button className={s.boton} onClick={handleClick}>SEARCH</button>
        </div>
    )
}

export default Search;