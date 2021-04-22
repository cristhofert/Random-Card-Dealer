/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  var figuras = ["♦", "♥", "♠", "♣"];
  var numeros = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  var indiceFigura = Math.floor(Math.random() * figuras.length);
  var indiceNumero = Math.floor(Math.random() * numeros.length);

  let figura = document.querySelector(".figura");
  figura.innerHTML = `<h1>${figuras[indiceFigura]}</h1>`;

  let figuraInv = document.querySelector(".invertida");
  figuraInv.innerHTML = `<h1>${figuras[indiceFigura]}</h1>`;

  let numero = document.querySelector(".numero");
  numero.innerHTML = `<h1>${numeros[indiceNumero]}</h1>`;

  if (indiceFigura <= 1) {
    figura.style.color = "red";
    figuraInv.style.color = "red";
    numero.style.color = "red";
  }
};
