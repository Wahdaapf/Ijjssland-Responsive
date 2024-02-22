import React from "react";
import Main from "../../layout";

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
                        <input className="bg-none" type="text" />
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
