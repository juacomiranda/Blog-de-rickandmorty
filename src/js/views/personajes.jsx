import React from "react";

import "../../styles/home.css";
import { Card } from '../component/card.jsx';
import { Navbar } from '../component/navbar.js'


export const Personajes = () => {
    return (
        <div className="container text-center">
            <div className="row img-card">
                <Card url="https://cdn.superaficionados.com/imagenes/rick-sanchez-0-cke.jpg" />
                <Card url="https://cdn.superaficionados.com/imagenes/morty-smith-0-cke.jpg" />
                <Card url="https://areajugones.sport.es/wp-content/uploads/2020/08/43d516c3f638c68d9cd004d99e9e5687234064a0v2_hq.jpg.webp" />
                <Card url="https://cdn.superaficionados.com/imagenes/summer-smith-cke.gif" />
                <Card url="https://cdn.superaficionados.com/imagenes/beth-sanchez-smith-cke.jpg" />
                <Card url="https://areajugones.sport.es/wp-content/uploads/2020/08/ojete-sucuio-1220x693.jpg.webp" />
                <Card url="https://areajugones.sport.es/wp-content/uploads/2020/08/squanchy-1220x642.jpg.webp" />
                <Card url="https://cdn.superaficionados.com/imagenes/snuffles-snowball-cke.jpg" />
                <Card url="https://cdn.superaficionados.com/imagenes/bird-person-cke.jpg" />
                <Card url="https://cdn.superaficionados.com/imagenes/the-president-cke.jpg" />
                <Card url="https://cdn.superaficionados.com/imagenes/mr-meeseeks-0-cke.jpg" />
                <Card url="https://cdn.superaficionados.com/imagenes/abradolf-lincler-cke.jpg" />
            </div>

        </div>

    )
}