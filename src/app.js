/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  console.log("Hello Rigo from the console!");
};

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];
const obtenerElementoRandom = listaElementos => {
  let elemento = " ";
  elemento = listaElementos[Math.floor(Math.random() * listaElementos.length)];
  console.log(elemento);
  return elemento;
};
const onLoad = () => {
  let generarExcusa = document.querySelector("#excuse");
  generarExcusa.innerHTML =
    obtenerElementoRandom(who) +
    " " +
    obtenerElementoRandom(action) +
    " " +
    obtenerElementoRandom(what) +
    " " +
    obtenerElementoRandom(when);
  console.log(generarExcusa);
};
onLoad();
