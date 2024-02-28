import React, { useState } from "react";
import gallery1 from "/src/assets/images/gallery/gallery1.png";
import check from "/src/assets/base/gallery_check.png";
import check1 from "/src/assets/base/gallery_check1.png";
import zoom from "/src/assets/base/gallery_zoom.png";

const Card = ({ image, status, onClick }) => {
    const [isChecked, setIsChecked] = useState(status === "1");

    const handleCheckClick = () => {
        setIsChecked(!isChecked);
        onClick(!isChecked); // Pass the updated status to the parent component
    };

    return (
        <div className="relative w-[40%] m-2 md:m-5 lg:w-[20%] md:w-[40%] sm:w-[50%] h-[40%]">
            <div className="absolute w-full flex top-2 left-2 items-center justify-start">
                <img src={zoom} alt="" className="w-15 h-15" />
            </div>
            <div className="absolute w-full flex top-2 right-2 items-center justify-end" onClick={handleCheckClick}>
                <img src={isChecked ? check1 : check} alt="" className="cursor-pointer w-10 lg:w-25 sm:h-10 lg:h-15" />
            </div>
            <img src={image} alt="" />
        </div>
    );
};

export default Card;
