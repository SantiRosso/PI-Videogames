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

const Carrousel = ({id}) => {

    const dispatch = useDispatch()
    const videogames = useSelector((state) => state.videogames)
    const videogame = videogames?.filter((e) => e.id == id)
    const images = videogame[0]?.images
    console.log("videogames",videogames ? videogames : "nada")
    console.log("juego", videogame)
    console.log("images", images)
    const width = window.innerWidth

    useEffect(()=> {
        if(!videogames.length)
        dispatch(getAllVideogames());
    },[videogames, dispatch])

    const [image, setImage] = useState(
        {
            image: images[0].image,
            id: images[0].id
        }
    )

    const handleClick = (e) => {
        setImage({image: e.target.src, id: e.target.id})
    }

    //PAGINATION 
    const [page, setPage] = useState(1);
    const [perPage] = useState(width > 800 ? 3 : 2);
    let max = Math.ceil(images.length - perPage + 1 / perPage)

    const nextPage = () => {
        setPage (page +1)
    }

    const previousPage = () => {
        setPage (page -1)
    }

    return(
        <div>
            <div className={s.divSelectedImage}>
                <img src={image.image} alt="Imagen seleccionada" className={s.selectedImage}/>
            </div>
            <div className={s.carrousel}>
                <Button icon={<TfiAngleLeft/>} click={previousPage} disabled={page === 1}/>
                    {
                        images?.slice(page - 1, (page - 1) + perPage).map((e) => {
                            return(
                                <div className={s.tooltipContainer}>
                                    <span className={s.tooltipText}>{e.description}</span>
                                    <img className={e.id == image?.id ? s.imgActive : s.img}  id={e.id} src={e.image} alt="Imagen del juego" onClick={handleClick}/>
                                </div>
                            )
                        })
                    }
                <Button icon={<TfiAngleRight/>} click={nextPage} disabled={page === max}/>
            </div> 
        </div>
        
    )
}

export default Carrousel;