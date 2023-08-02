import React, { Component } from 'react';
import Navbar from './Navbar';
import img from '../assets/Images/error1.png'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error or perform other actions here
    console.error('Error:', error);
    console.error('Error Info:', errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      // Return your error page or UI here
      return(
        <div>
        <Navbar/>
        <div className='flex md:flex-row md:mx-0 mx-3 flex-col items-center justify-center h-[80vh]'>
            <img src={img} alt="" className='w-[38rem]'/>
            <div className='flex flex-col items-center'>
                <h2 className='bg-gradient-to-r from-purple-500 to-blue-500 font-zen text-8xl bg-clip-text text-transparent'>404</h2>
                <h5 className='text-white font-space text-xl'>Something is Missing</h5>
                <p className='font-space text-white md:w-96 my-2'>The page you are looking for cannot be found. take a break before trying again </p>
                <button className='text-sky-500 w-full font-semibold flex items-center hover:text-yellow-500' onClick={()=>navigate('/')}><span className='mx-3 mt-2 text-xl'><ion-icon name="arrow-back-outline"/></span>Back To Home</button>
            </div>
        </div>
    </div>);
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
