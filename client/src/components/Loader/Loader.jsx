import React from "react";
import s from "./Loader.module.css"

const Loader = () => {
    return(
                <div className={s.loader}>
                    <div>
                        <img 
                        className={s.loader} 
                        src="https://i.pinimg.com/originals/e1/06/64/e1066408f6758f1da75cfde0ad8823f0.gif" 
                        alt="Loading"
                        />
                    </div>
                </div> 
    )
}

export default Loader;