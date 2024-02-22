import React from "react";
import Main from "../../layout";
import inputImage from "../../assets/base/input.png";

const Login = () => {
    return (
        <Main>
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-white">WELKOM BIJ</h1>
                <h1 className="text-white">DE GEVAARLIJKE STOFFEN GAME</h1>
                <p className="text-white">Aan het einde van deze game, ben jij een nieuwe expert op het gebied van gevaarlijke stoffen. Om te starten, vul je naam en afdeling in.</p>
                <div>
                    <div className="flex">
                        <p className="text-white">Naam</p>
                        <img src={inputImage} alt="Gambar" className="absolute inset-0 w-40 h-auto object-cover" />
                        <div className="relative">
                            <input className="bg-none absolute inset-0 w-full h-full" type="text" />
                        </div>
                    </div>
                    <div className="flex">
                        <p className="text-white">Naam</p>
                        <input type="text" />
                    </div>
                </div>
                <button className="text-white">Login</button>
            </div>
        </Main>
    );
};

export default Login;
