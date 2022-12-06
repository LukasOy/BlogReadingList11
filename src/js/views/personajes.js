import React from "react";
import { Cards,Cards1,Cards2 } from "../component/cards"

export const Personajes = ()=>{
    return (
    <div className="continer row-3 p-3 m-5 bg-dark text-white">
    <h1>Animalitos Tiernos</h1>
    <div className="row ">
        
        <Cards1 img="https://t1.ea.ltmcdn.com/es/posts/7/1/5/los_35_animales_mas_tiernos_del_mundo_24517_orig.jpg" titlo="Alpaca" descripcion="Animal Tierno de Perú" ruta="/single/1"/>
        <Cards1 img="https://pbs.twimg.com/media/D6eRwvQX4AARoU5.jpg"  titlo="Pudú" descripcion="Animal tierno de Chile" ruta="/single/2"/>  
        <Cards1 img="https://1.bp.blogspot.com/-Vn0WvoOqhEA/XpuHxSkQYoI/AAAAAAAAZw8/w3gZwg73i0knXrIMdK3VcPmQETxETOgEQCLcBGAsYHQ/s1600/El%2Bcapibara%2Bes%2Bel%2Banimal%2Bm%25C3%25A1s%2Bamigable%2Bdel%2Bplaneta%2B2.jpg"  titlo="Carpincho" descripcion="Animal tierno de Argentina y su amigo gato" ruta="/single/3"/>
        <Cards1 img="https://farm4.static.flickr.com/3008/3116116516_2193e9549d.jpg"  titlo="Ranita de las islas de Trinidad" descripcion="Una ranita tierna" ruta="/single/4"/>
        <Cards1 img="https://www.viajesylugares.com/images/showid2/1632998?w=1200&zc=4"  titlo="Un chanchito de las Bahamas" descripcion="Chanchito que vive en su isla" ruta="/single/5"/>

    </div>
</div>
)
}

