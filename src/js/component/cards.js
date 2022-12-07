import PropTypes from "prop-types";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Cards = () => {
    return ( 
       
<div className="row">
    <div className="container">
    <h1> Banderas según Inteligencia Artificial </h1>
  <div className="col-5"> 
    <img src="https://media.biobiochile.cl/wp-content/uploads/2021/11/bandera-chile-inteligencia-artificial-1162x768.jpg" alt="Card image cap" width={400}></img>
    <div className="card-body">
      <h5 className="card-title">Chile</h5>
      <p className="card-text"> Perrito chileno</p>
      <button type="button" class="btn btn-primary">Aprende mas de Chile</button>
      <button className="fa-solid fa-heart"></button>
    </div>
    </div>
  </div>

  <div className="container">
    
  <div className="col-5"> 
    <img src="https://s.yimg.com/ny/api/res/1.2/W6hDpQDNZOAGzH9JNfO5JQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTYzNQ--/https://media.zenfs.com/es/business_insider_m_xico_941/dfc6ddec654c05f0c89fc6b4dcd40165" alt="Card image cap" width={400}></img>
    <div className="card-body">
      <h5 className="card-title">Argentina</h5>
      <p className="card-text"> Hojas religion y líneas</p>
      <button type="button" class="btn btn-primary">Aprende mas de Argentina</button>
      <button className="fa-solid fa-heart"></button>
    </div>
    </div>
  </div>

  <div className="container">
    
  <div className="col-5"> 
    <img src="https://s3.amazonaws.com/businessinsider.mx/wp-content/uploads/2021/11/16154539/Business_insider_mexico_banderas_inteligencia_artificial_peru.jpg" alt="Card image cap" width={400}></img>
    <div className="card-body">
      <h5 className="card-title">Perú</h5>
      <p className="card-text"> Volcan</p>
      <button type="button" class="btn btn-primary">Aprende mas de Perú</button>
      <button className="fa-solid fa-heart"></button>
    </div>
    </div>
  </div>


</div>

 
);
};
export const Cards1 = (props) => {
  return (
    <div className="card text-white bg-dark" style={{width: "18rem"}}>
      <div className="card-header">
      <img src={props.img} className="card-img-top" alt="..."/>
      
     <div className="card-body">
      <h5 className="card-title"> {props.titulo} </h5>
      <p className="card-text"> {props.descripcion}</p>
      </div>
      <Link to={props.ruta}>
        <a className="btn btn-danger">Más Detalle </a>
      </Link>
      <button className="fa-solid fa-heart"></button>
     </div>
    </div>
  );
  } ;
  export const Cards2 = ({titulo, ruta, descripcion})=>{
  return (
    <div className="card" style={{width: "18rem"}}> 
    <div className="card-body">
      <div>
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text">{descripcion} </p>
        <div className="row">
        <Link to={ruta}>
      <a className="btn btn-primary"> Más info aquí</a>
        </Link>
        <button className="fa-solid fa-heart"></button>
        </div>
        </div> 
        </div>
        </div>
  )
  }
