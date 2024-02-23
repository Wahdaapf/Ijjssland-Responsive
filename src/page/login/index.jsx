import React from "react";
import Main from "../../layout/index.jsx";
import inputImage from "../../assets/base/input.png";
import buttonBg from "../../assets/base/button.png";

const Login = () => {
    return (
        <div className="z-20 w-full h-full flex justify-center py-10">
            <div className="m-auto h-full overflow-auto w-[80vw] md:w-[70vw] lg:w-[70vw] flex flex-col items-center justify-start text-white p-4 pt-4 md:pt-10 lg:pt-10">
                <p style={{ fontFamily: "Proxima Nova" }} className="text-4xl lg:text-4xl xl:text-xl text-center md:pt-10 md:p-0 md:pb-4 lg:pb-0 pb-0 font-thin">
                    WELKOM BIJ
                </p>
                <h1 style={{ fontFamily: "Proxima Nova" }} className="tabb text-4xl md:text-5xl xl:text-3xl font-bold text-center p-2 md:p-0 mb-4 ">
                    DE GEVAARLIJKE STOFFEN GAME
                </h1>
                <p style={{ fontFamily: "Proxima Nova" }} className="text-center font-thin text-xl md:text-2xl lg:text-xl">
                    Aan het einde van deze game, ben jij een nieuwe expert op het gebied van gevaarlijke stoffen. <br /> Om te starten, vul je naam en afdeling in.
                </p>
                <div>
                    <div className="flex justify-end items-center mt-4 md:mt-12 lg:mt-4">
                        <p style={{ fontFamily: "Proxima Nova" }} className="text-white mr-2 text-xl md:text-2xl lg:text-xl">
                            Naam
                        </p>
                        <div className="relative h-[6vh] md:h-[6vh] lg:h-[40px]">
                            <img src={inputImage} alt="Gambar" className="w-40 md:w-80 h-full " />
                            <input type="text" className="absolute inset-1 w-36 md:w-80 h-auto text-white" />
                        </div>
                    </div>
                    <div className="flex justify-end items-center mt-4 md:mt-8 lg:mt-4">
                        <p style={{ fontFamily: "Proxima Nova" }} className="text-white mr-2 text-xl md:text-2xl lg:text-xl">
                            Afdeling
                        </p>
                        <div className="relative h-[6vh] md:h-[6vh] lg:h-[40px]">
                            <img src={inputImage} alt="Gambar" className="w-40 md:w-80 h-full " />
                            <input type="text" className="absolute inset-1 w-36 md:w-80 h-auto text-white" />
                        </div>
                    </div>
                </div>
                <button className="flex relative items-center justify-center h-auto w-[60%] md:w-[40%] lg:w-[30%] p-3 text-center mt-12 bg-no-repeat">
                    <p className="text-white text-center text-xl">Login</p>
                    <div className="absolute w-full h-full">
                        <img src={buttonBg} alt="" className="w-full h-full" />
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Login;
