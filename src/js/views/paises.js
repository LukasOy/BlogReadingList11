import React from "react";
import { Cards,Cards1,Cards2 } from "../component/cards"
import {Context } from "../store/appContext";


export const Paises =  ()=>{
    return (
    <div className="continer row-3 p-3 m-5">
    <h1>Banderas de Cada País</h1>
    <div className="row">
        
        <Cards1 img="https://s3.amazonaws.com/businessinsider.mx/wp-content/uploads/2021/11/16154539/Business_insider_mexico_banderas_inteligencia_artificial_peru.jpg" titlo="Peru" descripcion="Bandera de Peru, un volcan y una flecha" ruta="/single/1"/>
        <Cards1 img="https://media.biobiochile.cl/wp-content/uploads/2021/11/bandera-chile-inteligencia-artificial-1162x768.jpg"  titlo="Chile" descripcion="Bandera de Chile, un perro" ruta="/single/2"/>  
        <Cards1 img="https://s.yimg.com/ny/api/res/1.2/W6hDpQDNZOAGzH9JNfO5JQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTYzNQ--/https://media.zenfs.com/es/business_insider_m_xico_941/dfc6ddec654c05f0c89fc6b4dcd40165"  titlo="Argentina" descripcion="Bandera de Argentina, una hoja, una cruz y líneas" ruta="/single/3"/>
        <Cards1 img="https://media.biobiochile.cl/wp-content/uploads/2021/11/bandera-trinidad-tobago-1162x768.jpg"  titlo="Trinidad y Tobago" descripcion="Bandera de Trinidad y Tobago, Barney bailarin" ruta="/single/4"/>
        <Cards1 img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBOczeTjrxIwL7cbSRzxSOtL8x9KdrwEkJUw&usqp=CAU"  titlo="Bahamas" descripcion="Bandera de Bahamas, Arco y Flecha celeste" ruta="/single/5"/>

    </div>
</div>
)
}
