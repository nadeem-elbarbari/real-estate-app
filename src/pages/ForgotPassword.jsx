import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GoogleAuthButton from '../components/GoogleAuthButton';

const img = require('../assets/sign-in.jpg');

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  function onChange(e) {
    setEmail(e.target.value);
  }

  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Forgot Password</h1>
      <div className="flex justify-center items-center flex-wrap px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[45%] mb-12 md:mb-6">
          <img src={img} alt="auth" className="w-full rounded-2xl" />
        </div>
        <div className="w-full md:w-[67%] lg:w-[45%] lg:ml-20">
          <form>
            <input
              className="w-full rounded mb-6 px-4 py-2 text-xl border text-gray-700 border-gray-300 bg-white transition ease-in-out"
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Email Address"
            />

            <div className="mb-6 flex justify-between whitespace-nowrap text-sm sm:text-lg">
              <p className="">
                Don't have an account?
                <Link
                  to={'/sign-in'}
                  className="text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1"
                >
                  Register
                </Link>
              </p>
              <p>
                <Link
                  to={'/sign-in'}
                  className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out"
                >
                  Sign in instead
                </Link>
              </p>
            </div>
            <button
              className="w-full rounded bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 text-sm font-medium shadow-md hover:shadow-lg transition duration-200 ease-in-out active:bg-blue-800 uppercase"
              type="submit"
            >
              Reset Password
            </button>
            <div className="flex items-center my-4 before:border-t before:border-gray-300 before:flex-1 after:border-t after:border-gray-300 after:flex-1">
              <p className="text-center font-semibold mx-4">OR</p>
            </div>
            <GoogleAuthButton />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
