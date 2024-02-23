import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import bg from "/public/border_desktop.png";
import bgTab from "/public/border_ipad.png";
import bgPhone from "/public/border_phone.png";
import header from "/public/header.png";
import EditIcon from "../assets/base/button_edit.png";
import FullIcon from "../assets/base/button_fullscreen.png";

const Main = ({ children }) => {
    const [bgImage, setBgImage] = useState(bgTab);

    useEffect(() => {
        const handleResize = () => {
            const windowWidth = window.innerWidth;
            if (windowWidth < 640) {
                setBgImage(bgPhone);
            } else if (windowWidth < 768) {
                setBgImage(bgTab);
            } else {
                setBgImage(bg);
            }
        };

        // Initial check on mount
        handleResize();

        // Add event listener for window resize
        window.addEventListener("resize", handleResize);

        // Cleanup on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div id="bungkus" className="relative w-full h-screen bg-bintang flex flex-col items-center justify-center py-8 px-5">
            <div className="absolute w-full flex top-2 right-2 items-center justify-end">
                <button className="w-5 sm:w-10 h-5 sm:h-10 me-5">
                    <img src={FullIcon} alt="" className="w-auto h-auto" />
                </button>
                <button className="w-5 sm:w-10 h-5 sm:h-10 me-2">
                    <img src={EditIcon} alt="" className="w-auto h-auto" />
                </button>
            </div>
            <div className="relative mt-5 w-full h-full flex flex-col items-center">
                <div className="absolute w-[200px] md:w-[355px] top-[-20px] md:top-[-10px] select-none z-30">
                    <img src={header} alt="" className="w-full select-none" />
                </div>
                <div className="absolute w-full h-full top-0 left-0 select-none z-10">
                    <img src={bgImage} alt="" className="w-full h-full select-none" />
                </div>
                <div className="w-full h-full overflow-hidden absolute left-0 top-0 z-20">
                    {children}
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Main;
