import React from "react";


export const Card = (props) => {
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

export const CardEp = (props)=> {
    return (
        <div className="col">
            <div className="card" style={{width: "18rem"}}>
                <img src={props.url} className="card-img-top" alt="..." />
                <div className="card-body">
                <h5 class="card-title">{props.alt}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>

    )
}





