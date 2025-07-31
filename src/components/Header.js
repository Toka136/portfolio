import { Link, NavLink } from "react-router-dom";
import './Header.css'
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
function Header()
{
    const[icon,seticon]=useState(false);
      const reff=useRef(null);
      const [screen,setscreen]=useState(false);
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
        <div className="header"  >
            <div className="cont">
                <div className="logo">
                    <NavLink to="/">
                    <h1 className >toka</h1></NavLink>
                </div>
                {!screen&&<div className="tabs" >
                    <NavLink className={({ isActive }) => isActive ? ' active1' : ''} to={'/'} >home </NavLink>
                    <NavLink  className={({ isActive }) => isActive ? ' active1' : ''} to={"/projects"}>project </NavLink>
                    {/* <a className={({ isActive }) => isActive ? ' active1' : ''} href="#">experiences </a> */}
                     <nav>
      <Link to="/#experience">experiences</Link>
    </nav>
                    <NavLink  className={({ isActive }) => isActive ? ' active1' : ''} to={'/services'}>services </NavLink>
                </div>}
               {!screen&& <div className="contact">
                    <NavLink to={'/contact'}> <i class="fa-solid fa-message"></i></NavLink>
                   
                </div>}
                 {screen&&
            <div className="list_icon">
            {icon?<i onClick={(()=>seticon(!icon))} class="fa-solid fa-x"></i>:<i onClick={(()=>seticon(!icon))} class="fa-solid fa-bars"></i>}
            </div>}
            </div>
            {icon&&<div className="tabs resize"  ref={reff}>
                    <NavLink onClick={(()=>seticon(!icon))}   className="active1" to={'/'}>home </NavLink>
                    <NavLink onClick={(()=>seticon(!icon))} to={"/projects"}>project </NavLink>
                    <NavLink onClick={(()=>seticon(!icon))}  to={'/resume'}>experiences </NavLink>
                    <NavLink onClick={(()=>seticon(!icon))} to={'/contact'} >get in touch </NavLink>
                </div>}
        </div>
    )
}
export default Header;