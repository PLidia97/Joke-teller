"use strict";

const btn = document.getElementById("joke-btn");
const container = document.querySelector(".joke-container");

function deliverJoke(joke) {
  container.textContent = joke;
}

async function getDataFromApi() {
  const url =
    "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=religious,racist,sexist";
  let joke = "";

  try {
    const response = await fetch(url); //asteptam dupa raspunsul api-ului

    const data = await response.json(); //asteptam sa fie transformat in json

    if (data.setup) {
      joke = `${data.setup} ... ${data.delivery}`;
    } else {
      joke = data.joke;
    }
  } catch (err) {
    console.log("Eroare Api: " + err);
  }
  deliverJoke(joke);
}

getDataFromApi();

btn.addEventListener("click", getDataFromApi);
