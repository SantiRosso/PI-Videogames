import Nav from "../Nav/Nav"
import Footer from "../Footer/Footer"
import s from "./About.module.css"

const About = () => {
    return (
        <div className={s.firstDiv}>
            <Nav/>
            <div className={s.container}>
                <h1>about</h1>
            </div>
            <Footer/>
        </div>
        
    )
}

export default About;