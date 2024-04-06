import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import GoogleAuthButton from '../components/GoogleAuthButton';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';

const img = require('../assets/sign-in.jpg');

const SignIn = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const { email, password } = formData;

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (user) {
        navigate('/');
      }
    } catch (error) {
      toast.error("There's a problem with credentials");
    }
  };

  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Sign In</h1>
      <div className="flex justify-center items-center flex-wrap px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[45%] mb-12 md:mb-6">
          <img src={img} alt="auth" className="w-full rounded-2xl" />
        </div>
        <div className="w-full md:w-[67%] lg:w-[45%] lg:ml-20">
          <form onSubmit={onSubmit}>
            <input
              className="w-full rounded mb-6 px-4 py-2 text-xl text-gray-700 border-gray-300 bg-white transition ease-in-out"
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Email address"
            />

            <div className="relative">
              <input
                className="w-full rounded mb-6 px-4 py-2 text-xl text-gray-700 border-gray-300 bg-white transition ease-in-out"
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={onChange}
                placeholder="Password"
              />
              <div
                className="absolute right-3 top-3 text-xl cursor-pointer"
                onClick={() => {
                  setShowPassword((prevState) => !prevState);
                }}
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="currentColor"
                      d="M2.854 2.146a.5.5 0 1 0-.708.708l3.5 3.498a8.097 8.097 0 0 0-3.366 5.046a.5.5 0 1 0 .98.204a7.09 7.09 0 0 1 3.107-4.528L7.953 8.66a3.5 3.5 0 1 0 4.886 4.886l4.307 4.308a.5.5 0 0 0 .708-.708zm9.265 10.68A2.5 2.5 0 1 1 8.673 9.38zm-1.995-4.824l3.374 3.374a3.5 3.5 0 0 0-3.374-3.374M10 6c-.57 0-1.129.074-1.666.213l-.803-.803A7.648 7.648 0 0 1 10 5c3.693 0 6.942 2.673 7.72 6.398a.5.5 0 0 1-.98.204C16.058 8.327 13.207 6 10 6"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="currentColor"
                      d="M2.984 8.625v.003a.5.5 0 0 1-.612.355c-.431-.114-.355-.611-.355-.611l.018-.062s.026-.084.047-.145a6.7 6.7 0 0 1 1.117-1.982C4.096 5.089 5.605 4 8 4s3.904 1.089 4.802 2.183a6.7 6.7 0 0 1 1.117 1.982a4.077 4.077 0 0 1 .06.187l.003.013v.004l.001.002a.5.5 0 0 1-.966.258l-.001-.004l-.008-.025a4.872 4.872 0 0 0-.2-.52a5.696 5.696 0 0 0-.78-1.263C11.286 5.912 10.044 5 8 5c-2.044 0-3.285.912-4.028 1.817a5.7 5.7 0 0 0-.945 1.674a3.018 3.018 0 0 0-.035.109zM8 7a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5M6.5 9.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0"
                    />
                  </svg>
                )}
              </div>
            </div>
            <div className="mb-6 flex justify-between whitespace-nowrap text-sm sm:text-lg">
              <p className="">
                Don't have an account?
                <Link
                  to={'/sign-up'}
                  className="text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1"
                >
                  Register
                </Link>
              </p>
              <p>
                <Link
                  to={'/forgot-password'}
                  className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out"
                >
                  Forgot password?
                </Link>
              </p>
            </div>
            <button
              className="w-full rounded bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 text-sm font-medium shadow-md hover:shadow-lg transition duration-200 ease-in-out active:bg-blue-800 uppercase"
              type="submit"
            >
              Sign in
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

export default SignIn;
