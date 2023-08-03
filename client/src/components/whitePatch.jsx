import React, { memo } from "react";

const RandomWhiteDiv = ({ num }) => {
  const numberOfDivs = num; // Adjust the number of divs as per your requirement

  const generateRandomPosition = () => {
    // Generate random x and y coordinates between 0 and 100
    const randomX = Math.random() * 50; // Random value between 0 and 50
    const isLeftSide = Math.random() < 0.5; // Randomly determine whether to be on the left or right side
    const x = isLeftSide ? randomX - 10 : randomX + 60; // If left side, shift to the left (subtract 10), else shift to the right (add 60)
    const randomY = Math.random() * 100;
    return { x, y: randomY };
  };

  return (
    <div className="absolute inset-0 pointer-events-none hidden w-full md:flex justify-between">
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

export default memo(RandomWhiteDiv);
