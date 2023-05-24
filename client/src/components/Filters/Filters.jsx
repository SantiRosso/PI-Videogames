import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, getFilters } from "../../redux/actions";
//styles
import s from "./Filters.module.css";
import "./genreA.css";

const Filters = ({setPage, genreA, setGenreA, setInput, handleRating, handleSort, handleReset }) => {
    const genres = useSelector((state) => state.genres)
    const dispatch = useDispatch();
    //filtros combinados
    const [filters, setFilters] = useState({
        genre: "",
        apiODb: ""
    })
    
    useEffect(() => {
        if(!genres.length)
        dispatch(getGenres())
        dispatch(getFilters(filters))
    },[dispatch, genres, filters])


    function handleClickSwitch(e) {
        setFilters({
            ...filters,
            apiODb: e.target.value
        })
        setInput(1)
        setPage(1)
    }

    function handleClick(e) {
        setFilters({
            ...filters,
            genre: e.target.value
        })
        setGenreA(e.target.value)
        setInput(1)
        setPage(1)
    }

    return(
        <div>
            <h3 className={s.subtitle}>Genres</h3>
            {/* <div className={s.genres}>
                <select onChange={handleClick} className={s.selectGenres}>
                    {
                        genres?.map((e,i) => {
                            return(
                                <option value={e.name} >{e.name}</option>                        
                            )
                        })
                    }
                </select>
                
            </div> */}
            <div className={s.divGenres}>
                <div className={s.genres}>
                    {
                        genres?.map((e,i) => {
                            return(
                                <button key={i} className={e.name === genreA ? "genreA" : "genre"} value={e.name} onClick={handleClick}>{e.name}</button>                           
                            )
                        })
                    }
                </div>
            </div>
            <div className={s.subDiv}>
                <button onClick={handleClickSwitch} className={s.apidb} value="api">Games API</button>
                <button onClick={handleClickSwitch} className={s.apidb} value="db">Created games</button>
            </div>
            <h3 className={s.order}>Order by</h3>
            <div className={s.orderDiv}>
                <select className={s.select} name="Sort" onChange={handleSort}>
                    <option value="sort">Alphabet</option>
                    <option value="asc">A-Z</option>
                    <option value="des">Z-A</option>
                </select>
                <select className={s.select} name="Rating" onChange={handleRating}>
                    <option value="rating">Rating</option>
                    <option value="men">Minor-Major</option>
                    <option value="may">Major-Minor</option>
                </select>
            </div>
            <div className={s.divReset}>
                <button className={s.reset} onClick={handleReset}>Reset filters</button>
            </div>         
        </div>
    )
}

export default Filters;
