//components
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllVideogames } from "../../redux/actions";
//components
import Button from "../Button/Button";
//styles
import s from "./Carrousel.module.css";
//react-Icons
import {TfiAngleLeft, TfiAngleRight} from "react-icons/tfi";
import Loader from "../Loader/Loader";

const Carrousel = ({id}) => {

    const dispatch = useDispatch()
    const videogames = useSelector((state) => state.videogames)
    const videogame = videogames?.filter((e) => e.id == id)[0]
    const width = window.innerWidth

    useEffect(()=> {
        if(!videogames?.length)
        dispatch(getAllVideogames());
    },[videogames, dispatch])

    const [image, setImage] = useState(
        {
            image: videogame?.images[0]?.image,
            id: videogame?.images[0]?.id
        }
    )

    const handleClick = (e) => {
        setImage({image: e.target.src, id: e.target.id})
    }

    //PAGINATION 
    const [page, setPage] = useState(1);
    const [perPage] = useState(width > 800 ? 3 : 2);
    let max = Math.ceil(videogame?.images?.length - perPage + 1 / perPage)

    const nextPage = () => {
        if(page < max) setPage (page +1)
    }

    const previousPage = () => {
        if(page > 1) setPage (page -1)
    }

    if(!videogames?.length){
        return(
            <Loader/>
        )
    }
    return(
        <div className={s.container}>
            <div className={s.divSelectedImage}>
                <img src={image?.image} alt="Imagen seleccionada" className={s.selectedImage}/>
            </div>
            <div className={s.carrousel}>
                <Button icon={<TfiAngleLeft/>} click={previousPage}/>
                    {
                        videogame?.images?.slice(page - 1, (page - 1) + perPage).map((e) => {
                            return(
                                    <img key={e.id} className={e.id == image?.id ? s.imgActive : s.img}  id={e.id} src={e.image} alt="Imagen del juego" onClick={handleClick}/>
                            )
                        })
                    }
                <Button icon={<TfiAngleRight/>} click={nextPage}/>
            </div> 
        </div>
        
    )
}

export default Carrousel;