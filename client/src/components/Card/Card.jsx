import React from 'react';
import s from './Card.module.css';
import { Link } from 'react-router-dom';


const Card = ({ name, img, genres, id }) => {

    return (
        <div className={s.container}>
            <img src={img} alt={name} className={s.img}/>
            <Link to={`/details/${id}`}>
                <h3 className={s.name}>{name}</h3>
            </Link>
            <div> 
                { genres?.map((e) => (<p key={e+id}>{e}</p>)) } 
            </div>    
        </div>
    )
}

export default Card;