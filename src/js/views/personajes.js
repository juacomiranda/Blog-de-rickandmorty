import React, {useContext} from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Card } from '../component/card.jsx';
import { Navbar } from '../component/navbar.js';


export function Personajes(){
    const {store, actions}= useContext(Context);
    return <>
        <div className="row">
            {store.characters.map((obj, index)=>{
                return <Card title={obj.name}  url = {obj.image}  ruta={'/detalleCh/'+index} />
            })}
        </div>
        </>          
}