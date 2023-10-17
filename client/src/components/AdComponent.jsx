import React, { useState, useRef, useEffect } from 'react';
import video from '../assets/video/adVideo.mp4';
import ty from '../assets/Images/thankyou.jpg'
// import video from '../assets/video/videoplayback.mp4';

function AdComponent() {
    const [question, setQuestion] = useState('');
    const [options, setOptions] = useState([]);
    const [correctAnswer, setCorrectAnswer] = useState('');
    const [showQuestion, setShowQuestion] = useState(false);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [final, setFinal] = useState()
    const [finalQ, setFinalQ] = useState('bg-violet-900')
    const [answer, setAnswer] = useState('')
    const videoRef = useRef(null);

    // Define your questions and answers here
    const questionsData = [
        {
            question: 'Enter this code “2345”',
            correctAnswer: '2345',
        },
        {
            question: "Enter this code 8625",
            correctAnswer: '8625',
        },
        {
            question: 'Enter this code 7841',
            correctAnswer: '7841',
        },
        {
            question: 'Enter this code 4633',
            correctAnswer: '4633',
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
    function hideQuestion() {
        const intervasl = setTimeout(() => {
            setShowQuestion(false);
            setCorrect('bg-opacity-10 bg-white')
        }, 500);
    }

    function hideQuestion2() {
        const intervasl = setTimeout(() => {
            setEnd(true)
        }, 1000);
    }
    const [correct, setCorrect] = useState('bg-opacity-40 bg-violet-900')

    const handleOptionClick = (option) => {
        if (option === correctAnswer) {
            setCorrect('bg-opacity-90 bg-green-500')
            hideQuestion();
            if (questionIndex === questionsData.length) {
                videoRef.current.pause()
                setFinal(true)
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
        <div className='lg:mx-40 mx-3 mt-16 mb-36'>
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
                    <div className={`bg-white w-full md:p-5 p-3 rounded-3xl flex ${final?'pb-0':'pb-40'} md:pb-0 lg:h-[25rem] justify-center items-center flex-col bg-opacity-5`}>
                        {/* <video ref={videoRef} src={video}  muted loop className='rounded-lg' onMouseEnter={()=>setbtnVisiblity('block')} onMouseLeave={()=>setbtnVisiblity('hidden')}>
                            Your browser does not support the video tag.
                        </video> */}

                        {final ? (end ? <div className='h-full w-full overflow-hidden rounded-xl flex transition-all ease-in justify-center items-center'>
                            <img src={ty} alt="" className='w-full object-cover' />
                        </div> : <div className={`${finalQ} h-full w-full p-5 rounded-xl flex transition-all flex-col ease-in justify-center items-center`}>
                            <h1 className='md:text-3xl text-white lg:text-4xl font-space font-extrabold mb-5'>Which is the most popular and expensive crypto currency?</h1>
                            <div className='grid grid-cols-2 w-full'>
                                <button onClick={() => {
                                    setFinalQ('bg-red-500')
                                    hideQuestion2()
                                }} className='px-4 py-2 rounded-md m-2 bg-gradient-to-r  hover:bg-gradient-to-l from-[#15bffd] to-[#9C37FD] hover:bg-gray-700 text-white'>
                                    Leetcoin
                                </button>
                                <button onClick={() =>{
                                    setFinalQ('bg-green-500')
                                    hideQuestion2()
                                }} className='px-4 py-2 rounded-md m-2 bg-gradient-to-r hover:bg-gradient-to-l from-[#15bffd] to-[#9C37FD] hover:bg-gray-700 text-white'>
                                    Bitcoin
                                </button>
                                <button onClick={() => {
                                    setFinalQ('bg-green-500')
                                    hideQuestion2()
                                }} className='px-4 py-2 rounded-md m-2 bg-gradient-to-r hover:bg-gradient-to-l from-[#15bffd] to-[#9C37FD] hover:bg-gray-700 text-white'>
                                    Shiba INU coin
                                </button>
                                <button onClick={() => {
                                    setFinalQ('bg-red-500')
                                    hideQuestion2()
                                }} className='px-4 py-2 rounded-md m-2 bg-gradient-to-r hover:bg-gradient-to-l from-[#15bffd] to-[#9C37FD] hover:bg-gray-700 text-white'>
                                    Solana
                                </button>
                            </div>
                        </div>) :
                            <video ref={videoRef} src={video} loop className='rounded-lg' >
                                Your browser does not support the video tag.
                            </video>
                        }
                        <button onClick={handleTogglePlayPause} onMouseEnter={() => setbtnVisiblity('block')} className={`text-7xl absolute text-gray-700 ${btnVisiblity}`}>
                            {isPlaying ? <ion-icon name="pause-circle-outline"></ion-icon> : <ion-icon name="play-circle-outline"></ion-icon>}
                        </button>
                        {showQuestion && (
                            <div className='absolute bottom-5 md:-bottom-32 lg:-bottom-24 left-0 w-full h-fll flex justify-center items-center'>
                                <div className={` w-full p-3 rounded-b-3xl rounded-t-3xl flex flex-col a ${correct}`}>
                                    <div className='w-full flex justify-start'>
                                        {/* {options.map((option, index) => (
                                            <button
                                            key={index}
                                            onClick={() => handleOptionClick(option)}
                                            className='px-4 py-2 rounded-md m-2 bg-gradient-to-r  from-[#15bffd] to-[#9C37FD] hover:bg-gray-700 text-white'
                                            >
                                            {option}
                                            </button>
                                        ))} */}
                                        <div className='flex lg:flex-row flex-col lg:items-center pl-10  lg:pl-0justify-start w-full'>
                                            <p className='text-white text-xl font-semibold lg:ml-20 mb-2 lg:w-[30%]'>{question}</p>
                                            <div className='flex lg:justify-end items-center lg:w-[50%] gap-10'>
                                                <input onKeyDown={(e) => e.key === 'Enter' ? handleOptionClick(answer) : ''} onChange={(e) => { setAnswer(e.target.value) }} type="text" name='code' className='text-4xl bg-transparent px-3 w-[60%] lg:w-[40%] text-purple-600 font-semibold placeholder:text-white font-space  py-2 border rounded-lg border-purple-500' />
                                                <button onClick={() => handleOptionClick(answer)} className='text-4xl bg-violet-700 rounded-lg px-3 py-1 flex items-center'><ion-icon name="arrow-forward-outline" /></button>
                                            </div>
                                        </div>
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
