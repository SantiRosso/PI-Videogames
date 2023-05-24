import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllVideogames, getRating, getSort, resetHome } from "../../redux/actions";

//styles
import s from "./Home.module.css";

//components
import Card from "../Card/Card";
import Aside from "../Aside/Aside";
import Nav from "../Nav/Nav";
import Error from "../Error/Error";
import Loader from "../Loader/Loader";

//firebase
import { useAuth } from "../context/authContext.js";

const Home = () => {
    const dispatch = useDispatch();
    const videogames = useSelector(state => state.filtered);
    const error = useSelector(state => state.error);
    const authContext = useAuth();

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
        console.log(order)
    }

    //reset filter
    const handleReset = () => {
        dispatch(resetHome());
        setGenreA("");
        document.getElementById("alphabet").selected = "selected"
        document.getElementById("rating").selected = "selected"
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
                                <Card key={e.id} id={e.id} name={e.name} img={e.img} genres={e.genres} game={e}/>
                            )
                        })
                    }
                    </div>
                    <div className={s.aside}>
                        <Aside setPage={setPage} setInput={setInput} genreA={genreA} setGenreA={setGenreA} handleRating={handleRating} handleSort={handleSort} handleReset={handleReset} input={input} page={page} max={max}/>
                    </div>
                </div>
                
                : error ? <Error genreA={genreA} setGenreA={setGenreA}/> : <Loader/>
            }
        </div>
    )
}

export default Home;