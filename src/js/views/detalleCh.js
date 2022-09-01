import React from "react";
import { useParams } from "react-router-dom";



export function DetalleCh (){
    const {theid} = useParams();
    return <>
        <div className="container mt-5 ">
            <img src="https://rickandmortyapi.com/api/character/avatar/3.jpeg"  className="rounded" />
            <p className="position-absolute botton-50 start-50">Hola</p>
            <p>como</p>
            <p>estas</p>
            <p>fggg</p>
            <p>dddd</p>
            <p>hhjhhh</p>
            <p>ooooo</p>
        </div>
    </>
}