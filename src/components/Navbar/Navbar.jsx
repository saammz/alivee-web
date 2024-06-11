import { useState } from 'react';
import logo from '../../resources/logoWhite.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className='w-full'>
          <nav className="bg-[#000]  w-full top-0 left-0  z-[100] fixed py-3 border-b-2 border-[#4cc273]">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center justify-start">
                        <img src={logo} alt="logo" className='w-auto h-12' />
                    </div>

                    {/* <div className="hidden md:flex md:items-center md:space-x-4">
                      <Link to='/' className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                      <Link to='/about' className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</Link>
                      <Link to='/services' className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</Link>
                    </div> */}

                    <div className="md:flex md:items-center md:space-x-4">
                      {/* <Link>
                        <button className="text-white border border:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Login</button>
                      </Link> */}
                      <Link>
                        <button className="text-white bg-[#4cc273] hover:bg-opacity-90 hover:text-white px-6 py-4 rounded-[2rem] text-sm font-medium">Join Waitlist</button>
                      </Link>
                    </div>

                    <div className="md:hidden sm-max:hidden flex items-center">
                        <button onClick={toggleMenu} className="text-white hover:text-white focus:outline-none">
                            {isOpen ? (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Conditional rendering for mobile
            {isOpen && (
                <div className="md:hidden px-2 pt-2 flex flex-col items-center pb-3 space-y-1 sm:px-3">
                    <Link to='/' className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
                    <Link to='/about' className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</Link>
                    <Link to='/services' className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Services</Link>
                    <Link>
                        <button className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Login</button>
                    </Link>
                    <Link>
                        <button className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Sign-up</button>
                    </Link>
                </div>
            )} */}
          </nav>
        </header>
    );
};

export default Navbar;
