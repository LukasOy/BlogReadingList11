import React, {useContex} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";

import { Cards, Cards2, Cards1 } from "../component/cards";

export const Home = () => (

	<div>
		<div className="d-flex row-2">
      <h1>Los Paises</h1>
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
          titulo="Banderas"
          img="https://thumbs.dreamstime.com/z/banderas-del-mundo-en-la-forma-de-esfera-49616173.jpg"
          descripcion="Aquí lista de las banderas"
          botonName="Entrar"
          ruta="/personajes"
        />
      </div>
    </div>
  </div>
  </div>
);
