import { useNavigate } from "react-router-dom"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // basic styles
import 'swiper/css/navigation';
// import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './styless.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

import { useDarkmode } from "../DarmmodeContext";
// gsap.registerPlugin(ScrollTrigger);
// import { useRecoilState } from "recoil";
gsap.registerPlugin(ScrollTrigger);

function Projects()
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
 
    const projects=[
        {
            "id":"1",
            "name":"E-Commerce",
            "about":"Developed a fully responsive e-commerce website using React. Implemented product listing, filtering, and a dynamic shopping cart with real-time updates.",
            "img":"/e-commerce.png",
            "img2":"/e-commerce_all.png",
            "tool":["JSX" , "CSS" , "Bootstrap", "JavaScript" , "React"],
            "linklive":"https://full-e-commerce.netlify.app/",
            "linkgithub":"https://github.com/Toka136/e-commerce.git"
        },
        {
            "id":"2",
            "name":"Weather-App",
            "about":"This website allows users to check the weather by simply entering a city name. It instantly shows today’s weather along with a detailed 5-day forecast. With a clean and responsive design, it’s perfect for staying prepared wherever you go.",
            "img":" /weather.png",
            "img2":" /weather.png",
            "tool":["JSX" , "CSS" , "Bootstrap", "JavaScript" , "React"],
            "linklive":"https://weatherappforcity2.netlify.app/",
            "linkgithub":"https://github.com/Toka136/WeatherApp.git"
        },
        {
            "id":"3",
            "name":"healtcare-prescripto",
            "about":"a modern healthcare web platform designed to simplify patient interactions. The application includes features such as Admin profiles with specializations, booking slots for appointments, patient-friendly navigation, and secure user authentication.  ensuring a responsive and user-friendly interface.",
            "img":"./healthcare.png",
            "img2":"/Website.png ",
           "tool":["JSX" , "CSS" , "Bootstrap", "JavaScript" ,"React","Redux Toolkit","Framer Motion","Formik/Yup"],
           "linklive":"https://healtcare-prescripto.netlify.app/",
          "linkgithub": "https://github.com/Toka136/Prescripto_HealtCare.git"
        },
        {
            "id":"4",
            "name":"OminFood",
            "about":"Website for a food delivery service built with modern design principles.",
            "img":"/omnifood.png",
            "img2":"/omnifood_all.png",
           "tool":["HTML" , "CSS" , "Bootstrap", "JavaScript"],
           "linklive":"https://toka136.github.io/omnifood/",
           "linkgithub":"https://github.com/Toka136/omnifood.git"
        },
        {
            "id":"5",
            "name":"Movora",
            "about":"A modern film discovery and streaming interface that allows users to explore, search, and manage movies and TV shows (rate films ). Search functionality with real-time results , Browse trending, popular, and top-rated films,Responsive UI , User authentication and watchlist support",
            "img":" /movora.png",
            "img2":"/all_movora.png",
           "tool":["JSX" , "CSS" , "Bootstrap", "JavaScript" , "React","Redux"] ,
           "linklive":"https://movoramovies.netlify.app/",
           "linkgithub":"https://github.com/Toka136/Movora.git"
        },
    ]
    const navigate=useNavigate();
    function getproject(x)
    {
        navigate(`/projects/${x.id}`);
        
    }
  
     useEffect(() => {
    const handleResize = () => {
      // const width = window.innerWidth;

     
    };

    handleResize(); 

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
        // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
    return(
        <div  ref={reff} className={dark?"special_ground_dark":"special_ground"}>
        <div >
             <h1 className={dark?"light best":"best"} >
                My <span>Best</span> Creations
                </h1>
                <p className={dark?"desc light_text":"desc"}>Designing and Developing Robust and Stylish Web Applications for a Decade and Counting</p> 
         </div>  
         <div className="divv " >
                 <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 350,
          modifier: 1,
          loop:true,
          slideShadows: true,
         
        }}
         initialSlide={2}
        // initialSlide:3
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
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