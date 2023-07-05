import { useState } from "react";
//styles
import s from "./Drawer2.module.css";
import { Link } from "react-router-dom";
import Filters from "../Filters/Filters";
import Pagination from "../Pagination/Pagination";
import Footer from "../Footer/Footer";

const Drawer2 = ({setPage, genreA, setGenreA, setInput, handleRating, handleSort, handleReset, input, page, max}) => {

    const [drawer, setDrawer] = useState(false)

    const handleClickDrawer = () => {
        setDrawer(!drawer)
    }

    return(
        <div>
            {
                !drawer &&
                <button className={s.button} onClick={handleClickDrawer}>{"<"}</button>
            }
            {
                drawer && 
                <div className={s.containter}>
                    {/* <h1 className={s.title}>DARK/LIGHT</h1> */}
                    <button className={s.x} onClick={handleClickDrawer}>X</button>
                    <div className={s.divLink}>
                        <Link to="/about">
                            <button className={s.link}>About</button>
                        </Link>
                        <Link to="/create">
                            <button className={s.link}>Create Videogame</button> 
                        </Link>
                    </div>
                    <Filters setPage={setPage} genreA={genreA} setGenreA={setGenreA} setInput={setInput} handleRating={handleRating} handleSort={handleSort} handleReset={handleReset}/>
                    <Pagination input={input} setInput={setInput} page={page} setPage={setPage} max={max}/>            
                    <Footer/>          
                </div>
            }
        </div>
    )
}

export default Drawer2;