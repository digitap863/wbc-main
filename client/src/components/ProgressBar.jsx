import React, { useState, useEffect } from "react";

const ProgressBar = ({ percentage }) => {
    return (
        <div className="md:w-[40%] w-[80%] relative rounded-xl mx-auto h-8 bg-transparent border border-gray-500 p-[3px]">
            <div className="absolute flex justify-between md:w-[65%] w-[50%] mx-20 top-0">
                <div className="border border-r-0 h-8"></div>
                <div className="border border-r-0 h-8"></div>
            </div>
            <div
                className="h-full text-right  rounded-lg px-10 leading-22 bg-gradient-to-l font-space text-white from-[#080B2A] via-[#15bffd] to-[#9C37FD]"
                style={{ width: `${percentage}%` }}
            >
                {percentage}%
            </div>
        </div>
    );
};

const Countdown = () => {
    const fixedPercentage = 35;
    const [countdown, setCountdown] = useState({
        days: 365,
        hours: 23,
        minutes: 5,
        seconds: 2,
    });

    const getTotalSeconds = () => {
        const { days, hours, minutes, seconds } = countdown;
        return days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60 + seconds;
    };

    const [percentage, setPercentage] = useState(fixedPercentage);

    useEffect(() => {
        const totalSeconds = getTotalSeconds();
        const initialProgress = ((totalSeconds * fixedPercentage) / (365 * 24 * 60 * 60)).toFixed(0);
        setPercentage(initialProgress);

        const timer = setInterval(() => {
            setCountdown((prevCountdown) => {
                const { days, hours, minutes, seconds } = prevCountdown;
                if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
                    clearInterval(timer);
                    return prevCountdown;
                }

                let updatedDays = days;
                let updatedHours = hours;
                let updatedMinutes = minutes;
                let updatedSeconds = seconds - 1;

                if (updatedSeconds < 0) {
                    updatedMinutes -= 1;
                    updatedSeconds = 59;
                }
                if (updatedMinutes < 0) {
                    updatedHours -= 1;
                    updatedMinutes = 59;
                }
                if (updatedHours < 0) {
                    updatedDays -= 1;
                    updatedHours = 23;
                }

                const remainingSeconds =
                    updatedDays * 24 * 60 * 60 + updatedHours * 60 * 60 + updatedMinutes * 60 + updatedSeconds;

                const newPercentage = ((remainingSeconds * fixedPercentage) / (365 * 24 * 60 * 60)).toFixed(0);
                setPercentage(newPercentage);

                return {
                    days: updatedDays,
                    hours: updatedHours,
                    minutes: updatedMinutes,
                    seconds: updatedSeconds,
                };
            });
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className="flex flex-col mx-2 md:mx-16 items-center justify-center mt-20">
            <h1 className='text-white font-zen text-center text-xl md:text-3xl'>Seef Coin <span className='text-blue-500'>Coming Soon</span></h1>
            <div className="flex items-center">
                <div className="md:m-4">
                    <div className="border md:px-4 md:py-6 px-2 py-2 flex justify-center items-center rounded-lg border-sky-500 text-white font-zen">
                        {countdown.days}
                    </div>
                    <p className="text-center font-mont font-bold m-1 text-white">Days</p>
                </div>
                <span className="text-white font-bold text-xl -mt-9">:</span>
                <div className="m-4">
                    <div className="border md:px-4 md:py-6 px-2 py-2 flex justify-center items-center rounded-lg border-sky-500 text-white font-zen">
                        {countdown.hours.toString().padStart(2, "0")}
                    </div>
                    <p className="text-center font-mont font-bold m-1 text-white">Hours</p>
                </div>
                <span className="text-white font-bold text-xl -mt-9">:</span>
                <div className="m-4">
                    <div className="border md:px-4 md:py-6 px-2 py-2 flex justify-center items-center rounded-lg border-sky-500 text-white font-zen">
                        {countdown.minutes.toString().padStart(2, "0")}
                    </div>
                    <p className="text-center font-mont font-bold m-1 text-white">Minutes</p>
                </div>
                <span className="text-white font-bold text-xl -mt-9">:</span>
                <div className="m-4">
                    <div className="border md:px-4 md:py-6 px-2 py-2 flex justify-center items-center rounded-lg border-sky-500 text-white font-zen">
                        {countdown.seconds.toString().padStart(2, "0")}
                    </div>
                    <p className="text-center font-mont font-bold m-1 text-white">Seconds</p>
                </div>
            </div>
            <div className="w-full text-sm flex flex-col justify-center items-center">
                <div className="text-sky-500 md:text-base text-xs w-[80%] font-mont font-extrabold flex justify-between m-3 md:w-[45%]">
                    <p>Seef Coins</p>
                    <p>Total Coins</p>
                </div>
                <ProgressBar percentage={percentage} />
                <div className="text-white md:text-base text-xs font-zen w-[80%] flex justify-between m-3 md:w-[35%]">
                    <p>500 Cr Seef Coins</p>
                    <p>1000 Cr</p>
                </div>
            </div>
        </div>
    );
};

export default Countdown;
