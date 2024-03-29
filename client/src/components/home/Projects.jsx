import React from "react";
import bootstrap from "../../assets/icons/bootstrap.svg";
import canva from "../../assets/icons/canva.svg";
import confluence from "../../assets/icons/confluence.svg";
import figma from "../../assets/icons/figma.svg";
import javascript from "../../assets/icons/javascript.svg";
import jira from "../../assets/icons/jira.svg";
import material_ui from "../../assets/icons/material-ui.svg";
import mongodb from "../../assets/icons/mongodb.svg";
import mysql from "../../assets/icons/mysql.svg";
import nodejs from "../../assets/icons/nodejs.svg";
import prisma from "../../assets/icons/prisma.svg";
import react from "../../assets/icons/react.svg";
import steam from "../../assets/icons/steam.svg";
import typescript from "../../assets/icons/typescript.svg";
import vite from "../../assets/icons/vite.svg";

export default function Projects() {
  return (
    <div id="projects-container" className="flex flex-col w-full">
      <div>
        <h1 className="h-fit w-full p-8 lg:pl-18 text-5xl ">Projects</h1>
      </div>
      <div className="flex-grow">
        <div
          id="col-container"
          className="h-full flex flex-wrap flex-grow w-full justify-start xl:justify-center "
        >
          <div id="tank-container" className="w-full lg:w-1/2 flex p-8">
            <div id="tank-wrapper" className="w-full">
              <h1 className="text-3xl md:text-4xl">Tanknicians</h1>
              <div className="flex md:flex-col">
                <div id="tank-text" className="p-2">
                  <h2 className="text-xl ">Business Management Platform</h2>
                  <div className="ml-4">
                    <ul className="list-disc">
                      <li>UCF BS, CS Capstone Project</li>
                      <li>React App with MUI</li>
                      <li>React Native cross-platform Mobile App</li>
                      <li>Node.js server with Express</li>
                      <li>SQL database with Prisma</li>
                      <li>Atlassian suit, Agile Methodology</li>
                    </ul>
                  </div>
                  <h2 className="text-xl py-2">My Role</h2>
                  <div className="ml-4">
                    <ul className="list-disc">
                      <li>Client advocate</li>
                      <li>Web App UX/UI designer</li>
                      <li>Web App routing and layout architect</li>
                      <li>Front-end Software developer</li>
                      <li>Stand-up and sprint planner</li>
                    </ul>
                  </div>
                  <h2 className="text-xl py-2">
                    <a>Gallery</a>
                  </h2>
                </div>
                <div id="tank-icons-container" className="">
                  <div
                    id="tank-ions-wrapper"
                    className="flex flex-col md:flex-row"
                  >
                    <a
                      title="TypeScript"
                      className="w-12 m-2 p-1 bg-white rounded"
                    >
                      <img src={typescript} alt="TypeScript icon" />
                    </a>

                    <a title="React" className="w-12 m-2 p-1 bg-white rounded">
                      <img src={react} alt="React icon" />
                    </a>
                    <a
                      title="Material UI"
                      className="w-12 m-2 p-1 bg-white rounded"
                    >
                      <img src={material_ui} alt="MUI icon" />
                    </a>

                    <a title="Prisma" className="w-12 m-2 p-1 bg-white rounded">
                      <img src={prisma} alt="Prisma icon" />
                    </a>
                    <a title="Jira" className="w-12 m-2 p-1 bg-white rounded">
                      <img src={jira} alt="Jira icon" />
                    </a>

                    <a title="Figma" className="w-12 m-2 p-1 bg-white rounded">
                      <img src={figma} alt="Figma icon" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="games-container" className="w-full  lg:w-1/2 p-8 flex">
            <div id="games-wrapper" className="w-full">
              <h1 className="text-3xl md:text-4xl">My Games List</h1>
              <div className="flex md:flex-col">
                <div id="game-text" className="p-2">
                  <h2 className="text-xl py-2">Video Game stat-tracker</h2>
                  <div className="ml-4">
                    <ul className="list-disc">
                      <li>MERN Stack Web Application</li>
                      <li>React App with Bootstrap</li>
                      <li>Node.js server with Express</li>
                      <li>MongoDB NoSQL database</li>
                    </ul>
                  </div>
                  <h2 className="text-xl py-2">My Role</h2>
                  <div className="ml-4">
                    <ul className="list-disc">
                      <li>Software developer</li>
                      <li>API architect</li>
                      <li>Steam API integrator</li>
                      <li>Json Web Token integration</li>
                    </ul>
                  </div>
                  cs
                  <h2 className="text-lg py-2">
                    <a>Gallery</a>
                  </h2>
                </div>
                <div id="game-icons-container" className="">
                  <div
                    id="game-ions-wrapper"
                    className="flex flex-col md:flex-row"
                  >
                    <a
                      title="JavaScript"
                      className="w-12 m-2 p-1 bg-white rounded"
                    >
                      <img src={javascript} alt="JavaScript icon" />
                    </a>
                    <a title="React" className="w-12 m-2 p-1 bg-white rounded">
                      <img src={react} alt="React icon" />
                    </a>
                    <a
                      title="Bootstrap"
                      className="w-12 m-2 p-1 bg-white rounded p-1 bg-white rounded"
                    >
                      <img src={bootstrap} alt="Bootstrap icon" />
                    </a>
                    <a
                      title="MongoDB"
                      className="w-12  m-2 p-1 bg-white rounded"
                    >
                      <img src={mongodb} alt="MongoDB icon" />
                    </a>

                    <a title="Steam" className="w-12 m-2 p-1 bg-white rounded">
                      <img src={steam} alt="Steam Icon" />
                    </a>
                    <a
                      title="Canva"
                      className="w-12 m-2 p-1 bg-white rounded p-1 bg-white rounded"
                    >
                      <img src={canva} alt="Canva icon" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
