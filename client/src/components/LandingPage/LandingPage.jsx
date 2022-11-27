import React from "react";
import s from "./LandingPage.module.css";
import { Link } from "react-router-dom";

const LandingPage  = () => {
    return (
        <div className={s.container}>
            <img className={s.img} src="landing1.jpg" alt=''/>
            <Link to="/videogames">
                <button className={s.boton}>PRESS START</button>
                </Link>
        </div>
    )
}

export default LandingPage;