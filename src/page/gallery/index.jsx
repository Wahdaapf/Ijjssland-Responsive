import React, { useState } from "react";
import Card from "./card";
import gallery1 from "/src/assets/images/gallery/gallery1.png";
import gallery2 from "/src/assets/images/gallery/gallery2.png";
import gallery3 from "/src/assets/images/gallery/gallery3.png";
import gallery4 from "/src/assets/images/gallery/gallery4.png";
import gallery5 from "/src/assets/images/gallery/gallery5.png";
import gallery6 from "/src/assets/images/gallery/gallery6.png";
import gallery7 from "/src/assets/images/gallery/gallery7.png";

const Gallery = () => {
    const [imageData, setImageData] = useState([
        { name: gallery1, status: "0" },
        { name: gallery2, status: "0" },
        { name: gallery3, status: "0" },
        { name: gallery4, status: "0" },
        { name: gallery5, status: "0" },
        { name: gallery6, status: "0" },
        { name: gallery7, status: "0" },
    ]);

    const handleCardClick = (index) => {
        const updatedImageData = [...imageData];
        updatedImageData[index].status = updatedImageData[index].status === "0" ? "1" : "0";
        setImageData(updatedImageData);
    };

    return (
        <div className="flex w-full justify-center">
            <div id="cbar" className="cbar container mt-8 md:mt-24 overflow-auto h-[90vh] md:h-[66vh] lg:h-[55vh]">
                <div className="w-full flex flex-wrap justify-center items-center">
                    {imageData.map((data, index) => (
                        <Card key={index} image={data.name} status={data.status} onClick={() => handleCardClick(index)} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
