import React from "react";
import { Link } from "react-router-dom";

import BingoThumb from "../../assets/thumbnails/bingoThumb2.jpg";
import ApplePickerThumb from "../../assets/thumbnails/applePickerThumb.png";
import TypeRacerThumb from "../../assets/thumbnails/typeRacerThumb.png";

const bingoDesc =
  "Test your Bingo skills against the world's finest players over the web.";
const applePickerDesc =
  "Collect apples as they fall and use the seeds to plant new trees!";
const typeRacerDesc =
  "Blaze through bite-sized typing promps to improve your skills as a typist.";

export default function Demo(props) {
  return (
    <div id="projects-container" className="flex flex-col w-full h-full">
      <div>
        <h1 className="h-fit p-4 pt-28 w-full text-5xl">Demos</h1>
      </div>
      <div
        id="Demo-card-container"
        className="flex w-full flex-wrap h-full justify-center"
      >
        <div id="Bingo-card-container" className="w-full p-4 md:w-1/3">
          <Link to={"/Bingo"}>
            <div
              id="bingo-card"
              className="w-full mx-auto border-2 rounded-xl min-h-fit p-4  md:h-5/6"
            >
              <img
                src={BingoThumb}
                className="object-container mx-auto rounded-xl w-full"
              />
              <div>
                <h1 className="py-4 text-xl">Bingo</h1>
                <p>
                  Multiplayer single instance bingo game with in-game chat. Rest
                  API, React, websocket demo.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div id="ApplePicker-card-container" className="w-full p-4 md:w-1/3">
          <Link to={"/TypeRacer"}>
            <div
              id="typeracer-picker-card"
              className="w-full mx-auto border-2 rounded-xl min-h-fit p-4  md:h-5/6"
            >
              <img
                src={TypeRacerThumb}
                className="object-container mx-auto rounded-xl w-full"
              />
              <div>
                <h1 className="text-secondary py-4 text-xl">TypeRacer</h1>
                <p>
                  Test your typing speed againt a random selection of sentences
                  from API Ninjas!. Write and test your own custom sentences.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
