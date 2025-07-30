import { useNavigate } from "react-router-dom"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // basic styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
// gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollTrigger);
function Projects()
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
 
    const projects=[
        {
            "id":"1",
            "name":"E-Commerce",
            "about":"Developed a fully responsive e-commerce website using React. Implemented product listing, filtering, and a dynamic shopping cart with real-time updates.",
            "img":"/e-commerce.png",
            "tool":["HTML" , "CSS" , "Bootstrap", "JavaScript" , "React"],
            "linklive":"https://full-e-commerce.netlify.app/"
        },
        {
            "id":"2",
            "name":"Weather-App",
            "about":"This website allows users to check the weather by simply entering a city name. It instantly shows today’s weather along with a detailed 5-day forecast. With a clean and responsive design, it’s perfect for staying prepared wherever you go.",
            "img":" /weather.png",
            "tool":["HTML" , "CSS" , "Bootstrap", "JavaScript" , "React"],
            "linklive":"https://weatherappforcity2.netlify.app/"
        },
        {
            "id":"3",
            "name":"Gotta",
            "about":"A job listing platform designed to connect employers with job seekers. The site features a responsive design,dynamic job filters, and interactive UI elements",
            "img":" /gotta.png",
           "tool":["HTML" , "CSS" , "Bootstrap", "JavaScript"],
           "linklive":"https://toka136.github.io/gotta/"
        },
        {
            "id":"4",
            "name":"OminFood",
            "about":"Website for a food delivery service built with modern design principles.",
            "img":" /omnifood.png",
           "tool":["HTML" , "CSS" , "Bootstrap", "JavaScript"],
           "linklive":"https://toka136.github.io/omnifood/"
        },
        {
            "id":"5",
            "name":"Movora",
            "about":"A modern film discovery and streaming interface that allows users to explore, search, and manage movies and TV shows (rate films ). Search functionality with real-time results , Browse trending, popular, and top-rated films,Responsive UI , User authentication and watchlist support",
            "img":" /movora.png",
           "tool":["HTML" , "CSS" , "Bootstrap", "JavaScript" , "React","Redux"] ,
           "linklive":"https://movoramovies.netlify.app/"
        },
    ]
    const navigate=useNavigate();
    function getproject(x)
    {
        navigate(`/projects/${x.id}`);
        
    }
    const [screen,setscreen]=useState(false);
     const [Sscreen,setSscreen]=useState(false);
     useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      setscreen(width < 426);
      setSscreen(width < 376);
    };

    handleResize(); 

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
        // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
    return(
        <div  ref={reff}>
        <div >
             <h1 className="best">
                My <span>Best</span> Creations
                </h1>
                <p className="desc">Designing and Developing Robust and Stylish Web Applications for a Decade and Counting</p> 
         </div>  
         <div className="divv " >
                 <Swiper navigation={true} modules={[Navigation]} className="mySwiper"
      spaceBetween={50}
      slidesPerView= {screen?Sscreen<376?1:2:2}
      // onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}>
         {projects?projects.map((f,index)=>
        {
          return <SwiperSlide key={index}>
      <div className="proj" onClick={(()=>getproject(f))}>
        <img className ="proj_img"src={f.img} alt=""/>
        <h3 className="proj_name">{f.name}</h3>
      </div>
    </SwiperSlide>
        }):null} 
        
    </Swiper>
         </div>
        </div> 
        
    )
  
}
export default Projects;