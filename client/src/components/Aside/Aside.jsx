// styles
import s from "./Aside.module.css"; 
import Pagination from "../Pagination/Pagination";
import Footer from "../Footer/Footer";
import {Link} from "react-router-dom"
import Filters from "../Filters/Filters";
import Drawer2 from "../Drawer2/Drawer2";

const Aside = ({setPage, genreA, setGenreA, setInput, handleRating, handleSort, handleReset, input, page, max}) => {

    const width = window.innerWidth

    return(
        <div>
            {
                width > 800 ?
                <div className={s.containter}>
                    {/* <h1 className={s.title}>DARK/LIGHT</h1> */}
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
                :
                <Drawer2  setPage={setPage} setInput={setInput} genreA={genreA} setGenreA={setGenreA} handleRating={handleRating} handleSort={handleSort} handleReset={handleReset} input={input} page={page} max={max}/>
            }
        </div>
        
    )
}

export default Aside;