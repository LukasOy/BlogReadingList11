import React from "react";
import { Cards,Cards1,Cards2 } from "../component/cards"

export const Personajes = ()=>{
return <div className="continer">
    <h1>Personajes Icónicos de cada país</h1>
    <div className="row">
        
        <Cards2  {
            "titulo"="Chile"; 
            "ruta"="/paises"; 
            "descripcion"="Este personajes Chile es entero pulento";
            } />

             <Cards2/>  <Cards2/>
    </div>
</div>

}