import React, { useState, useRef, useEffect } from 'react';
import video from '../assets/video/videoplayback.mp4';

function AdComponent() {
    const [question, setQuestion] = useState('');
    const [options, setOptions] = useState([]);
    const [correctAnswer, setCorrectAnswer] = useState('');
    const [showQuestion, setShowQuestion] = useState(false);
    const videoRef = useRef(null);

    // Define your questions and answers here
    const questionsData = [
        {
            question: 'What is the capital of France?',
            options: ['London', 'Berlin', 'Paris', 'Madrid'],
            correctAnswer: 'Paris',
        },
        {
            question: 'Which planet is closest to the Sun?',
            options: ['Mars', 'Venus', 'Mercury', 'Jupiter'],
            correctAnswer: 'Mercury',
        },
        {
            question: 'What is the largest mammal on Earth?',
            options: ['Elephant', 'Giraffe', 'Blue Whale', 'Tiger'],
            correctAnswer: 'Blue Whale',
          },
          {
            question: 'Who painted the Mona Lisa?',
            options: ['Leonardo da Vinci', 'Vincent van Gogh', 'Pablo Picasso', 'Michelangelo'],
            correctAnswer: 'Leonardo da Vinci',
          },
    ];

    const showRandomQuestion = () => {
        const randomIndex = Math.floor(Math.random() * questionsData.length);
        const randomQuestion = questionsData[randomIndex];
        setQuestion(randomQuestion.question);
        setOptions(randomQuestion.options);
        setCorrectAnswer(randomQuestion.correctAnswer);
        setShowQuestion(true);
        // Pause the video when the question is shown
        videoRef.current.pause();
    };
    function call(r){
        const intervasl = setTimeout(() => {
            r();
        }, 10000);
    }

    useEffect(() => {
        // Function to show a random question and its options
        // const showRandomQuestion = () => {
        //     const randomIndex = Math.floor(Math.random() * questionsData.length);
        //     const randomQuestion = questionsData[randomIndex];
        //     setQuestion(randomQuestion.question);
        //     setOptions(randomQuestion.options);
        //     setCorrectAnswer(randomQuestion.correctAnswer);
        //     setShowQuestion(true);
        //     // Pause the video when the question is shown
        //     videoRef.current.pause();
        // };

        // Show the first question when the component mounts

        // Set up the interval to show a new question every 3 seconds
        // const interval = setInterval(() => {
        //     showRandomQuestion();
        // }, 10000);
        call(showRandomQuestion)

        // Clean up the interval when the component is unmounted
        // return () => clearInterval(interval);
    }, []);


    const handleOptionClick = (option) => {
        if (option === correctAnswer) {
            setShowQuestion(false);
            call(showRandomQuestion)
            // return () => clearInterval(interval);
            // Resume the video if the user picks the correct option
            videoRef.current.play();
        } else {
            // Play the video from the beginning if the user picks the wrong option
            videoRef.current.currentTime = 0;
            videoRef.current.play();
        }
    };

    return (
        <div className='lg:mx-40 mx-3 my-16'>
            <div className='relative group md:mx-20 mt-20 mb-10'>
                <div className="absolute flex -inset-[3px] animate-pulse  opacity-75 group-hover:opacity-100 group-hover:blur-sm transition duration-1000 group-hover:duration-200 animate-tilt">
                    <div className='w-1/2 bg-gradient-to-l rounded-3xl from-[#080B2A] via-[#15bffd] to-[#9C37FD]'></div>
                    <div className='w-1/2 bg-gradient-to-r rounded-3xl from-[#080B2A] via-[#15bffd] to-[#9C37FD]'></div>
                </div>
                <div className='relative bg-[#080B2A] rounded-3xl'>
                    <div className='bg-white w-full md:p-5 p-3 rounded-3xl flex justify-center items-center flex-col bg-opacity-5'>
                        <p className='text-white'>WBC</p>
                        <h3 className='text-white font-zen text-xl md:text-4xl'>How Our Ad Works ?</h3>
                        <p className='text-slate-300 font-mont text-sm font-semibold '>Demo Ad</p>
                    </div>
                </div>
            </div>
            <div className='relative group md:mx-24 mt-10 mb-10'>
                <div className="absolute flex -inset-[3px] animate-pulse  opacity-75 group-hover:opacity-100 group-hover:blur-sm transition duration-1000 group-hover:duration-200 animate-tilt">
                    <div className='w-1/2 bg-gradient-to-l rounded-3xl from-[#080B2A] via-[#15bffd] to-[#9C37FD]'></div>
                    <div className='w-1/2 bg-gradient-to-r rounded-3xl from-[#080B2A] via-[#15bffd] to-[#9C37FD]'></div>
                </div>
                <div className='relative bg-[#080B2A] rounded-3xl'>
                    <div className='bg-white w-full md:p-5 p-3 rounded-3xl flex pb-40 md:pb-0 lg:h-[25rem] justify-center items-center flex-col bg-opacity-5'>
                        <video ref={videoRef} src={video} autoPlay muted loop className='rounded-lg'>
                            Your browser does not support the video tag.
                        </video>
                        {showQuestion && (
                            <div className='absolute top-28 md:top-20 lg:top-28 left-0 w-full h-full flex justify-center items-center'>
                                <div className='bg-white w-full md:p-5 p-3 rounded-b-3xl flex flex-col bg-opacity-10'>
                                    <p className='text-white font-semibold ml-5 mb-2
                                    '>{question}</p>
                                    <div className='w-full grid grid-cols-2'>
                                        {options.map((option, index) => (
                                            <button
                                                key={index}
                                                onClick={() => handleOptionClick(option)}
                                                className='px-4 py-2 rounded-md m-2 bg-gradient-to-r  from-[#15bffd] to-[#9C37FD] hover:bg-gray-700 text-white'
                                            >
                                                {option}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdComponent;
