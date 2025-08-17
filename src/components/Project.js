import { useParams } from 'react-router-dom';
import'./Project.css'
import { useEffect, useState } from 'react';
function Project()
{
    const [project,setproject]=useState();
     const param=useParams();
   const projects=[
        {
            "id":"1",
            "name":"E-Commerce",
            "about":"Developed a fully responsive e-commerce website using React. Implemented product listing, filtering, and a dynamic shopping cart with real-time updates.",
            "img":"/e-commerce.png",
            "img2":"/e-commerce_all.png",
            "tool":["JSX" , "CSS" , "Bootstrap", "JavaScript" , "React"],
            "linklive":"https://full-e-commerce.netlify.app/"
        },
        {
            "id":"2",
            "name":"Weather-App",
            "about":"This website allows users to check the weather by simply entering a city name. It instantly shows today’s weather along with a detailed 5-day forecast. With a clean and responsive design, it’s perfect for staying prepared wherever you go.",
            "img":" /weather.png",
            "img2":" /weather.png",
            "tool":["JSX" , "CSS" , "Bootstrap", "JavaScript" , "React"],
            "linklive":"https://weatherappforcity2.netlify.app/"
        },
        {
            "id":"3",
            "name":"healtcare-prescripto",
            "about":"a modern healthcare web platform designed to simplify patient interactions. The application includes features such as Admin profiles with specializations, booking slots for appointments, patient-friendly navigation, and secure user authentication.  ensuring a responsive and user-friendly interface.",
            "img":"./healthcare.png",
            "img2":"/Website.png ",
           "tool":["JSX" , "CSS" , "Bootstrap", "JavaScript" ,"React","Redux Toolkit","Framer Motion","Formik/Yup"],
           "linklive":"https://healtcare-prescripto.netlify.app/"
        },
        {
            "id":"4",
            "name":"OminFood",
            "about":"Website for a food delivery service built with modern design principles.",
            "img":"/omnifood.png",
            "img2":"/omnifood_all.png",
           "tool":["HTML" , "CSS" , "Bootstrap", "JavaScript"],
           "linklive":"https://toka136.github.io/omnifood/"
        },
        {
            "id":"5",
            "name":"Movora",
            "about":"A modern film discovery and streaming interface that allows users to explore, search, and manage movies and TV shows (rate films ). Search functionality with real-time results , Browse trending, popular, and top-rated films,Responsive UI , User authentication and watchlist support",
            "img":" /movora.png",
            "img2":"/all_movora.png",
           "tool":["JSX" , "CSS" , "Bootstrap", "JavaScript" , "React","Redux"] ,
           "linklive":"https://movoramovies.netlify.app/"
        },
    ]
    useEffect(()=>
    {
        console.log("id => ",param.id);
        const p=projects.find((f)=>parseInt(f.id)===parseInt(param.id));
        if(p)
        {
            setproject(p);
        }
// eslint-disable-next-line react-hooks/exhaustive-deps
    },[param])
   
    return(
        project&&
        <div className="project">
            <h1>{ project.name}</h1>
           <div className="filmicon">
            <a href={ project.linklive} >See it Live <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
            
           </div>
            <div>
                <img src={ project.img2} alt="project img" />
            </div>
            <div className='proj_info'>
           <div>
             <h2>about</h2>
            <p>{ project.about}</p>
           </div>
           <div>
             <h2> tools used</h2>
             <div className='tools'>
                { project.tool.map((x)=>
                {
                    return <span>{x}</span>
                })}
             </div>
           </div>
            </div>
        </div>
    )
}
export default Project;