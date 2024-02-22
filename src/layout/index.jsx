import React from "react";
import { Outlet } from "react-router-dom";

const Main = ({ children }) => {
    return (
        <main className="w-screen h-screen bg-bintang relative">
            {children}
            <Outlet />
        </main>
    );
};

export default Main;
