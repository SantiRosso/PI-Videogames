import React, { useEffect, useState } from "react";
import s from "./Details.module.css";
import Nav from "../Nav/Nav";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../Loader/Loader";

const Details = () => {
    const {id} = useParams();
    const [detail, setDetail] = useState();

    useEffect(() => {
        axios.get(`http://localhost:3001/videogame/${id}`)
        .then(response => setDetail(response.data))
    },[id])

    return (  
        <div className={s.container}>
            <Nav/> 
            {
                detail ?
                <div>
                <h1 className={s.title}>Details</h1>
                <h2>{detail.name}</h2>
                <div className={s.grid}>
                    <img src={detail.img} alt={detail.name} className={s.img}/>                           
                    <div className={s.subGrid}>
                        <div>
                            <h2>Platorms: </h2>
                            {detail.platforms?.map((e) => {
                                return(
                                    <h4 className={s.info}>{e}</h4>
                                    )
                                })}
                        </div>
                        <div>
                            <h2>Genres: </h2>
                            {detail.genres?.map((e) => {
                                return(
                                    <h4 className={s.info}>{e}</h4>
                                    )
                                })}
                        </div>
                        <h2>Rating: <span className={s.info}>{detail.rating}</span></h2>
                        <h2>Released: <span className={s.info}>{detail.released}</span></h2>
                    </div>
                </div>
                <h2>Description: </h2>
                <h4 className={s.info2}>{detail.description?.split("<p>")
                .join("\n")
                .split("</p>")
                .join(" ")
                .split("<br />")
                .join("\n")
                }</h4> 
                </div>
                : <Loader/>
            } 
        </div>      
    )
}

export default Details;