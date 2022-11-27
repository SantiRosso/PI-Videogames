import React from "react";
import s from "./Card.module.css";
import { Link } from "react-router-dom";


const Card = ({ name, img, genres, id }) => {

    return (
        <Link to={`/details/${id}`}>
            <div className={s.container}>
                <img src={img} alt={name} className={s.img}/>
                    <h3 className={s.name}>{name}</h3>
                <div> 
                    { genres?.map((e) => (<p className={s.genres} key={e+id}>{e}</p>)) } 
                </div>    
            </div>
        </Link>
    )
}

export default Card;