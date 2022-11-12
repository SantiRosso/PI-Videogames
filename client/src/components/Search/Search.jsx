import React from 'react';
import s from './Search.module.css';
import { useState } from 'react';
import { getByName } from '../../redux/actions';

const Search = () => {

    const [input, setInput] = useState({
        search: ''
    })

    const handleChange = function(e) {
        setInput({
        [e.target.name]: e.target.value
      });
  }

  const handleClick = () => {
    getByName(input.search)
}

    return(
        <div className={s.container}>
            <input type="text" name="search" placeholder='Videogame...' className={s.input} onChange={handleChange}/>
            <button className={s.boton} onClick={handleClick}>SEARCH</button>
        </div>
    )
}

export default Search;