import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
    console.log('route :', route);
      return true;
    }
  };

  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
      <header className="flex items-center justify-between px-3 max-w-6xl mx-auto">
        <div>
          <svg
            id="logo-11"
            width={119}
            height={30}
            viewBox="0 0 119 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer"
            onClick={() => {
              navigate('/');
            }}
          >
            {'{'}' '{'}'}
            <path
              d="M2.94098 27.825H28.591V2.175H2.94098V27.825ZM23.654 12.532H18.234V7.112H23.654V12.532ZM7.87698 7.112H13.3V17.468H23.654V22.888H7.87698V7.112ZM45.294 2.175C42.7574 2.175 40.2778 2.92718 38.1688 4.33641C36.0597 5.74564 34.4159 7.74863 33.4452 10.0921C32.4745 12.4356 32.2206 15.0142 32.7154 17.502C33.2103 19.9898 34.4317 22.275 36.2253 24.0686C38.0189 25.8623 40.3041 27.0837 42.7919 27.5786C45.2798 28.0734 47.8584 27.8195 50.2019 26.8488C52.5454 25.8781 54.5483 24.2343 55.9576 22.1252C57.3668 20.0161 58.119 17.5365 58.119 15C58.115 11.5998 56.7625 8.34004 54.3582 5.93575C51.9539 3.53145 48.6942 2.17897 45.294 2.175V2.175ZM45.294 22.888C43.7339 22.888 42.2088 22.4254 40.9116 21.5586C39.6145 20.6919 38.6034 19.46 38.0064 18.0186C37.4094 16.5773 37.2532 14.9913 37.5575 13.4611C37.8619 11.931 38.6132 10.5255 39.7163 9.42234C40.8195 8.31919 42.225 7.56793 43.7551 7.26357C45.2852 6.95921 46.8712 7.11542 48.3126 7.71244C49.7539 8.30946 50.9859 9.32049 51.8526 10.6177C52.7194 11.9148 53.182 13.4399 53.182 15C53.1788 17.0911 52.3467 19.0956 50.8681 20.5742C49.3895 22.0528 47.385 22.8848 45.294 22.888V22.888ZM104.013 2.175C101.476 2.17481 98.9967 2.92681 96.8875 4.33592C94.7783 5.74503 93.1344 7.74795 92.1635 10.0914C91.1927 12.4348 90.9385 15.0136 91.4333 17.5014C91.928 19.9893 93.1494 22.2746 94.943 24.0683C96.7365 25.862 99.0217 27.0836 101.51 27.5785C103.997 28.0734 106.576 27.8195 108.92 26.8489C111.263 25.8782 113.266 24.2344 114.675 22.1253C116.085 20.0162 116.837 17.5366 116.837 15C116.833 11.6 115.481 8.34036 113.077 5.9361C110.673 3.53183 107.413 2.17924 104.013 2.175V2.175ZM104.013 22.888C102.453 22.8882 100.928 22.4257 99.6304 21.5591C98.3331 20.6925 97.3219 19.4606 96.7247 18.0193C96.1275 16.578 95.9712 14.9919 96.2754 13.4617C96.5797 11.9316 97.3309 10.526 98.434 9.4227C99.5371 8.31944 100.943 7.56808 102.473 7.26364C104.003 6.9592 105.589 7.11535 107.03 7.71235C108.472 8.30934 109.704 9.32036 110.571 10.6176C111.437 11.9148 111.9 13.4399 111.9 15C111.897 17.0909 111.065 19.0952 109.586 20.5738C108.108 22.0524 106.104 22.8846 104.013 22.888V22.888ZM74.653 2.175C72.1164 2.175 69.6368 2.92718 67.5278 4.33641C65.4187 5.74564 63.7749 7.74863 62.8042 10.0921C61.8335 12.4356 61.5796 15.0142 62.0744 17.502C62.5693 19.9898 63.7907 22.275 65.5843 24.0686C67.3779 25.8623 69.6631 27.0837 72.1509 27.5786C74.6387 28.0734 77.2174 27.8195 79.5609 26.8488C81.9044 25.8781 83.9073 24.2343 85.3166 22.1252C86.7258 20.0161 87.478 17.5365 87.478 15C87.474 11.5998 86.1215 8.34004 83.7172 5.93575C81.3129 3.53145 78.0532 2.17897 74.653 2.175ZM74.653 22.888C73.1994 22.8887 71.774 22.4878 70.5339 21.7295C69.2939 20.9712 68.2874 19.8851 67.6257 18.5909C66.9641 17.2967 66.6728 15.8448 66.7842 14.3956C66.8956 12.9463 67.4052 11.556 68.2569 10.3781C69.1086 9.20026 70.2692 8.28061 71.6105 7.72071C72.9519 7.1608 74.4219 6.98242 75.8582 7.20524C77.2946 7.42807 78.6414 8.04343 79.7501 8.98342C80.8588 9.9234 81.6862 11.1515 82.141 12.532H74.653V17.468H82.141C81.6201 19.0433 80.6165 20.4147 79.2724 21.3875C77.9284 22.3604 76.3122 22.8853 74.653 22.888V22.888Z"
              className="ccustom"
              fill="#394149"
            />
            {'{'}' '{'}'}
          </svg>
        </div>
        <div>
          <ul className="flex space-x-10">
            <li
              className={`py-3 cursor-pointer text-sm font-semibold text-gray-500 border-b-[3px] border-b-transparent ${
                location.pathname == '/' && 'active'    }`}
              onClick={() => {
                navigate('/');
              }}
            >
              Home
            </li>
            <li
              className={`py-3 cursor-pointer text-sm font-semibold text-gray-500 border-b-[3px] border-b-transparent ${
                pathMatchRoute('/offers') && 'active'
              }`}
              onClick={() => {
                navigate('/offers');
              }}
            >
              Offers
            </li>
            <li
              className={`py-3 cursor-pointer text-sm font-semibold text-gray-500 border-b-[3px] border-b-transparent ${
                pathMatchRoute('/sign-in') && 'active'
              }`}
              onClick={() => {
                navigate('/sign-in');
              }}
            >
              Sign In
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
