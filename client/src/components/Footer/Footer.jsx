import linkedin from "./linkedin.png"
import github from "./github.png"
import instagram from "./instagram.png"
import portfolio from "./portfolio.png"
import whatsapp from "./whatsapp.png"
import s from "./Footer.module.css"

const Footer = () => {
    return(
        <div className={s.div}>
            <a href="https://www.linkedin.com/in/santiago-rosso-421484227/" title="linkedin"><img src={linkedin} width="30rm" alt="linkedin" /></a>
            <a href="https://github.com/SantiRosso" title="github"><img src={github} width="30rm" alt="linkedin" /></a>
            <a href="https://www.instagram.com/santi.rosso/" title="instagram"><img src={instagram} width="30rm" alt="linkedin" /></a>
            <a href="https://santirosso.github.io/Portfolio-1/" title="portfolio"><img src={portfolio} width="30rm" alt="linkedin" /></a>
            {/* <a href="" title="whatsapp"> */}<img src={whatsapp} width="30rm" alt="whatsapp" />{/* </a> */}
        </div>    
    )
}

export default Footer;