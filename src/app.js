/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function random() {
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
  } else {
    figura.style.color = "black";
    figuraInv.style.color = "black";
    numero.style.color = "black";
  }
}

window.onload = function() {
  random();
  setInterval(() => {
    random();
  }, 10000);

  let btn = document.querySelector(".btn");
  btn.addEventListener("click", function() {
    random();
  });

  let form = document.querySelector(".form-inline");

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    let card = document.querySelector("#card");
    let inputWidth = document.querySelector(".form-inline #width");
    let inputHeigth = document.querySelector(".form-inline #height");
    card.style.width = `${inputWidth.value}px`;
    card.style.height = `${inputHeigth.value}px`;
  });
};
