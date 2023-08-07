import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import RandomStars from '../components/RandomWhite';
import RandomWhiteDiv from '../components/whitePatch';
import GradButton from '../components/GradButton';
import logo from '../assets/Images/wbcLogo.png'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [failed,setFailed] = useState(null)
    const navigate = useNavigate()
    const handleLogin = () => {
        // Replace with your hardcoded dummy email and password
        const dummyEmail = 'wbc.mail@gmail.com';
        const dummyPassword = 'admin123';
        setLoading(true);

        // Simulating an API call with setTimeout
        setTimeout(() => {
            if (email === dummyEmail && password === dummyPassword) {
                // Successful login
                localStorage.setItem('loggedIn', 'true'); // Store a key-value in local storage
                toast.success('login success')
                navigate('/partner')
            } else {
                setFailed('border-red-500 bg-red-500 bg-opacity-30')
                toast.warning('Invalid email or password');
            }
            setLoading(false);
        }, 1500);
    };

    return (
        <div>
            <Navbar />
            <div className='md:mt-5 mt-20 flex flex-col items-center md:mx-10 mx-3'>
                <h3 className='font-zen text-white text-3xl md:my-1 my-3'>WBC LOGIN</h3>
                <p className='md:w-[26rem] text-sm text-gray-300 font-mont md:my-0 mb-5'>
                    Outcome-centered products that reduce churn, optimize pricing, and grow your subscription business end-to-end.
                </p>
                <div className='relative group mt-6'>
                    {loading && (
                         <div className="preloader loaded-success fixed top-0 inset-0 bg-white bg-opacity-10 z-50">
                         <div className="absolute left-[35%] md:left-[46%] top-1/2 transform -translate-y-1/2">
                           <div className="relative mx-auto my-12">
                             <div className="inline-block">
                               <span className="relative flex h-10 w-full">
                                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                                 <img className='relative animate-bounce inline-flex rounded-full h-10' src={logo} alt="" />
                               </span>
                             </div>
                           </div>
                         </div>
                       </div>
                    )}
                        <div className='absolute flex flex-col -inset-1 animate-pulse opacity-75 group-hover:opacity-100 group-hover:blur-sm transition duration-1000 group-hover:duration-200 animate-tilt'>
                            <div className='h-1/2 bg-gradient-to-t rounded-3xl  from-[#080B2A] via-[#15bffd] to-[#9C37FD]'></div>
                            <div className='h-1/2 bg-gradient-to-b rounded-3xl  from-[#080B2A] via-[#15bffd] to-[#9C37FD]'></div>
                        </div>
                    <div className='relative flex flex-col bg-[#080B2A] p-3 md:p-10 rounded-3xl'>
                        <p className='text-sky-500 md:text-base text-sm font-mont font-semibold'>Hello there, haven’t we seen you before</p>
                        <label htmlFor='email' className='font-zen my-1 text-slate-400 font-semibold'>
                            EMAIL
                        </label>
                        <input
                            type='text'
                            name='email'
                            id='email'
                            className={`mb-2 border-purple-500 rounded-md bg-gray-800 opacity-75 py-3 text-white w-[21rem] md:w-[22rem] border ${failed} px-2`}
                            placeholder='Email'
                            value={email}
                            onChange={(e) =>{setFailed(null)
                                 setEmail(e.target.value)}}
                        />
                        <label htmlFor='password' className='font-zen my-1 text-slate-400 font-semibold'>
                            PASSWORD
                        </label>
                        <input
                            type='password'
                            name='password'
                            id='password'
                            className={`border-purple-500 rounded-md bg-gray-800 opacity-75 mb-5 py-3 text-white w-[21rem] md:w-[22rem] border ${failed} px-2`}
                            placeholder='Password'
                            value={password}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                  handleLogin();
                                }
                              }}
                            onChange={(e) =>{
                                setFailed(null)
                                 setPassword(e.target.value)}}
                        />
                        
                        <div className='w-full flex justify-center'>
                            <GradButton text={'Take Me In'} width={'w-40'} handler={handleLogin} />
                        </div>
                    </div>
                </div>
            </div>
            <RandomStars num={3} />
            <RandomWhiteDiv num={2} />
        </div>
    );
}

export default Login;
