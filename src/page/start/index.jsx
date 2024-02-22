import React from "react";
import Main from "../../layout/index.jsx";
import inputImage from "../../assets/base/button.png";

const Start = () => {
  return (
    <Main className="flex justify-center">
      <div className="m-auto h-screen lg:h-[70vh] w-[90cw] md:w-[70vw] lg:w-[50vw] flex flex-col text-white p-4">
        <h1
          style={{ fontFamily: "Proxima Nova" }}
          className="text-3xl font-bold text-center p-2 md:p-8 lg:p-14"
        >
          BETA TEST
        </h1>
        <p style={{ fontFamily: "Proxima Nova" }} className="">
          Bedankt voor het meedoen aan de bètatest. Dit spel is een training
          over gevaarlijke stoffen, bedoeld om medewerkers van het IJsselland
          Ziekenhuis te leren hoe om te gaan met gevaarlijke stoffen. <br />
          <br /> Het doel van deze test is om te observeren hoe het spel
          functioneert bij de medewerkers en om feedback te verzamelen over
          zowel het spel als de inhoud ervan. Om ons in staat te stellen mee te
          kijken tijdens het spel, zouden we het zeer waarderen als je je scherm
          kunt opnemen tijdens het spelen. <br />
          <br /> In het spel is een feedbackknop ingebouwd, maar je kunt je
          feedback en video ook mailen naar Feedback@expinc.io. <br />
          <br /> Bekijk de volgende video voor een korte uitleg over hoe je je
          scherm opneemt. <br />
          <br /> Bedankt voor je deelname aan de test en veel plezier!
        </p>
      </div>
    </Main>
  );
};

export default Start;
