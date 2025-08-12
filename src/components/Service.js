import './Serviecs.css'
import { useDarkmode } from '../DarmmodeContext';
function Service(prop)
{
    const[dark]=useDarkmode();
    return(
        <div className={dark?"serv box_shadow":"serv"}>
            <div className="num">
                <span className={dark&&"light"}>{prop.serv.num}</span>
                <i className={dark?"fa-solid fa-arrow-right light_icon":"fa-solid fa-arrow-right "}></i>
            </div>
            <h2>{prop.serv.title}</h2>
            <p className={dark&&"light_text"}>{prop.serv.desc}</p>
        </div>
    )
}
export default Service;