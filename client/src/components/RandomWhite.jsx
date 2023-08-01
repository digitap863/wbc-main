import React from 'react'

function RandomStars() {
    const numberOfDivs = 25; // Adjust the number of divs as per your requirement

    const generateRandomPosition = () => {
        // Generate random x and y coordinates between 0 and 100
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 100;
        return { x: randomX, y: randomY };
    };
  return (
    <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: numberOfDivs }).map((_, index) => {
                const { x, y } = generateRandomPosition();
                return (
                    <div key={index} className="absolute animate-pulse opacity-75" style={{ left: `${x}%`, top: `${y}%` }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="17" viewBox="0 0 15 17" fill="none">
                            <path d="M5.96575 0.957844L5.24064 7.0003L0.562735 9.85285L5.93075 10.9502L8.66181 16.3888L9.38692 10.3463L14.0648 7.4938L8.6968 6.39645L5.96575 0.957844Z" fill="#15BFFD" />
                        </svg>
                    </div>
                );
            })}
        </div>
  )
}

export default RandomStars