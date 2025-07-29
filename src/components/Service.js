import './Serviecs.css'
function Service(prop)
{
    return(
        <div className="serv">
            <div className="num">
                <span>{prop.serv.num}</span>
                <i class="fa-solid fa-arrow-right"></i>
            </div>
            <h2>{prop.serv.title}</h2>
            <p>{prop.serv.desc}</p>
        </div>
    )
}
export default Service;