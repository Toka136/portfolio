import { useEffect, useRef } from "react";
import Service from "./Service"
import gsap from "gsap";

function Services(){
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
    const services=[
        {
            "num":"01",
            "title":"Responsive Web Design",
            "desc":"I build responsive and dynamic web applications using React, ensuring smooth user experience across all devices. From landing pages to complex SPAs, I focus on clean, maintainable code and modern UI design."
        },
        {
            "num":"02",
            "title":"Component-Based UI Design",
            "desc":"I create reusable and efficient React components with well-structured logic and styling. I follow best practices in component architecture, state management, and props handling to deliver modular and scalable UIs."
        },
        {
            "num":"03",
            "title":"API Integration & Data Handling",
            "desc":"I integrate RESTful APIs and third-party services into React apps, handling data fetching, state updates, and error management effectively. I use tools like Axios, Fetch API, and React Query to streamline data operations."
        },
        {
            "num":"04",
            "title":"Performance Optimization & Debugging",
            "desc":"I optimize React applications for speed and performance, applying techniques like code splitting, lazy loading, memoization, and more. I also debug and fix issues to enhance reliability and user experience."
        },
        {
            "num":"05",
            "title":"Custom Web Development",
            "desc":"Developing custom web applications using modern technologies like HTML, CSS, JavaScript, Bootstrap, and React to meet specific client needs."
        },
    ]
    return(
        <div className="servs" ref={reff}>
            <h1 className="best">
                What can I <span>do</span>
            </h1>
            <div className="serv_cont">
                {services.map((s)=>
                {
                    return <Service serv={s}/>
                })}
            </div>
        </div>
    )
}
export default Services;