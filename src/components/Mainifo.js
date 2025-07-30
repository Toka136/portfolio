import { NavLink } from 'react-router-dom'
import './maininfo.css'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
function Maininfo()
{
      const reff=useRef(null);
      useEffect(()=>
    {
        function fun()
        {
            
            gsap.fromTo(
            reff.current,
            {y:-50,opacity:0},
            {y:0,opacity:1,duration: 1.5,
        }
        );
        }
        fun();
    },[])
    return(
        <div className="maininfo"  ref={reff}>
            <div className="maininf_cont">
            <div className='info'>
                <p>Hey, I'm Toka 👋🏻</p>
                <h1><span>Front</span>end Developer</h1>
                <p>I am a responsible and organized individual eager to apply my skills in HTML, CSS, JavaScript, and React to build clean, efficient, and responsive web solutions.</p>
                
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