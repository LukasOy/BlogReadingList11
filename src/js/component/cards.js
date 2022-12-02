import PropTypes from "prop-types";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Cards = () => {
    return ( 
       
<div class="card-deck">
    <div class="container">
    <h1> Perritos </h1>
  <div class="card"> 
    <img class="img-thumbnail h-50" src="https://mrwanker.com/wp-content/uploads/2021/07/perrito-triste-memes-1.jpg" alt="Card image cap"></img>
    <div class="card-body">
      <h5 class="card-title">Perrito Uno</h5>
      <p class="card-text"> Perrito mirandote de lado</p>
      <button type="button" class="btn btn-primary">Aprende mas de este perro</button>
      <button class="fa-solid fa-heart"></button>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/3c19f72c818f5cb0c03f8083ff0d9b87~c5_720x720.jpeg?x-expires=1669953600&x-signature=9WjOCXZDTGl5k0%2BodZDb7nh5eiU%3D" alt="Card image cap"></img>
    <div class="card-body">
      <h5 class="card-title">Perrito Dos</h5>
      <p class="card-text">Este tambien mira de ladito</p>
      <button type="button" class="btn btn-primary">Aprende mas de este perro</button>
      <button class="fa-solid fa-heart"></button>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="https://estaticos.muyinteresante.es/media/cache/1000x_thumb/uploads/images//gallery/5a84260b5cafe8505a3c986b/perro-en-el-coche-asustado.jpg" alt="Card image cap"></img>
    <div class="card-body">
      <h5 class="card-title">Perrito Tres </h5>
      <p class="card-text">perrito copiloto</p>
      <button type="button" class="btn btn-primary">Aprende mas de este perro</button>
      <button class="fa-solid fa-heart"></button>
    </div>
    </div>
  </div>
  <div class="container">
  <h1> Perritos 2.0 </h1>
  <div class="card"> 
    <img class="img-thumbnail" src="https://kaikucaffelatte.com/blog/wp-content/uploads/2021/10/memes-de-animales-3.png" alt="Card image cap"></img>
    <div class="card-body">
      <h5 class="card-title">Perrito Chascon</h5>
      <p class="card-text"> Perrito le falta peluquero</p>
      <button type="button" class="btn btn-primary">Aprende mas de este perro</button>
      <button class="fa-solid fa-heart"></button>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="https://i.pinimg.com/originals/af/b7/f7/afb7f7fec6c79aa3d76fe36158f938ff.jpg" alt="Card image cap"></img>
    <div class="card-body">
      <h5 class="card-title">Perrito Feliz</h5>
      <p class="card-text">Feliz por verte </p>
      <button type="button" class="btn btn-primary">Aprende mas de este perro</button>
      <button class="fa-solid fa-heart"></button>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="https://t2.ea.ltmcdn.com/es/posts/8/9/2/nombres_graciosos_para_perros_pequenos_23298_3_600.jpg" alt="Card image cap"></img>
    <div class="card-body">
      <h5 class="card-title">Perrito Mas feliz  </h5>
      <p class="card-text">Este esta mas feliz que el anterior</p>
      <button type="button" class="btn btn-primary">Aprende mas de este perro</button>
      <button class="fa-solid fa-heart"></button>
    </div>
  </div>
  </div>
  
</div>

 
);
};
