import React, {useContext} from "react";
import { Cards,Cards1,Cards2 } from "../component/cards"
import { Context } from "../store/appContext";

export const Banderas = ()=>{
    const {store, actions} = useContext(Context);
    return (
    <div className="continer row-3 p-3 m-5 bg-dark text-white">
    <h1>Banderas</h1>
    <div className="row ">
    {store.banderas.map((objeto, index) =>{
        console.log(objeto)
            return <Cards1 titulo={objeto.name} ruta="/banderas" descripcion="" src={objeto.flags}/>
            
        })}
    </div>
</div>
)
}

