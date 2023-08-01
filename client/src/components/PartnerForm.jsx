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
        <div className='md:mx-16 my-20 mx-4'>
            <div className='text-center grid grid-rows my-3 md:my-0  place-items-center'>
                <h2 className='md:text-2xl text-xl font-zen text-white'>COMPLETE THE FORM</h2>
                <p className='text-slate-300 font-mont md:text-sm text-xs w-80 md:w-[25rem]'>Outcome-centered products that reduce churn, optimize pricing, and grow your subscription business end-to-end.</p>
            </div>
            <div className='w-full flex flex-col'>
                <div className='flex md:items-center w-full justify-end md:flex-row flex-col'>
                    <p className='font-zen text-white md:text-[0.9rem] text-[0.7rem]'>FULL NAME</p>
                    <input type="text" name='name' className='md:mx-6 md:my-4 my-2 bg-transparent px-3 md:w-[80%]  text-purple-600 font-semibold placeholder:text-gray-700 font-space  py-2 border rounded-lg border-purple-500' placeholder='Enter your Full Name' />
                </div>
                <div className='flex md:items-center w-full justify-end md:flex-row flex-col'>
                    <p className='font-zen text-white md:text-[0.9rem] text-[0.7rem]'>EMAIL ADDRESS</p>
                    <input type="text" name='email' className='md:mx-6 md:my-4 my-2 bg-transparent px-3 md:w-[80%]  text-purple-600 font-semibold placeholder:text-gray-700 font-space  py-2 border rounded-lg border-purple-500' placeholder='Enter your Email Address' />
                </div>
                <div className='flex items-center w-full justify-end'>
                    <div className='flex items-center md:w-[55%] md:flex-row flex-col  mx-1'>
                        <p className='font-zen text-white md:text-[0.9rem] text-[0.7rem]'>CONTACT NO</p>
                        <input type="text" name='id' className='md:mx-6 md:my-4 my-2 bg-transparent px-3 md:w-[60%]  w-full text-purple-600 font-semibold placeholder:text-gray-700 font-space  py-2 border rounded-lg border-purple-500' placeholder='Enter your contact number' />
                    </div>
                    <div className='flex items-center md:w-[40%] md:flex-row flex-col  mx-1'>
                        <p className='font-zen text-white md:text-[0.9rem] text-[0.7rem]'>DOB</p>
                        <input type="text" name='id' className='md:mx-6 md:my-4 my-2 bg-transparent px-3  w-full md:w-[86%]  text-purple-600 font-semibold placeholder:text-gray-700 font-space  py-2 border rounded-lg border-purple-500' placeholder='Date Of Birth' />
                    </div>
                </div>
                <div className='flex items-start w-full justify-end md:flex-row flex-col'>
                    <p className='font-zen text-white md:text-[0.9rem] text-[0.7rem]'>ADDRESS</p>
                    <textarea type="text" name='id' className='md:mx-6 md:my-4 my-2 bg-transparent px-3 w-full md:w-[80%]  h-28 text-purple-600 font-semibold placeholder:text-gray-700 font-space  py-2 border rounded-lg border-purple-500' placeholder='Full Address' />
                </div>
                <div className='flex items-center w-full justify-end'>
                    <div className='flex items-center md:w-[48%] md:flex-row flex-col  mx-1'>
                        <p className='font-zen text-white md:text-[0.9rem] text-[0.7rem]'>CITY</p>
                        <input type="text" name='id' className='md:mx-6 md:my-4 my-2 bg-transparent px-3 md:w-[80%] w-full text-purple-600 font-semibold placeholder:text-gray-700 font-space  py-2 border rounded-lg border-purple-500' placeholder='Enter your contact number' />
                    </div>
                    <div className='flex items-center md:w-[40%] md:flex-row flex-col  mx-1'>
                        <p className='font-zen text-white md:text-[0.9rem] text-[0.7rem]'>STATE</p>
                        <input type="text" name='id' className='md:mx-6 md:my-4 my-2 bg-transparent px-3 md:w-[86%] w-full text-purple-600 font-semibold placeholder:text-gray-700 font-space  py-2 border rounded-lg border-purple-500' placeholder='Date Of Birth' />
                    </div>
                </div>
                <div className='flex items-center w-full justify-end'>
                    <div className='flex items-center md:w-[54%] md:flex-row  mx-1 flex-col'>
                        <p className='font-zen text-white md:text-[0.9rem] text-[0.7rem]'>ZIP/POSTAL</p>
                        <input type="text" name='id' className='md:mx-6 md:my-4  my-2 bg-transparent px-3 md:w-[80%] w-full text-purple-600 font-semibold placeholder:text-gray-700 font-space  py-2 border rounded-lg border-purple-500' placeholder='Enter your contact number' />
                    </div>
                    <div className='flex items-center md:w-[40%] md:flex-row mx-1 flex-col'>
                        <p className='font-zen text-white md:text-[0.9rem] text-[0.7rem]'>COUNTRY</p>
                        <input type="text" name='id' className='md:mx-6 md:my-4 my-2 bg-transparent px-3 md:w-[86%] w-full text-purple-600 font-semibold placeholder:text-gray-700 font-space  py-2 border rounded-lg border-purple-500' placeholder='Date Of Birth' />
                    </div>
                </div>
                <div className='flex md:items-center w-full justify-end md:flex-row flex-col'>
                    <p className='font-zen text-white md:text-[0.9rem] text-[0.7rem]'>ID CARD NUMBER</p>
                    <input type="text" name='id' className='md:mx-6 md:my-4 my-2 bg-transparent px-3 md:w-[80%]  text-purple-600 font-semibold placeholder:text-gray-700 font-space  py-2 border rounded-lg border-purple-500' placeholder='Enter your ID Card Number' />
                </div>
                <div className='flex items-start  w-full justify-end'>
                    <div className='md:w-[45%] flex md:flex-row flex-col'>
                        <p className='font-zen text-white md:text-[0.9rem] mt-6 text-[0.7rem]'>UPLOAD ID</p>
                        <div
                            ref={idImageDropZoneRef}
                            className="bg-white flex-col flex items-center justify-center m-2 md:m-6 bg-opacity-20 md:w-[66%] p-5 h-44 border border-dashed border-purple-600"
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
                                    <label htmlFor="fileInput" className="cursor-pointer font-zen text-white text-xs md:text-xs md:m-3">
                                        Drop files here or click to upload
                                    </label>
                                </>
                            )}
                            <GradButton handler={handleButtonClick} text={'Click to select files'} />
                        </div>
                    </div>

                    <div className='flex md:w-[48%] md:flex-row flex-col'>
                        <p className='font-zen text-white md:text-[0.9rem] mt-6 text-[0.7rem]'>UPLOAD PIC</p>
                        <div
                            ref={profileImageDropZoneRef}
                            className="bg-white flex-col flex items-center justify-center md:w-[66%] m-2 md:m-6 bg-opacity-20 p-5 h-44 border border-dashed border-purple-600"
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
                                    <label htmlFor="fileInput" className="cursor-pointer font-zen text-white text-xs md:text-xs md:m-3">
                                        Drop files here or click to upload
                                    </label>
                                </>
                            )}
                            <GradButton handler={handleButtonClick} text={'Click to select files'} />
                        </div>
                    </div>
                </div>
                <div className='w-full flex justify-center md:pl-16 md:mt-0 mt-3'>
                    <GradButton width={'w-[10rem]'} text={'Submit'} />
                </div>
            </div>
        </div>
    )
}

export default PartnerForm