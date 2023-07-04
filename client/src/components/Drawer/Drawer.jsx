import { useState } from "react";
//components
import Switch from "../Switch/Switch";
import Search from "../Search/Search";
import Modals from "../Modals/LoginModals";
//styles
import s from "./Drawer.module.css";

const Drawer = ({ setPage, setInput}) => {

    const [drawer, setDrawer] = useState(false)

    const handleClickDrawer = () => {
        setDrawer(!drawer)
    }

    return(
        <div>
            <Switch click={handleClickDrawer}/>
            {
                drawer && 
                <div className={s.drawer}>
                    <Search setInput={setInput} setPage={setPage}/>
                    <Modals/>
                </div>
            }
        </div>
    )
}

export default Drawer;