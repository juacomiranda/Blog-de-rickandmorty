import React from "react";
import {Link} from 'react-router-dom';


export const Card = (props) => {
    return (
        <div className="col">
            <div className="card mb-3" style={{width: "18rem"}}>
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
        <div className="col-4">
        <div className="card">
        <h5 className="card-header">{props.title}</h5>
        <div className="card-body">
          <h5 className="card-title">{props.subtitle}</h5>
          <p className="card-text">{props.fecha}</p>
          {/* <Link to='/character/'><a className="btn btn-primary">Personajes</a></Link> */}
        </div>
        </div>
      </div>
    )
}







