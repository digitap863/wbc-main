import React, { useRef, useState } from 'react'
import GradButton from './GradButton';
import { postForm } from '../axios/apicall';
import axios from '../axios/axios';
import logo from '../assets/Images/wbcLogo.png'
import Swal from 'sweetalert2/dist/sweetalert2.js';


function PartnerForm() {
    const idImageDropZoneRef = useRef();
    const profileImageDropZoneRef = useRef();
    const [idImagePreview, setIdImagePreview] = useState('');
    const [profileImagePreview, setProfileImagePreview] = useState('');
    const [idImage, setIdImage] = useState(null)
    const [profileImage, setProfileImage] = useState(null)
    const [loading, setloading] = useState(false)
    const [formData, setFormData] = useState({
        fullName: '',
        emailAddress: '',
        contactNumber: '',
        dateOfBirth: '',
        fullAddress: '',
        city: '',
        state: '',
        zipPostal: '',
        country: '',
        idCardNumber: '',
        investment: 100000
    });
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

    const handleFileChange = (e, setPreview, setImage) => {
        const file = e.target.files[0];
        setImage(file)
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

    const handleSubmit = async (e) => {
        
        e.preventDefault();
        setloading(true)
        try {
            const formDataToSend = new FormData();

            // Append form data
            for (const key in formData) {
                formDataToSend.append(key, formData[key]);
            }
            // Append images
            formDataToSend.append('idImage', idImage);
            formDataToSend.append('profileImage', profileImage);

            // postForm('/add-member', formData)
            // Make an Axios POST request to your backend API endpoint
            axios.post('/add-member', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }).then((res)=>{
                setloading(false)
                Swal.fire(
                    'Thank You!',
                    'Data is submitted!',
                    'success'
                )
                location.reload()
            })

        } catch (error) {
            console.error('Error submitting the form:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log(name);
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <div className='lg:mx-16 md:mx-8 my-20 mx-4'>
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
            <div className='text-center grid grid-rows my-3 md:my-0  place-items-center'>
                <h2 className='md:text-2xl text-xl font-zen text-white'>COMPLETE THE FORM</h2>
                <p className='text-slate-300 font-mont md:text-sm text-xs w-80 md:w-[25rem]'>Outcome-centered products that reduce churn, optimize pricing, and grow your subscription business end-to-end.</p>
            </div>
            <div className='w-full flex flex-col'>
                <div className='flex md:items-center w-full justify-end md:flex-row flex-col'>
                    <p className='font-zen text-white text-right lg:text-[0.9rem] text-[0.7rem]'>FULL NAME</p>
                    <input type="text" name='fullName' className='mb-5 md:mb-0 md:mx-6 md:my-4 my-2 bg-transparent px-3 lg:w-[82%]  md:w-[37rem]  text-purple-600 font-semibold placeholder:text-gray-700 font-space  py-2 border rounded-lg border-purple-500' placeholder='Enter your Full Name' onChange={handleInputChange} />
                </div>
                <div className='flex md:items-center w-full justify-end md:flex-row flex-col'>
                    <p className='font-zen text-white lg:text-[0.9rem]  text-[0.7rem]'>EMAIL ADDRESS</p>
                    <input type="text" name='emailAddress' className='mb-5 md:mb-0 md:mx-6 md:my-4 my-2 bg-transparent px-3 lg:w-[82%] md:w-[37rem] text-purple-600 font-semibold placeholder:text-gray-700 font-space  py-2 border rounded-lg border-purple-500' placeholder='Enter your Email Address' onChange={handleInputChange} />
                </div>
                <div className='flex items-center w-full justify-end'>
                    <div className='flex items-center lg:w-[50%] 2xl:w-[49.5%] md:w-[22rem] md:flex-row flex-col mx-1'>
                        <p className='font-zen text-white lg:text-[0.9rem] text-[0.7rem] text-left md:w-auto w-full'>CONTACT NO</p>
                        <input type="text" name='contactNumber' className='mb-5 md:mb-0 md:mx-6 md:my-4 my-2 bg-transparent px-3 md:w-[60%] lg:w-[70%] 2xl:w-[65%] w-full text-purple-600 font-semibold placeholder:text-gray-700 font-space  py-2 border rounded-lg border-purple-500' placeholder='Enter your contact number' onChange={handleInputChange} />
                    </div>
                    <div className='flex items-center lg:w-[45%] 2xl:w-[44%] md:w-[23.3rem] md:flex-row flex-col  mx-1'>
                        <p className='font-zen text-white lg:text-[0.9rem] text-[0.7rem] text-left md:w-auto w-full'>DOB</p>
                        <input type="text" name='dateOfBirth' className='mb-5 md:mb-0 md:mx-6 md:my-4 my-2 bg-transparent px-3  w-full md:w-[86%] 2xl:w-[90%] text-purple-600 font-semibold placeholder:text-gray-700 font-space  py-2 border rounded-lg border-purple-500' placeholder='Date Of Birth' onChange={handleInputChange} />
                    </div>
                </div>
                <div className='flex items-start w-full justify-end md:items-center md:flex-row flex-col'>
                    <p className='font-zen text-white lg:text-[0.9rem] text-[0.7rem]'>ADDRESS</p>
                    <textarea type="text" name='fullAddress' className='mb-5 md:mb-0 md:mx-6 md:my-4 my-2 bg-transparent px-3 w-full  md:w-[37rem] lg:w-[82%] h-28 text-purple-600 font-semibold placeholder:text-gray-700 font-space  py-2 border rounded-lg border-purple-500' placeholder='Full Address' onChange={handleInputChange} />
                </div>
                <div className='flex items-center w-full justify-end'>
                    <div className='flex items-center md:flex-row flex-col md:w-[20.3rem] lg:w-[44.5%] 2xl:w-[44%] mx-1'>
                        <p className='font-zen text-white lg:text-[0.9rem] text-[0.7rem] text-left md:w-auto w-full'>CITY</p>
                        <input type="text" name='city' className='mb-5 md:mb-0 md:mx-6 md:my-4 my-2 bg-transparent px-3 md:w-[80%] w-full text-purple-600 font-semibold placeholder:text-gray-700 font-space  py-2 border rounded-lg border-purple-500' placeholder='Enter your city' onChange={handleInputChange} />
                    </div>
                    <div className='flex items-center md:w-[21rem] lg:w-[44%] 2xl:w-[44%] md:flex-row flex-col  mx-1'>
                        <p className='font-zen text-white lg:text-[0.9rem] text-[0.7rem] text-left md:w-auto w-full'>STATE</p>
                        <input type="text" name='state' className='mb-5 md:mb-0 md:mx-6 md:my-4 my-2 bg-transparent px-3 md:w-[86%] w-full text-purple-600 font-semibold placeholder:text-gray-700 font-space  py-2 border rounded-lg border-purple-500' placeholder='Enter your state' onChange={handleInputChange} />
                    </div>
                </div>
                <div className='flex items-center w-full justify-end'>
                    <div className='flex items-center  md:w-[22.5rem] lg:w-[49%] 2xl:w-[49%] md:flex-row  mx-1 flex-col'>
                        <p className='font-zen text-white lg:text-[0.9rem] text-[0.7rem] text-left md:w-auto w-full'>ZIP/POSTAL</p>
                        <input type="text" name='zipPostal' className='mb-5 md:mb-0 md:mx-6 md:my-4  my-2 bg-transparent px-3 md:w-[80%] w-full text-purple-600 font-semibold placeholder:text-gray-700 font-space  py-2 border rounded-lg border-purple-500' placeholder='Enter your zip/postal code' onChange={handleInputChange} />
                    </div>
                    <div className='flex items-center md:w-[22rem] lg:w-[45%] 2xl:w-[44%] md:flex-row mx-1 flex-col'>
                        <p className='font-zen text-white lg:text-[0.9rem] text-[0.7rem] text-left md:w-auto w-full'>COUNTRY</p>
                        <input type="text" name='country' className='mb-5 md:mb-0 md:mx-6 md:my-4 my-2 bg-transparent px-3 w-full md:w-[86%] 2xl:w-[90%] text-purple-600 font-semibold placeholder:text-gray-700 font-space  py-2 border rounded-lg border-purple-500' placeholder='Enter your country' onChange={handleInputChange} />
                    </div>
                </div>
                <div className='flex md:items-center w-full justify-end md:flex-row flex-col'>
                    <p className='font-zen text-white lg:text-[0.9rem] md:text-right md:text-[0.7rem] text-[0.7rem]'>ID CARD NUMBER</p>
                    <input type="text" name='idCardNumber' className='mb-5 md:mb-0 md:mx-6 md:my-4 my-2 bg-transparent px-3 md:w-[37.5rem] lg:w-[82%] 2xl:w-[82%] text-purple-600 font-semibold placeholder:text-gray-700 font-space  py-2 border rounded-lg border-purple-500' placeholder='Enter your ID Card Number' onChange={handleInputChange} />
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
                                        onChange={(e) => handleFileChange(e, setIdImagePreview, setIdImage)}
                                    />
                                    <label htmlFor="idImageInput" className="cursor-pointer font-zen text-white text-center text-[10px] md:mb-0 mb-4 md:text-xs md:m-3">
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
                                        onChange={(e) => handleFileChange(e, setProfileImagePreview, setProfileImage)}
                                    />
                                    <label htmlFor="profileImageInput" className="cursor-pointer font-zen text-white text-[10px] md:mb-0 mb-4 text-center md:text-xs md:m-3">
                                        Drop files here or click to upload
                                    </label>
                                </>
                            )}
                            <GradButton handler={handleButtonClick} text={'Browse'} />
                        </div>
                    </div>
                </div>
                <div className='w-full flex justify-center md:pl-16 md:mt-7 mt-3'>
                    <GradButton width={'w-[10rem]'} text={'Submit'} handler={handleSubmit} />
                </div>
            </div>
        </div>
    );

}

export default PartnerForm