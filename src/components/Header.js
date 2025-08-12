import { Link, NavLink } from "react-router-dom";
import './Header.css'
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useDarkmode } from "../DarmmodeContext";
function Header()
{
    const[icon,seticon]=useState(false);
      const reff=useRef(null);
      const [screen,setscreen]=useState(false);
      const[dark,setdark]=useDarkmode();
     useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      setscreen(width < 805);
    };

    handleResize(); 

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
        // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
    },[icon])
    return(
        <div className= {dark?"dark_mode header":"header header_projects"} >
            <div className= "cont">
                <div className="logo">
                    <NavLink to="/">
                    <h1  className={dark&&"light"}>toka</h1></NavLink>
                </div>
                {!screen&&<div className="tabs" >
                    <NavLink className={({ isActive }) => isActive ? ' active1' : ''} to={'/'} >home </NavLink>
                    <NavLink  className={({ isActive }) => isActive ? ' active1' : ''} to={"/projects"}>project </NavLink>
                    {/* <a className={({ isActive }) => isActive ? ' active1' : ''} href="#">experiences </a> */}
                     <nav>
      <Link to="/#experience">experiences</Link>
    </nav>
                    <NavLink  className={({ isActive }) => isActive ? ' active1' : ''} to={'/services'}>services </NavLink>
                    <NavLink  className={({ isActive }) => isActive ? ' active1' : ''} to={'/contact'}>contact </NavLink>
                </div>}
               {!screen&& <div className="contact">
                    {
                        dark?<i class="fa-solid fa-sun light" onClick={(()=>setdark(!dark))}></i>:<i class="fa-regular fa-moon dark" onClick={(()=>setdark(!dark))}></i>
                    }
                  
               
                </div>}
                
                 {screen&&
            <div className="list_icon">
                <div className="contact">
                    {
                        dark?<i class="fa-solid fa-sun light" onClick={(()=>setdark(!dark))}></i>:<i class="fa-regular fa-moon dark" onClick={(()=>setdark(!dark))}></i>
                    }
                  
               
                </div>
            {icon?<i onClick={(()=>seticon(!icon))} className={dark?"fa-solid fa-x light":"fa-solid fa-x"}></i>:<i onClick={(()=>seticon(!icon))} class={dark?"fa-solid fa-bars light":"fa-solid fa-bars"}></i>}
            </div>}
            </div>
                
            {icon&&<div className="tabs resize"  ref={reff}>
                    <NavLink onClick={(()=>seticon(!icon))}   className="active1" to={'/'}>home </NavLink>
                    <NavLink onClick={(()=>seticon(!icon))} to={"/projects"}>project </NavLink>
                     <nav>
                     <Link  onClick={(()=>seticon(!icon))} to="/#experience">experiences</Link>
    </nav>
                    <NavLink onClick={(()=>seticon(!icon))} to={'/contact'} >get in touch </NavLink>
                
                </div>}
        </div>
    )
}
export default Header;