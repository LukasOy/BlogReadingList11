import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

import { Cards, Cards2 , Cards1 } from "../component/cards";

export const Home = () => 
		
	<div className="text-center mt-5">
		<h1>Banderas según AI</h1>
		<div className="row">
			<div className="col-6">
		<Cards2 titulo="Paises" descripcion="Aquí lista de paises" botonName="Entrar" ruta="/paises" />
			</div>
			<div className="col-6">
	<Cards2 titulo="Personajes" descripcion="Aquí lista de personajes" botonName="Entrar" ruta="/personajes" />
		</div>
		</div>
		</div>



