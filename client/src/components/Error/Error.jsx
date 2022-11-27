import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { resetHome, setError } from "../../redux/actions";
import s from "./Error.module.css";
import img from "./Error-404.jpg";

const Error = ({ genreA, setGenreA}) => {

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setError())
        dispatch(resetHome())
        setGenreA("")
    }

    return(
        <div className={s.container}>
            <div className={s.divButton}>
            <Link to={"/videogames"}>
                <button className={s.button} onClick={handleClick}>BACK</button>
            </Link>
            </div>
            <div className={s.error}>
                <img src={img} alt="error 404 not found"/>
            </div>
        </div>
    )
}

export default Error;