import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import "../../styles/home.css"; 
import propTypes from "prop-types";
import {Link} from 'react-router-dom';



export function DetalleCh (){
    const {theid} = useParams();
    const {store, actions} = useContext (Context); 
    return <>
        <div className="container mt-5 ">
            <div className="row">
                <div className="col">
                    <img src={store.characters[theid]?.image}  className="rounded-circle" />
                </div>
                <div className="col-4">
                    <p className="card-descrip">Nombre: {store.characters[theid]?.name}</p>
                    <p className="card-descrip">Estado: {store.characters[theid]?.status}</p>
                    <p className="card-descrip">Especie: {store.characters[theid]?.species}</p>
                    <p className="card-descrip">Tipo: {store.characters[theid]?.type}</p>
                    <p className="card-descrip">Genero: {store.characters[theid]?.gender}</p>  
                    <Link to='/personajes'><button type="button" className="btn btn-light">Volver</button> </Link>                 
                </div>
            </div>
        </div>
    </>
}