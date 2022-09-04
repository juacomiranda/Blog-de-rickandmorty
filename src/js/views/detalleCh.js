import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";



export function DetalleCh (){
    const {theid} = useParams();
    const {store, actions} = useContext (Context); 
    return <>
        <div className="container mt-5 ">
            <img src={store.characters[theid]?.image}  className="rounded" />
            <p className="position-absolute botton-50 start-50">Hola</p>
            <p>{store.characters[theid]?.name}</p>
            <p>estas</p>
            <p>fggg</p>
            <p>dddd</p>
            <p>hhjhhh</p>
            <p>ooooo</p>
        </div>
    </>
}