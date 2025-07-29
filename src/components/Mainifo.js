import { NavLink } from 'react-router-dom'
import './maininfo.css'
function Maininfo()
{
    return(
        <div className="maininfo">
            <div className="maininf_cont">
            <div className='info'>
                <p>Hey, I'm Toka 👋🏻</p>
                <h1><span>Front</span>end Developer</h1>
                <p>I am a responsible and organized individual eager to apply my skills in HTML, CSS, JavaScript, and React to build clean, efficient, and responsive web solutions.</p>
                <div className='links'>
                    <a><i class="fa-brands fa-github"></i></a>
                    <a><i class="fa-brands fa-linkedin"></i></a>
                </div>
                <div className='buttons'>
                    <NavLink to={'/contact'}> get in touch</NavLink>
                    <NavLink to={'/projects'}>browse projects</NavLink>
                </div>
                
            </div>
            <div className='img'>
                <div className='img_border'>
                <img src="./profile.jpg" alt='profile photo'/>
            </div>
            </div>
            </div>
        </div>
    )
}
export  default Maininfo;