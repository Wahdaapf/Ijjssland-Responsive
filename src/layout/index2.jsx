import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import bg from "/public/border_desktop.png";
import bgTab from "/public/border_ipad.png";
import bgPhone from "/public/border_phone.png";
import bawah1 from "/public/bawah1.png";
import bawah2 from "/public/bawah2.png";
import base1 from "/public/base11.png";
import base2 from "/public/base22.png";
import bawah1Tab from "/public/bawah1_tab.png";
import bawah2Tab from "/public/bawah2_tab.png";
import atas from "/public/atas.png";
import atasTab from "/public/atas_tab.png";
import atasKiri from "/public/atas-kiri.png";
import atasKiriTab from "/public/atas-kiri_tab.png";
import header from "/public/header.png";
import EditIcon from "../assets/base/button_edit.png";
import FullIcon from "../assets/base/button_fullscreen.png";

const Main2 = ({ children }) => {
    const [bgImage, setBgImage] = useState(atasTab);
    const [buttonBack, setButtonBack] = useState(atasKiriTab);
    const [bawah11, setBawah11] = useState(bawah1);
    const [bawah22, setBawah22] = useState(bawah2);

    useEffect(() => {
        const handleResize = () => {
            const windowWidth = window.innerWidth;
            if (windowWidth < 640) {
                setBgImage(atasTab);
                setButtonBack(atasKiriTab);
                setBawah22(bawah2Tab);
                setBawah11(bawah1Tab);
            } else if (windowWidth < 768) {
                setBgImage(atasTab);
                setButtonBack(atasKiriTab);
                setBawah22(bawah2Tab);
                setBawah11(bawah1Tab);
            } else {
                setBgImage(atas);
                setButtonBack(atasKiri);
                setBawah22(bawah2);
                setBawah11(bawah1);
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

    const handleFullscreen = () => {
        const element = document.documentElement;
        const fullScreenFunction = () => {
            if (document.fullscreenElement) {
                document.exitFullscreen();
            } else {
                element.requestFullscreen().catch((err) => {
                    console.error("Error attempting to enable full-screen mode:", err.message);
                });
            }
        };

        const userAgent = navigator.userAgent;

        if (/Android/.test(userAgent)) {
            fullScreenFunction();
        } else {
            fullScreenFunction();
        }
    };

    return (
        <div id="root2">
            <div id="bungkus" className="relative w-full h-[100dvh] bg-bintang1 flex flex-col items-center justify-center py-8 px-5">
                <div className="absolute w-full flex bottom-0 left-0 items-center justify-end">
                    <img src={bawah11} alt="" className="w-40 sm:w-100 md:w-2/5 lg:w-1/3 h-auto sm:h-24 md:h-40 lg:h-24" />
                </div>
                <div className="absolute w-full flex bottom-0 left-0 items-center justify-start">
                    <img src={bawah22} alt="" className="w-40 sm:w-100 md:w-2/5 lg:w-1/3 h-auto sm:h-24 md:h-40 lg:h-24" />
                </div>
                <div className="absolute w-full flex top-0 left-0 items-center justify-start">
                    <div style={{ fontFamily: "Proxima Nova" }} className="absolute text-sm md:text-3xl text-primary left-4 md:left-16 mt-[-15px]">
                        &lt; Terug
                    </div>
                    <img src={buttonBack} alt="" className="w-200 h-16 sm:h-32" />
                </div>
                <div className="relative mt-5 w-full h-full flex flex-col items-center">
                    <div className="absolute w-[60vw] md:w-[65vw] lg:w-[864px] mr-[-16vw] md:mr-[-28vw] lg:mr-[0px] top-[-53px] md:top-[-53px] select-none z-30">
                        <div className="absolute left-5" onClick={handleFullscreen}>
                            <img src={base1} className="w-12 md:w-28" alt="" />
                        </div>
                        <div className="absolute right-5">
                            <img src={base2} className="w-12 md:w-28" alt="" />
                        </div>
                        <div className="absolute left-[50%] mt-0 md:mt-2 translate-x-[-50%]">
                            <p style={{ fontFamily: "Proxima Nova" }} className="text-white text-center sm:text-3xl md:text-5xl font-bold">
                                Foto's
                            </p>
                            <p style={{ fontFamily: "Proxima Nova" }} className="text-white text-[7px] md:text-base lg:text-lg text-center">
                                wat val onder specifiek ziekenhuis afval? vink deze items aan
                            </p>
                        </div>
                        <img src={bgImage} alt="" className="md:h-32 w-full select-none" />
                    </div>
                    <div className="w-full h-full overflow-hidden absolute left-0 top-0 z-20">
                        {children}
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main2;
