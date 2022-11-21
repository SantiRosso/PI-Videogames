import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getAllVideogames, setError } from "../../redux/actions";
import Nav from "../Nav/Nav";
import s from "./Error.module.css";

const Error = () => {

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setError())
        dispatch(getAllVideogames())
    }

    return(
        <div className={s.error}>
        <Nav/>
        <Link to={'/videogames'}>
        <button onClick={handleClick}>{'<'}</button>
        </Link>
        <h1>404 NOT FOUND.</h1>
        </div>
    )
}

export default Error;