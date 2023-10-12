import React, { useState, useRef, useEffect } from 'react';
import video from '../assets/video/adVideo.mp4';
// import video from '../assets/video/videoplayback.mp4';

function AdComponent() {
    const [question, setQuestion] = useState('');
    const [options, setOptions] = useState([]);
    const [correctAnswer, setCorrectAnswer] = useState('');
    const [showQuestion, setShowQuestion] = useState(false);
    const [questionIndex, setQuestionIndex] = useState(0);
    const videoRef = useRef(null);

    // Define your questions and answers here
    const questionsData = [
        {
            question: 'Why gold is so valuable?',
            options: [
                'Rare on other planets',
                'Widely used in sandwiches',
                'Made of unicorn tears',
                'Limited Quantity' // Correct Answer
            ],
            correctAnswer: 'Limited Quantity',
        },
        {
            question: "Why can't we find more gold?",
            options: ["harder and expensive", "Aliens Hoarding Gold", "Government Conspiracy", "Gold-Eating Bacteria"],
            correctAnswer: 'harder and expensive',
        },
        {
            question: 'Which crypto currency was just mentioned in the video?',
            options: [
                "DogeCoin",
                "PizzaCoin",
                "BananaCoin",
                "Bitcoin" // Correct Answer
            ],
            correctAnswer: 'Bitcoin',
        },
        {
            question: 'What is the advantage of crypto transaction?',
            options: [
                "No middlemen", // Correct Answer
                "Faster than light",
                "Made of chocolate",
                "Powered by unicorns"
            ],
            correctAnswer: 'No middlemen',
        },
    ];

    const showRandomQuestion = (index) => {
        if (questionIndex < questionsData.length) {
            const question = questionsData[index];
            setQuestion(question.question);
            setOptions(question.options);
            setCorrectAnswer(question.correctAnswer);
            setShowQuestion(true);
            setQuestionIndex(index + 1);

            // Pause the video when the question is shown
            if (videoRef.current) {
                videoRef.current.pause();
            }
        }
    };
    function call(r, index) {
        const intervasl = setTimeout(() => {
            r(index);
        }, 7000);
    }
    function hideQuestion(){
        const intervasl = setTimeout(() => {
            setShowQuestion(false);
            setCorrect('bg-opacity-10 bg-white')
        }, 500);
    }
    const [correct,setCorrect] = useState('bg-opacity-10 bg-white')

    const handleOptionClick = (option) => {
        if (option === correctAnswer) {
            setCorrect('bg-opacity-90 bg-green-500')
            hideQuestion();
            if (questionIndex === questionsData.length) {
                videoRef.current.pause()
                setEnd(true)
                return
            }
            call(showRandomQuestion, questionIndex)
            // return () => clearInterval(interval);
            // Resume the video if the user picks the correct option
            videoRef.current.play();
        } else {
            setCorrect('bg-opacity-90 bg-red-500')
            hideQuestion();
            console.log(videoRef.current.currentTime);
            setQuestionIndex(0)
            call(showRandomQuestion, questionIndex - 1)
            console.log(questionIndex);
            // Play the video from the beginning if the user picks the wrong option
            videoRef.current.currentTime = videoRef.current.currentTime - 7;
            videoRef.current.play();
        }
    };

    const [isPlaying, setIsPlaying] = useState(false);
    const [end, setEnd] = useState(false)
    const handleTogglePlayPause = () => {
        setbtnVisiblity('hidden')
        call(showRandomQuestion, questionIndex)
        if (videoRef.current.paused) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
        setIsPlaying(!isPlaying);
    };
    const [btnVisiblity, setbtnVisiblity] = useState('block')
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
                        {/* <video ref={videoRef} src={video}  muted loop className='rounded-lg' onMouseEnter={()=>setbtnVisiblity('block')} onMouseLeave={()=>setbtnVisiblity('hidden')}>
                            Your browser does not support the video tag.
                        </video> */}

                       {end? <div className='bg-white h-full w-full rounded-xl flex transition-all ease-in justify-center items-center'>
                            <h1 className='text-4xl font-mont font-extrabold animate-pulse'>Thank You</h1>
                        </div>:
                        <video ref={videoRef} src={video} loop className='rounded-lg' >
                            Your browser does not support the video tag.
                        </video>
                        }
                        <button onClick={handleTogglePlayPause} onMouseEnter={() => setbtnVisiblity('block')} className={`text-7xl absolute text-gray-700 ${btnVisiblity}`}>
                            {isPlaying ? <ion-icon name="pause-circle-outline"></ion-icon> : <ion-icon name="play-circle-outline"></ion-icon>}
                        </button>
                        {showQuestion && (
                            <div className='absolute top-28 md:top-20 lg:top-60 left-0 w-full h-fll flex justify-center items-center'>
                                <div className={` w-full md:p-5 p-3 rounded-b-3xl flex flex-col ${correct}`}>
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
