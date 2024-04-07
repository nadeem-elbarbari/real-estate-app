import { getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const Profile = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const [formData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });

  const { name, email } = formData;

  function logOut() {
    auth.signOut();
    navigate('/');
  }

  return (
    <section className="max-w-6xl mx-auto flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-center my-6">My Profile</h1>
      <div className="w-full md:w-[70%] px-4 py-2">
        <form className="flex flex-col gap-6">
          {/* name input */}
          <input
            type="text"
            id="name"
            value={name}
            disabled
            className="w-full text-gray-700 border border-gray-300 rounded bg-white transition ease-in-out text-xl"
          />
          {/* email input */}
          <input
            type="email"
            id="email"
            value={email}
            disabled
            className="w-full text-gray-700 border border-gray-300 rounded bg-white transition ease-in-out text-xl"
          />
          <div className="flex justify-between items-center whitespace-nowrap text-sm md:text-lg">
            <p>
              Do you want to change your name?{' '}
              <span className="text-red-600 hover:text-red-800 transition ease-in-out duration-200 cursor-pointer">
                Edit
              </span>{' '}
            </p>
            <p
              onClick={logOut}
              className="text-blue-600 hover:text-blue-800 transition ease-in-out duration-200 cursor-pointer"
            >
              Logout
            </p>
          </div>
          <button
            type="button"
            className="w-full rounded bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 text-sm font-medium shadow-md hover:shadow-lg transition duration-200 ease-in-out active:bg-blue-800 uppercase"
          >
            sell or rent your home
          </button>
        </form>
      </div>
    </section>
  );
};

export default Profile;
