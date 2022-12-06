import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

import { Cards, Cards2, Cards1 } from "../component/cards";

export const Home = () => (

	<div>
		<div className="d-flex row-2">
      <h1>Datos aleatorios de los Países</h1>
    </div>
  <div className="container text-center d-flex mt-5 p-3 m-3 row-1">
    <div className="row">
      <div className="col">
        <Cards1
          titulo="Paises"
          img="https://us.123rf.com/450wm/lar01joka/lar01joka2004/lar01joka200400606/lar01joka200400606.jpg?ver=6"
          descripcion="Información de Países"
          botonName="Entrar"
          ruta="/paises"
        />
      </div>
      <div className="col">
        <Cards1
          titulo="Animales"
          img="https://img.freepik.com/vector-premium/conjunto-animales-lindos-kawaii-ninos-que-aprenden-vocabulario-estilo-dibujos-animados-plana_34141-498.jpg?w=2000"
          descripcion="Aquí lista de personajes"
          botonName="Entrar"
          ruta="/personajes"
        />
      </div>
    </div>
  </div>
  </div>
);
