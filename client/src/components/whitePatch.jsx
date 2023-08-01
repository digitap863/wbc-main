import React from "react";

const RandomWhiteDiv = () => {
    const numberOfDivs = 25; // Adjust the number of divs as per your requirement

    const generateRandomPosition = () => {
        // Generate random x and y coordinates between 0 and 100
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 100;
        return { x: randomX, y: randomY };
    };

    return (
        <div className="absolute inset-0 pointer-events-none md:block hidden">
            {Array.from({ length: numberOfDivs }).map((_, index) => {
                const { x, y } = generateRandomPosition();
                return (
                      <div
                        key={index}
                        className="absolute bg-white h-80 w-80 rounded-full blur-3xl opacity-[0.06]"
                        style={{ left: `${x}%`, top: `${y}%` }}
                      ></div>
                );
            })}
        </div>
    );
};

export default RandomWhiteDiv;
