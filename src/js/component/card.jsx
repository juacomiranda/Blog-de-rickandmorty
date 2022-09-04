import React from "react";
import {Link} from 'react-router-dom';


export const Card = (props) => {
    return (
        <div className="col">
            <div className="card" style={{width: "18rem"}}>
                <Link to={props.ruta}>
                <img src={props.url} className="card-img-top" alt="..." />
                </Link>
                <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text"></p>
                </div>
            </div>
        </div>
    )
}

export const CardEp = (props)=> {
    return (
        <div className="col">
            <div className="card" style={{width: "18rem"}}>
                <img src={props.url} className="card-img-top" alt="..." />
                <div className="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p className="card-text"></p>
                </div>
            </div>
        </div>

    )
}





