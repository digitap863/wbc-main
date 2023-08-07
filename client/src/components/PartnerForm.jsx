import React, { useRef, useState } from 'react'
import GradButton from './GradButton';

function PartnerForm() {
    const idImageDropZoneRef = useRef();
    const profileImageDropZoneRef = useRef();
    const [idImagePreview, setIdImagePreview] = useState('');
    const [profileImagePreview, setProfileImagePreview] = useState('');

    const handleDragOver = (e) => {
        e.preventDefault();
        // Add a border or any other visual indication on dragover
        idImageDropZoneRef.current.classList.add('border-blue-500');
        profileImageDropZoneRef.current.classList.add('border-blue-500');
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        // Remove the border or visual indication on dragleave
        idImageDropZoneRef.current.classList.remove('border-blue-500');
        profileImageDropZoneRef.current.classList.remove('border-blue-500');
    };

    const handleDrop = (e, dropZoneRef, setPreview) => {
        e.preventDefault();
        // Remove the border or visual indication on drop
        dropZoneRef.current.classList.remove('border-blue-500');

        const fileInput = document.getElementById('fileInput');
        const files = e.dataTransfer.files;

        if (files.length > 0) {
            handleFilePreview(files[0], setPreview);
            // Handle file upload or processing here (you can use fileInput.files to access the selected files)
        }
    };

    const handleFileChange = (e, setPreview) => {
        const file = e.target.files[0];
        handleFilePreview(file, setPreview);
        // Handle file upload or processing here (you can use e.target.files to access the selected files)
    };

    const handleFilePreview = (file, setPreview) => {
        const reader = new FileReader();

        reader.onloadend = () => {
            setPreview(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };
    const handleButtonClick = () => {
        const fileInput = document.getElementById('fileInput');
        fileInput.click();
    };
    return (
        <div className='lg:mx-16 md:mx-8 my-20 mx-4'>
            <div className='text-center grid grid-rows my-3 md:my-0  place-items-center'>
                <h2 className='md:text-2xl text-xl font-zen text-white'>COMPLETE THE FORM</h2>
                <p className='text-slate-300 font-mont md:text-sm text-xs w-80 md:w-[25rem]'>Outcome-centered products that reduce churn, optimize pricing, and grow your subscription business end-to-end.</p>
            </div>
            <div className='w-full flex flex-col'>
                <div className='flex md:items-center w-full justify-end md:flex-row flex-col'>
                    <p className='font-zen text-white text-right lg:text-[0.9rem] text-[0.7rem]'>FULL NAME</p>
                    <input type="text" name='name' className='mb-5 md:mb-0 md:mx-6 md:my-4 my-2 bg-transparent px-3 lg:w-[57rem] md:w-[37rem]  text-purple-600 font-semibold placeholder:text-gray-700 font-space  py-2 border rounded-lg border-purple-500' placeholder='Enter your Full Name' />
                </div>
                <div className='flex md:items-center w-full justify-end md:flex-row flex-col'>
                    <p className='font-zen text-white lg:text-[0.9rem]  text-[0.7rem]'>EMAIL ADDRESS</p>
                    <input type="text" name='email' className='mb-5 md:mb-0 md:mx-6 md:my-4 my-2 bg-transparent px-3 lg:w-[57rem] md:w-[37rem] text-purple-600 font-semibold placeholder:text-gray-700 font-space  py-2 border rounded-lg border-purple-500' placeholder='Enter your Email Address' />
                </div>
                <div className='flex items-center w-full justify-end'>
                    <div className='flex items-center lg:w-[35rem] md:w-[22rem] md:flex-row flex-col mx-1'>
                        <p className='font-zen text-white lg:text-[0.9rem] text-[0.7rem] text-left md:w-auto w-full'>CONTACT NO</p>
                        <input type="text" name='id' className='mb-5 md:mb-0 md:mx-6 md:my-4 my-2 bg-transparent px-3 md:w-[60%]  w-full text-purple-600 font-semibold placeholder:text-gray-700 font-space  py-2 border rounded-lg border-purple-500' placeholder='Enter your contact number' />
                    </div>
                    <div className='flex items-center lg:w-[32rem] md:w-[23.3rem] md:flex-row flex-col  mx-1'>
                        <p className='font-zen text-white lg:text-[0.9rem] text-[0.7rem] text-left md:w-auto w-full'>DOB</p>
                        <input type="text" name='id' className='mb-5 md:mb-0 md:mx-6 md:my-4 my-2 bg-transparent px-3  w-full md:w-[86%]  text-purple-600 font-semibold placeholder:text-gray-700 font-space  py-2 border rounded-lg border-purple-500' placeholder='Date Of Birth' />
                    </div>
                </div>
                <div className='flex items-start w-full justify-end md:items-center md:flex-row flex-col'>
                    <p className='font-zen text-white lg:text-[0.9rem] text-[0.7rem]'>ADDRESS</p>
                    <textarea type="text" name='id' className='mb-5 md:mb-0 md:mx-6 md:my-4 my-2 bg-transparent px-3 w-full lg:w-[57rem] md:w-[37rem] h-28 text-purple-600 font-semibold placeholder:text-gray-700 font-space  py-2 border rounded-lg border-purple-500' placeholder='Full Address' />
                </div>
                <div className='flex items-center w-full justify-end'>
                    <div className='flex items-center lg:w-[32rem] md:flex-row flex-col md:w-[20.3rem] mx-1'>
                        <p className='font-zen text-white lg:text-[0.9rem] text-[0.7rem] text-left md:w-auto w-full'>CITY</p>
                        <input type="text" name='id' className='mb-5 md:mb-0 md:mx-6 md:my-4 my-2 bg-transparent px-3 md:w-[80%] w-full text-purple-600 font-semibold placeholder:text-gray-700 font-space  py-2 border rounded-lg border-purple-500' placeholder='Enter your contact number' />
                    </div>
                    <div className='flex items-center md:w-[21rem] lg:w-[30rem] md:flex-row flex-col  mx-1'>
                        <p className='font-zen text-white lg:text-[0.9rem] text-[0.7rem] text-left md:w-auto w-full'>STATE</p>
                        <input type="text" name='id' className='mb-5 md:mb-0 md:mx-6 md:my-4 my-2 bg-transparent px-3 md:w-[86%] w-full text-purple-600 font-semibold placeholder:text-gray-700 font-space  py-2 border rounded-lg border-purple-500' placeholder='Date Of Birth' />
                    </div>
                </div>
                <div className='flex items-center w-full justify-end'>
                    <div className='flex items-center lg:w-[34.5rem] md:w-[22.5rem] md:flex-row  mx-1 flex-col'>
                        <p className='font-zen text-white lg:text-[0.9rem] text-[0.7rem] text-left md:w-auto w-full'>ZIP/POSTAL</p>
                        <input type="text" name='id' className='mb-5 md:mb-0 md:mx-6 md:my-4  my-2 bg-transparent px-3 md:w-[80%] w-full text-purple-600 font-semibold placeholder:text-gray-700 font-space  py-2 border rounded-lg border-purple-500' placeholder='Enter your contact number' />
                    </div>
                    <div className='flex items-center md:w-[22rem] lg:w-[32rem] md:flex-row mx-1 flex-col'>
                        <p className='font-zen text-white lg:text-[0.9rem] text-[0.7rem] text-left md:w-auto w-full'>COUNTRY</p>
                        <input type="text" name='id' className='mb-5 md:mb-0 md:mx-6 md:my-4 my-2 bg-transparent px-3 md:w-[86%] w-full text-purple-600 font-semibold placeholder:text-gray-700 font-space  py-2 border rounded-lg border-purple-500' placeholder='Date Of Birth' />
                    </div>
                </div>
                <div className='flex md:items-center w-full justify-end md:flex-row flex-col'>
                    <p className='font-zen text-white lg:text-[0.9rem] md:text-right md:text-[0.7rem] text-[0.7rem]'>ID CARD NUMBER</p>
                    <input type="text" name='id' className='mb-5 md:mb-0 md:mx-6 md:my-4 my-2 bg-transparent px-3 lg:w-[57rem] md:w-[37.5rem] text-purple-600 font-semibold placeholder:text-gray-700 font-space  py-2 border rounded-lg border-purple-500' placeholder='Enter your ID Card Number' />
                </div>
                <div className='flex items-start  w-full justify-end'>
                    <div className='md:w-[45%] flex md:flex-row flex-col'>
                        <p className='font-zen text-white md:text-left text-center lg:text-[0.9rem] mt-6 text-[0.7rem]'>UPLOAD ID</p>
                        <div
                            ref={idImageDropZoneRef}
                            className="bg-gray-500 flex-col rounded-lg flex items-center justify-center m-2 md:m-6 bg-opacity-10 md:w-[66%] p-5 h-44 border border-dashed border-purple-600"
                            onDragOver={(e) => handleDragOver(e)}
                            onDragLeave={(e) => handleDragLeave(e)}
                            onDrop={(e) => handleDrop(e, idImageDropZoneRef, setIdImagePreview)}
                        >
                            {idImagePreview ? (
                                <img src={idImagePreview} alt="ID File Preview" className="w-40 h-auto object-contain" />
                            ) : (
                                <>
                                    <input
                                        type="file"
                                        name="idImage"
                                        id="fileInput"
                                        className="hidden"
                                        onChange={(e) => handleFileChange(e, setIdImagePreview)}
                                    />
                                    <label htmlFor="fileInput" className="cursor-pointer font-zen text-white text-center text-[10px] md:mb-0 mb-4 md:text-xs md:m-3">
                                        Drop files here or click to upload
                                    </label>
                                </>
                            )}
                            <GradButton handler={handleButtonClick} text={'Browse'} />
                        </div>
                    </div>

                    <div className='flex md:w-[48%] md:flex-row flex-col'>
                        <p className='font-zen text-white md:text-left text-center lg:text-[0.9rem] mt-6 text-[0.7rem]'>UPLOAD PIC</p>
                        <div
                            ref={profileImageDropZoneRef}
                            className="bg-gray-500 flex-col rounded-lg flex items-center justify-center md:w-[66%] m-2 md:m-6 bg-opacity-10 p-5 h-44 border border-dashed border-purple-600"
                            onDragOver={(e) => handleDragOver(e)}
                            onDragLeave={(e) => handleDragLeave(e)}
                            onDrop={(e) => handleDrop(e, profileImageDropZoneRef, setProfileImagePreview)}
                        >
                            {profileImagePreview ? (
                                <img src={profileImagePreview} alt="Profile File Preview" className="w-40 h-auto object-contain" />
                            ) : (
                                <>
                                    <input
                                        type="file"
                                        name="profileImage"
                                        id="fileInput"
                                        className="hidden"
                                        onChange={(e) => handleFileChange(e, setProfileImagePreview)}
                                    />
                                    <label htmlFor="fileInput" className="cursor-pointer font-zen text-white text-[10px] md:mb-0 mb-4 text-center md:text-xs md:m-3">
                                        Drop files here or click to upload
                                    </label>
                                </>
                            )}
                            <GradButton handler={handleButtonClick} text={'Browse'} />
                        </div>
                    </div>
                </div>
                <div className='w-full flex justify-center md:pl-16 md:mt-7 mt-3'>
                    <GradButton width={'w-[10rem]'} text={'Submit'} />
                </div>
            </div>
        </div>
    )
}

export default PartnerForm