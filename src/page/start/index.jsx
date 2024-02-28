import React from "react";
import Main from "../../layout/index.jsx";
import inputImage from "../../assets/base/button.png";
import buttonBg from "../../assets/base/button.png";
import { Link } from "react-router-dom";

const Start = () => {
    return (
        <div className="z-20 w-full h-full flex justify-center py-10">
            <div className="no-scroll m-auto h-full overflow-auto w-[80vw] md:w-[80vw] lg:w-[70vw] flex flex-col items-center justify-start text-white p-4 pt-4 md:pt-10 lg:pt-10">
                <h1 style={{ fontFamily: "Proxima Nova" }} className="text-3xl md:text-6xl lg:text-3xl 2xl:text-5xl font-bold text-center p-2 md:p-10 lg:p-4 2xl:p-10">
                    BETA TEST
                </h1>
                <p style={{ fontFamily: "Proxima Nova" }} className="text-sm mt-4 md:mt-0 lg:mt-0 font-thin md:text-xl lg:text-xl 2xl:text-2xl">
                    Bedankt voor het meedoen aan de bètatest. Dit spel is een training over gevaarlijke stoffen, bedoeld om medewerkers van het IJsselland Ziekenhuis te leren hoe om te gaan met gevaarlijke stoffen. <br />
                    <br /> Het doel van deze test is om te observeren hoe het spel functioneert bij de medewerkers en om feedback te verzamelen over zowel het spel als de inhoud ervan. Om ons in staat te stellen mee te kijken tijdens het
                    spel, zouden we het zeer waarderen als je je scherm kunt opnemen tijdens het spelen. <br />
                    <br /> In het spel is een feedbackknop ingebouwd, maar je kunt je feedback en video ook mailen naar Feedback@expinc.io. <br />
                    <br /> Bekijk de volgende video voor een korte uitleg over hoe je je scherm opneemt. <br />
                    <br /> Bedankt voor je deelname aan de test en veel plezier!
                </p>
                <Link to="login" className="flex relative items-center justify-center h-auto w-[60%] md:w-[40%] lg:w-[30%] p-3 text-center mt-12 bg-no-repeat">
                    <p className="text-white text-center text-xl">Verder</p>
                    <div className="absolute w-full h-full">
                        <img src={buttonBg} alt="" className="w-full h-full" />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Start;
