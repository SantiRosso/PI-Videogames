import React from "react";
import { Link } from "react-router-dom";
import s from "./Nav.module.css";
import Search from "../Search/Search";
import { useDispatch } from "react-redux";
import { resetHome, setError } from "../../redux/actions";
import Modals from "../Modals/LoginModals.js";
import Drawer from "../Drawer/Drawer";

const Nav  = ({ setGenreA, setPage, setInput}) => {
    
    const width = window.innerWidth
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(resetHome());
        dispatch(setError())
        setGenreA("")
    }

    return (
        <div>
            {
                (width > 800) ? 
                <nav className={s.container}>
                    <Link to="/videogames">
                        <h1 className={s.home} onClick={handleClick}>Videogames</h1>
                    </Link>
                    <Search setInput={setInput} setPage={setPage}/>
                    <Modals/>
                </nav>
                :
                <div className={s.container}>
                    <Link to="/videogames">
                        <h1 className={s.home} onClick={handleClick}>Videogames</h1>
                    </Link>
                    <Drawer setInput={setInput} setPage={setPage}/>
                </div>
            }
        </div>
    )
}

export default Nav;