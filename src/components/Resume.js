import { use, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Skills from './Skills'
import Education from './Education'
import Experience from './Experience'
import About from './About'
import './Resume.css'
function Resume()
{
    const param=useParams();
    const [sec1,set_sec]=useState("Experience");
    const[active,setactive]=useState(false);
    const[active2,setactive2]=useState(false);
    const[active3,setactive3]=useState(false);
    const[active4,setactive4]=useState(false);
    useEffect(()=>
    {
        console.log("sec => ",param.sec);
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
            <div className="topic">
               {sec1==="Skills"?
               <Skills/>:sec1==="About"?
            <About/> :sec1==="Education"?<Education/>:<Experience/>}
            </div>
            </div>
        </div>
    )
}
export default Resume;