import React from "react";
import s from "./Card.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { deleteVideogame } from "../../redux/actions";
import { useAuth } from "../context/authContext.js";
import { showMessage } from "../../showMessage";


const Card = ({ name, img, genres, id, game }) => {
    
    const dispatch = useDispatch()
    const {user} = useAuth();

    const handleDelete = async () => {
        if(user){
            await axios.delete(`/videogame/${id}`)
            dispatch(deleteVideogame(id))
        }else{
            showMessage("Login or register", "error")
        }
    }

    return (
        <div className={s.container}>
            <button className={s.button} hidden={!game.created} onClick={handleDelete}>X</button>
            <Link className={s.link} to={`/details/${id}`}>
                <img src={img} alt={name} className={s.img}/>
                <h3 className={s.name}>{name}</h3>
                <div> 
                {   
                    genres.length > 3 ? 
                    genres?.slice(0,3).map((e) => (<div className={s.genres}><span key={e+id}>{e}</span></div>)) 
                    : genres?.map((e) => (<div className={s.genres}><span key={e+id}>{e}</span></div>))
                } 
                </div>    
            </Link>
            <Link to={`/edit/${id}`}>
            <button className={s.edit} hidden={!game.created}>Edit</button>
            </Link>
        </div>
    )
}

export default Card;