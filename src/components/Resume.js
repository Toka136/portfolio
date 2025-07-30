import {  useEffect, useRef, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import Skills from './Skills'
import Education from './Education'
import Experience from './Experience'
import About from './About'
import './Resume.css'
import gsap from "gsap";
function Resume()
{
    const param=useParams();
    const [sec1,set_sec]=useState("Experience");
    const navigate=useNavigate();
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
    },[sec1])
    useEffect(()=>
    {
       
        if(param.sec==="experience")
        {
            set_sec("Experience")
        }
        else if(param.sec==="education")
        {
            set_sec("Education")
        }
       else  if(param.sec==="skills")
        {
            set_sec("Skills")
        }
        else if(param.sec==="about")
        {
            set_sec("About")
        }
        else
        { console.log("sec => ",param.sec);
           navigate('/resume/experience')
        }
 // eslint-disable-next-line react-hooks/exhaustive-deps
    },[param])
    return(
        <div className="resume">
            <div className="resume_cont">
            <div className="resume_tabs">
                <ul>
                    <li>
                        <NavLink  className={({ isActive }) => isActive ? ' active2' : ''} to={'/resume/experience'}>experience</NavLink>
                    </li>
                    <li>
                        <NavLink   className={({ isActive }) => isActive ? ' active2' : ''} to={'/resume/education'}>education</NavLink>
                    </li>
                    <li>
                        <NavLink   className={({ isActive }) => isActive ? ' active2' : ''} to={'/resume/skills'}>skills</NavLink>
                    </li>
                    <li>
                        <NavLink   className={({ isActive }) => isActive ? ' active2' : ''} to={'/resume/about'}>about me </NavLink>
                    </li>
                </ul>
            </div>
            <div className="topic" ref={reff}>
               {sec1==="Skills"?
               <Skills/>:sec1==="About"?
            <About/> :sec1==="Education"?<Education/>:<Experience/>}
            </div>
            </div>
        </div>
    )
}
export default Resume;