import { useState } from 'react';
import {Link} from "react-router-dom";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="navbar flex flex-row justify-between items-center px-5 py-4 bg-white shadow-md">
                <div className="Logo">
                    <Link to="/"><img className="w-32 md:w-48" src="/logo.png" alt="Logo"/></Link>
                </div>
                <div className="lg:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                        </svg>
                    </button>
                </div>
                <div className={`actions lg:flex flex-row items-center gap-10 ${isOpen ? 'flex flex-col fixed top-0 left-0 w-screen h-screen bg-white p-10 z-50' : 'hidden'} lg:relative lg:p-0 lg:h-auto lg:bg-transparent`}>
                    <div className="flex flex-row justify-between items-center w-full lg:hidden mb-5">
                        <Link to="/" onClick={() => setIsOpen(false)} ><img className="w-32 md:w-48" src="/logo.png" alt="Logo"/></Link>
                        <button onClick={() => setIsOpen(false)} className="text-gray-800 focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <Link to="/register/brand" onClick={() => setIsOpen(false)} className="text-lg md:text-xl hover:underline duration-1000 transition-all">Brands</Link>
                    <Link to="/register/influencer" onClick={() =>setIsOpen(false)} className="text-lg md:text-xl hover:underline duration-1000 transition-all">Influencers</Link>
                    <a href="/" className="text-lg md:text-xl hover:underline duration-1000 transition-all">Pricing</a>
                    <a href="/" className="text-lg md:text-xl hover:underline duration-1000 transition-all">Influence Calculator</a>
                    <Link to="/login" onClick={() =>setIsOpen(false)} className="font-bold text-white text-lg md:text-xl bg-black px-4 py-2 rounded hover:bg-gray-800">Login</Link>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
