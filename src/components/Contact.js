import { NavLink } from "react-router-dom";
import './Contact.css'
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useDarkmode } from "../DarmmodeContext";
function Contact()
{
    const[dark]=useDarkmode();
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
        <div className={dark?"contact_page dark_mode padding_mode":"contact_page  "} ref={reff}>
            <h1 className={dark?"light best":"best"}>
                Get In <span>touch</span>
            </h1>
          <div className="links_photo">

             <div className="p_links">
                            <p className={dark?"desc light_text":"desc"}>Looking to partner or work together? Reach out through the form and I'll get back to you in the next 48 hours.</p>
{/* <a href="mailto:tokakaram212@gmail.com">emi</a> */}
            <div className="connec">
                 <div><a   rel="noreferrer" target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&to=tokakaram@gmail.com"><i class="fa-solid fa-envelope"></i>  <span>Email me</span></a> </div>
            <div><a  rel="noreferrer" href="https://wa.me/+201284995213" target="_blank"><i class="fa-brands fa-whatsapp"></i><p>call me</p></a></div>
            </div>
           </div>
             <div className='img_border'>
                <img src="./profile.jpg" alt=''/>
            </div>
          </div>
         <h4 className={dark&&"light_text"}>Interested in working together<span>?</span></h4>
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