/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const cardGen = () => {
  const centerValue = ["A", "K", "Q", "J", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const palos = ["&hearts;", "&spades;", "&diams;", "&clubs;"];

  const randomElement = element => {
    return element[Math.floor(Math.random() * element.length)];
  };

  let randomPalo = randomElement(palos);

  const palo = document.querySelector(".palo");
  palo.innerHTML = randomPalo;

  const centerElement = document.querySelector(".center");
  centerElement.innerHTML = randomElement(centerValue);

  const palo2 = document.querySelector(".palo.reverse");
  palo2.innerHTML = randomPalo;

  const colorChanger = () => {
    if (randomPalo == "&hearts;" || randomPalo == "&diams;") {
      document.querySelector(".black").style.color = "red";
      document.querySelector(".black.ps-3.pb-2").style.color = "red";
    } else {
      const blackElements = document.querySelectorAll(".black");
      for (let i = 0; i < blackElements.length; i++) {
        blackElements[i].style.color = "black";
      }
    }
  };
  colorChanger(palos);

  const botton = document.querySelector("#btn-gen");
  botton.addEventListener("click", cardGen);
};
window.onload = function() {
  cardGen();
};
