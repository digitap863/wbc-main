import React from 'react';

function InputWithButton() {
  return (
    <div className="relative flex">
      <input
        type="text"
        className="rounded-l rounded-lg justify-start py-2 px-40 bg-slate-600 focus:outline-none focus:ring focus:border-blue-300"
        placeholder="Enter your Email"
      />
      <button className="absolute right-0 top-0 h-full px-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-r-lg text-white font-zen text-xs flex items-center justify-center  hover:text-gray-800 hover:bg-gradient-to-b duration-500">
        SUBSCRIBE
      </button>
    </div>
  );
}

export default InputWithButton;
