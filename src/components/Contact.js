import { NavLink } from "react-router-dom";
import './Contact.css'
import { useEffect, useRef } from "react";
import gsap from "gsap";
function Contact()
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
        <div className="contact_page" ref={reff}>
            <h1 className="best">
                Get In <span>touch</span>
            </h1>
            <p className="desc">Looking to partner or work together? Reach out through the form and I'll get back to you in the next 48 hours.</p>
            <div><a href="mailto:tokakaram@212.gmail.com"><i class="fa-solid fa-envelope"></i> <p>tokakaram212@hmail.com</p></a> </div>
            <div><i class="fa-solid fa-phone"></i><p>+0201284995213</p></div>
            
               
                <h4>Interested in working together<span>?</span></h4>
         <div className="info">
            <div className="links_h4"> 
            <div className='links'>
                    <a rel="noreferrer" target="_blank" href="https://github.com/Toka136"><i class="fa-brands fa-github"></i></a>
                    <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/toka-karam"><i class="fa-brands fa-linkedin"></i></a>
                </div>
               <div className='buttons'>
                    <NavLink to={'/contact'}> get in touch</NavLink>
                    <NavLink to={'/projects'}>browse projects</NavLink>
                </div>
                </div>
         </div>
        </div>

    )
}
export default Contact;