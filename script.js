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
  tellMeAJoke(joke);
}

function tellMeAJoke(joke) {
  VoiceRSS.speech({
    key: "5ff4b1b6ab8143f488a977bc3a2f2a9c",
    src: joke,
    hl: "en-us",
    v: "John",
    r: 0,
    c: "mp3",
    f: "44khz_16bit_stereo",
    ssml: false,
  });
}

btn.addEventListener("click", getDataFromApi);
