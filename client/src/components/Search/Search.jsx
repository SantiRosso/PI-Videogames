import React from "react";
import s from "./Search.module.css";
import { useState } from "react";
import { getByName } from "../../redux/actions";
import { useDispatch } from "react-redux";

const Search = ({ setPage, setInput }) => {

    const dispatch = useDispatch();

    const [inputS, setInputS] = useState({
        search: ''
    })

    const handleChange = (e) => {
        setInputS({
        [e.target.name]: e.target.value
      });
  }

  const handleClick = async () => {
    await dispatch(getByName(inputS.search))
    // await dispatch(getByGenre(inputS.search))
    setInput(1)
    setPage(1)
}

    return(
        <div className={s.container}>
            <input type="text" 
            name="search" 
            placeholder="Videogame..." 
            className={s.input} 
            value={inputS.search} 
            onChange={handleChange}/>
            <button className={s.boton} onClick={handleClick}>SEARCH</button>
        </div>
    )
}

export default Search;