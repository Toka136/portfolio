import { useState } from "react";

function Experience()
{
    const [show1,setshow1]=useState(false);
    const [show2,setshow2]=useState(false);
    return(
        <div className="exp">
             <h1 className="best">
                my <span>experiences</span>
            </h1>
            <div className="edu">
            <div className="collage">
                <p>September 2024 –December 2024</p>
                <p>Front-End Intern</p>
                <p><span>Web Master</span> <span onClick={(()=>setshow1(!show1))}> {!show1&&<i class="fa-solid fa-angle-down"></i>}</span></p>
           <div className="abs">{show1&&
            <div>
                <h2>Things I learned</h2>
                <p>  Learned HTML, CSS, JavaScript, frameworks, and Bootstrap. </p>
                <p>  Developed four projects applying frontend development principles. </p>
                <p>  Gained essential soft skills for professional growth.</p>
                <div className="special"><i onClick={(()=>setshow1(!show1))} class="fa-solid fa-angle-up"></i></div>
            </div>}</div>
        </div>
            <div className="collage">
                <p>April 2024 – October 2024</p>
                <p>Front-End Intern</p>
                <p><span>Digital Egypt Pioneers</span> <span onClick={(()=>setshow2(!show2))}>
                    {!show2&&<i class="fa-solid fa-angle-down"></i>}</span></p>
                <div className="abs">{show2&&
                    <div>
                        <h2>Things I learned</h2>
                        <p>  Developed responsive and interactive web applications, implementing dynamic UI components and statemanagement. </p>
                <p>  Built and optimized user-friendly interfaces using HTML, CSS, JavaScript, React and Bootstrap. </p>
                <p> Recorded technical explainer videos on front-end topics, enhancing communication skills.</p>
                <p>  Completed quizzes and coding challenges to reinforce front-end development expertise.</p>
                <p>  Integrated APIs for real-time data fetching and improved performance through efficient coding practices.</p>
                <div className="special">
                    <i onClick={(()=>setshow2(!show2))} class="fa-solid fa-angle-up"></i>
                </div>
                    </div>}</div>
            </div>
        </div>
        </div>
    )
}
export default Experience;