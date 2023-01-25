import React from "react";
import s from "./Card.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getAllVideogames } from "../../redux/actions";


const Card = ({ name, img, genres, id, game, update, setUpdate }) => {
    
    const dispatch = useDispatch()

    const handleDelete = async () => {
        console.log("handle", id)
        await axios.delete(`/videogame/${id}`)
        dispatch(getAllVideogames());
    }

    return (
        <div className={s.container}>
            <button className={s.button} hidden={!game.created} onClick={handleDelete}>X</button>
            <Link className={s.link} to={`/details/${id}`}>
                <img src={img} alt={name} className={s.img}/>
                <h3 className={s.name}>{name}</h3>
                <div> 
                {   
                    genres.length > 7 ? 
                    genres?.slice(0,7).map((e) => (<div className={s.genres}><span key={e+id}>{e}</span></div>)) 
                    : genres?.map((e) => (<div className={s.genres}><span key={e+id}>{e}</span></div>))
                } 
                </div>    
            </Link>
        </div>
    )
}

export default Card;