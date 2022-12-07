import React, {useContext} from "react";
import { Cards,Cards1,Cards2 } from "../component/cards"
import { Context } from "../store/appContext";


export const Paises =  ()=>{
    const {store, actions} = useContext(Context);
    return (
    <div className="continer row-3 p-3 m-5">
    <h1>Paises</h1>
    <div className="row">
        {store.paises.map((objeto, index) =>{
           return <Cards1 titulo={objeto.name} ruta="/paises" descripcion="" src={objeto.flags}/>
        })}
        
    </div>
</div>
)
}
