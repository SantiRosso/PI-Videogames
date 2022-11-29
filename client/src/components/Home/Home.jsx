import React, { useEffect, useState } from "react";
import s from "./Home.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getAllVideogames, getRating, getSort, resetHome } from "../../redux/actions";
import Card from "../Card/Card";
import Aside from "../Aside/Aside";
import Nav from "../Nav/Nav";
import Pagination from "../Pagination/Pagination";
import Error from "../Error/Error";
import Loader from "../Loader/Loader";

const Home = () => {
    const dispatch = useDispatch();
    const videogames = useSelector(state => state.filtered);
    const error = useSelector(state => state.error);

    useEffect(()=> {
        if(!videogames.length)
        dispatch(getAllVideogames());
    },[dispatch]);

    //Filter active
    const [genreA, setGenreA] = useState("");

    //PAGINATION 
    const [input, setInput] = useState(1);
    const [page, setPage] = useState(1);
    const [perPage] = useState(15);

    let max = Math.ceil(videogames.length / perPage);

    //OrderBy
    const [order, setOrder] = useState(true)

    const handleSort = (e) => {
        dispatch(getSort(e.target.value)) 
        setOrder(!order)
    }

    const handleRating = (e) => {
        dispatch(getRating(e.target.value))
        setOrder(!order)
    }

    //reset filter
    const handleReset = () => {
        dispatch(resetHome());
        setGenreA("");
    }
    
    return (
        <div className={s.home}>
            <Nav setInput={setInput} setPage={setPage} genreA={genreA} setGenreA={setGenreA}/>
            {
                videogames.length ?
                
                <div className={s.containerGrid}>
                    <div className={s.grid}>
                    {   
                        videogames?.slice((page -1) * perPage, (page -1) * perPage + perPage)
                        .map((e) => {
                            return(
                                <Card key={e.id} id={e.id} name={e.name} img={e.img} genres={e.genres}/>
                            )
                        })
                    }
                    </div>
                    <div className={s.aside}>
                        <Aside setPage={setPage} setInput={setInput} genreA={genreA} setGenreA={setGenreA}/>
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
                        <Pagination input={input} setInput={setInput} page={page} setPage={setPage} max={max}/>
                    </div>
                </div>
                
                : error ? <Error genreA={genreA} setGenreA={setGenreA}/> : <Loader/>
            }
        </div>
    )
}

export default Home;