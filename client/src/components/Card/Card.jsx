import React from "react";
import s from "./Card.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { deleteVideogame, getAllVideogames } from "../../redux/actions";
import { showMessage } from "../../showMessage";


const Card = ({ name, img, genres, id, game }) => {
    
    const dispatch = useDispatch()

    const handleDelete = async () => {
        if(window.localStorage.getItem("token")){
            await axios.delete(`/videogame/${id}`)
            dispatch(deleteVideogame(id))
            dispatch(getAllVideogames())
        }else{
            showMessage("Login or register", "error")
        }
    }

    return (
        <div className={s.container}>
            <span className={s.button} hidden={!game.created} onClick={handleDelete}>X</span>
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
            <span className={s.edit} hidden={!game.created}>Edit</span>
            </Link>
        </div>
    )
}

export default Card;