import linkedin from "./linkedin.png"
import github from "./github.png"
import instagram from "./instagram.png"
import portfolio from "./portfolio.png"
import whatsapp from "./whatsapp.png"
import s from "./Footer.module.css"

const Footer = () => {
    return(
        <div className={s.div}>
            <a href="https://www.linkedin.com/in/santiago-rosso-421484227/" title="linkedin" target="blanck"><img src={linkedin} width="30rm" alt="linkedin" className={s.icon} /></a>
            <a href="https://github.com/SantiRosso" title="github" target="blanck"><img src={github} width="30rm" alt="linkedin" className={s.icon} /></a>
            <a href="https://www.instagram.com/santi.rosso/" title="instagram" target="blanck"><img src={instagram} width="30rm" alt="linkedin" className={s.icon} /></a>
            <a href="https://portfolio-olive-three-24.vercel.app/" title="portfolio" target="blanck"><img src={portfolio} width="30rm" alt="linkedin" className={s.icon} /></a>
            {/* <a href="" title="whatsapp"> */}<img src={whatsapp} width="30rm" alt="whatsapp" className={s.icon} />{/* </a> */}
        </div>    
    )
}

export default Footer;