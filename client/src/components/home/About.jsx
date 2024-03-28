import React from "react";
import AboutWeb from "../../assets/about_will.png";
import AboutWill from "../../assets/about_will.jpg";

export default function About() {
  return (
    <div
      id="about-container"
      className="h-full flex flex-col justify-center items-center"
    >
      <div id="col-wrapper" className="flex flex-col md:flex-col p-8 h-full">
        <div id="about-me-container" className="lg:h-1/2 py-8">
          <div id="about-site-wrapper" className="h-full">
            <h2 className="text-5xl">About Me</h2>

            <div className="md:flex">
              <img
                className="rounded-full h-60 lg:order-last py-2"
                src={AboutWill}
                alt="Page Splash image"
              />
              <p className="p-4 text-2xl">
                Hello! I am a software developer with a Computer Science degree
                From UCF. I love writing code and problem solving. I am most
                experienced in web development, and I have strong programming
                foundations that help me learn new technologies quickly. My
                experience in the service industry has allowed me to develop
                strong interpersonal skills that I leverage to faciliate a
                positive evironment in every team I am a part of.
              </p>
            </div>
          </div>
        </div>

        <div id="about-site-container" className="lg:h-1/2 py-8">
          <div id="about-site-wrapper" className="h-full">
            <h2 className="text-5xl lg:text-end">About This Website</h2>

            <div className="md:flex justify-center">
              <img
                className="rounded-full h-60 py-2"
                src={AboutWeb}
                alt="Page Splash image"
              />
              <p className="p-4 text-2xl">
                Thank you for visiting my web page! The purpose of this page is
                to showcase my professional and technical skills and to act as a
                personal creative outlet. If you do not like smooth scroll,
                disable it via the navigation bar above. Additionally, My
                resume, also available above, is a much more concise version of
                the information here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}