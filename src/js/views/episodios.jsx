import React, {useContext} from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { CardEp } from '../component/card.jsx';
import { Navbar } from '../component/navbar.js';

export function Episodios(){
        const {store, actions}= useContext(Context);
        return <>
            <div className="row">
                {store.episode.map((obj, index)=>{
                    return <CardEp title={obj.name}  url = {obj.image}  />
                })}
            </div>
            </>         
    }