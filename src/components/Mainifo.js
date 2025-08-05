import { NavLink, useLocation } from 'react-router-dom'
import './maininfo.css'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import AOS from "aos";
import "aos/dist/aos.css";
// gsap.registerPlugin(ScrollTrigger);
function Maininfo()
{
      const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);
  
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
    useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
    return(
        <div className="maininfo"  style={{ overflowX: "hidden" }}>
            <div className="maininf_cont" ref={reff}>
            <div className='info'>
                <p>Hey, I'm Toka 👋🏻</p>
                <h1><span>Front</span>end Developer</h1>
                <p>I am a responsible and organized individual eager to apply my skills in HTML, CSS, JavaScript, and React to build clean, efficient, and responsive web solutions.</p>
                
                <div className='buttons'>
                    <a  rel="noreferrer" href='https://drive.google.com/file/d/1bsk4v13S7l4634Ej4RGOujC6USKlhEI6/view?usp=sharing' target='_blank'> my resume</a>
                    <NavLink to={'/projects'}>browse projects</NavLink>
                </div>
                
            </div>
            <div className='img'>
                <div className='img_border'>
                <img src="./profile.jpg" alt=''/>
            </div>
            </div>
            </div>
              <div className="about" data-aos="fade-right" >
                <div className='about_cont'>
            <h1 className="best">my <span>story</span></h1>
            <p className='about_text'>Front-end developer with a passion for front-end development and a keen interest in creating user-friendly web applications. I am a responsible and organized individual eager to apply my skills in HTML, CSS, JavaScript, and React to build clean, efficient, and responsive web solutions. I am currently available for freelance work and am also seeking an internship or entry-level front-end developer role to gain professional experience and contribute to impactful projects.</p>
           </div>
        </div>
         <div className="edu" data-aos="fade-left" >
            <h1 className="best">
                my <span>education</span>
            </h1>
            <div className="collage"  >
                <p>Sept. 2022 – Present</p>
                <p>Bachelor's degree in Computer Science</p>
                <p>Ain Shams University</p>
                <p>Courses: Object Oriented Programming, Data Structures, Algorithms design and analysis, Operating systems, Database, Web development and Software Engineering</p>
            </div>
        </div>
         <div className="exp" id='experience'>
             <h1 className="best">
                my <span>experiences</span>
            </h1>
            <div className="edu">
            <div className="collage"  data-aos="fade-right">
                <p>September 2024 –December 2024</p>
                <p>Front-End Intern</p>
                <p><span>Web Master</span> </p>
           <div className="abs">
            <div>
                <h2>From Learning to Building – Internship Highlights</h2>
                 <p> ◦Developed responsive and interactive web applications, implementing dynamic UI components and statemanagement. </p>
                <p>  ◦Built and optimized user-friendly interfaces using HTML, CSS, JavaScript, React and Bootstrap. </p>
                <p> Recorded technical explainer videos on front-end topics, enhancing communication skills.</p>
                <p>  ◦Completed quizzes and coding challenges to reinforce front-end development expertise.</p>
                <p>  ◦Integrated APIs for real-time data fetching and improved performance through efficient coding practices.</p>
                <div className="special"></div>
            </div></div>
        </div>
            <div className="collage" data-aos="fade-left">
                <p>April 2024 – October 2024</p>
                <p>Front-End Intern</p>
                <p><span>Digital Egypt Pioneers</span></p>
                <div className="abs">
                    <div>
                        <h2>From Learning to Building – Internship Highlights</h2>
               <p>  ◦Learned HTML, CSS, JavaScript, framework, and Bootstrap. </p>
                <p> ◦Developed four projects applying frontend development principles. </p>
                
                <p> ◦Gained essential soft skills for professional growth.</p>
                <div className="special">
                   
                </div>
                    </div></div>
            </div>
        </div>
        </div>
         <div className="skilles_cont" data-aos="fade-right">
        <h1 className="best">
            my
            <span>skills</span>
        </h1>
        <div className='skills_photo'>
            <div >
                <img alt='' src='/skills.jpg'/>
            </div>
        <div className="skills">
            <div className="skill">
                {/* <span>HTML 5</span> */}
                <i class="fa-brands fa-html5"></i>
            </div>
            <div className="skill">
                 {/* <span>CSS 3</span> */}
                <i class="fa-brands fa-css3"></i>
            </div>
            <div className="skill">
                 {/* <span>Bootstrap</span> */}
            <i class="fa-brands fa-bootstrap"></i>
            </div>
            <div className="skill">
                 {/* <span>JavaScript</span> */}
            <i class="fa-brands fa-js"></i>
            </div>
            <div className="skill">
                 {/* <span>React</span> */}
            <i class="fa-brands fa-react"></i>
            </div>
            <div className="skill">
                 {/* <span>github</span> */}
        <i class="fa-brands fa-github"></i>
            </div>
        </div>
    </div>
    </div>
        </div>
    )
}
export  default Maininfo;