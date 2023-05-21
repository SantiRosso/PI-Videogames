// import {Link} from "react-router-dom"
// //styles
// import s from "./Filters.module.css";
// //components
// import Pagination from "../Pagination/Pagination";
// import Footer from "../Footer/Footer";

// const Filters = () => {
//     return(
//         <div>
//             <h1 className={s.title}>DARK/LIGHT</h1>
//             <div className={s.divLink}>
//                 <Link to="/about">
//                     <button className={s.link}>About</button>
//                 </Link>
//                 <Link to="/create">
//                     <button className={s.link}>Create Videogame</button> 
//                 </Link>
//             </div>
//             <h3 className={s.subtitle}>Genres</h3>
//             <div className={s.divGenres}>
//                 <div className={s.genres}>
//                     {
//                         genres?.map((e,i) => {
//                             return(
//                                 <button key={i} className={e.name === genreA ? "genreA" : "genre"} value={e.name} onClick={handleClick}>{e.name}</button>                           
//                             )
//                         })
//                     }
//                 </div>
//             </div>
//             <div className={s.subDiv}>
//                 <button onClick={handleClickSwitch} className={s.apidb} value="api">Games API</button>
//                 <button onClick={handleClickSwitch} className={s.apidb} value="db">Created games</button>
//             </div>
//             <h3 className={s.order}>Order by</h3>
//             <div className={s.orderDiv}>
//                 <select className={s.select} name="Sort" onChange={handleSort}>
//                     <option value="sort">Alphabet</option>
//                     <option value="asc">A-Z</option>
//                     <option value="des">Z-A</option>
//                 </select>
//                 <select className={s.select} name="Rating" onChange={handleRating}>
//                     <option value="rating">Rating</option>
//                     <option value="men">Minor-Major</option>
//                     <option value="may">Major-Minor</option>
//                 </select>
//             </div>
//             <div className={s.divReset}>
//                 <button className={s.reset} onClick={handleReset}>Reset filters</button>
//             </div>
//             <Pagination input={input} setInput={setInput} page={page} setPage={setPage} max={max}/>            
//             <Footer/>          
//         </div>
//     )
// }

// export default Filters;
