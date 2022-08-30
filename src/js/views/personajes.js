import React, {useContext} from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Card } from '../component/card.jsx';
import { Navbar } from '../component/navbar.js';


export function Personajes(){
    const {store, actions}= useContext(Context);
    return <>
        <h1>Personajes</h1>
        <div className="container">
            {store.characters?.map((obj, index)=>{
                return <li>{obj.name}</li>
            })}
        </div>
        </>           
}