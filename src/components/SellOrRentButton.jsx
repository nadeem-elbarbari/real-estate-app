import React from 'react';
import { Link } from 'react-router-dom';

const IconJSX = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 48 48" className='bg-yellow-200 rounded-full p-1'>
      <path fill="#e8eaf6" d="M42 39H6V23L24 6l18 17z" />
      <path fill="#c5cae9" d="m39 21l-5-5V9h5zM6 39h36v5H6z" />
      <path fill="#b71c1c" d="M24 4.3L4 22.9l2 2.2L24 8.4l18 16.7l2-2.2z" />
      <path fill="#d84315" d="M18 28h12v16H18z" />
      <path fill="#01579b" d="M21 17h6v6h-6z" />
      <path
        fill="#ff8a65"
        d="M27.5 35.5c-.3 0-.5.2-.5.5v2c0 .3.2.5.5.5s.5-.2.5-.5v-2c0-.3-.2-.5-.5-.5"
      />
    </svg>
  );
};

const SellOrRentButton = () => {
  return (
    <Link to={'/create-post'}>
      <button
        type="submit"
        className="w-full rounded bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 text-sm font-medium shadow-md hover:shadow-lg transition duration-200 ease-in-out active:bg-blue-800 uppercase flex items-center justify-center gap-2"
      >
        <IconJSX />
        sell or rent your home
      </button>
    </Link>
  );
};

export default SellOrRentButton;
