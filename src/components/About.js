import gsap from 'gsap';
import './About.css'
import { useEffect, useRef } from 'react';
function About()
{
    const lineRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      lineRef.current,
      { scaleY: 0, transformOrigin: "top center" },
      {
        scaleY: 1,
        duration: 1,
        scrollTrigger: {
          trigger: lineRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

    return(
        <div className="about">
            <h1 className="best">my <span>story</span></h1>
            <p className='about_text'>computer science student with a passion for front-end development and a keen interest in creating user-friendly web applications. I am a responsible and organized individual eager to apply my skills in HTML, CSS, JavaScript, and React to build clean, efficient, and responsive web solutions. I am currently available for freelance work and am also seeking an internship or entry-level front-end developer role to gain professional experience and contribute to impactful projects.</p>
           
        </div>

    )
}
export default About