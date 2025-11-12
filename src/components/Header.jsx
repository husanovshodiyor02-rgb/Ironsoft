import React, { useState }  from 'react'
import Logo from '../assets/img/logo.png'
import { Menu, X } from "lucide-react";


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="bg-[#0c151c] sticky top-0 z-55">
      <div className="container1">
        <nav className="flex items-center justify-between py-3">
            <a href="#"><img src={Logo} alt="" /></a>
          
          <ul className="hidden md:flex items-center gap-10 font-normal text-xl leading-[130%] text-white">
            <li>
              <a href="#" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Our works
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact us
              </a>
            </li>
          </ul>
          <button className="hidden md:block w-[135px] h-[45px] px-5 py-3 rounded-2xl bg-[#018abe]
           font-bold text-xs leading-[170%] tracking-[-0.02em] uppercase text-center text-white
            hover:bg-[#528193] transition-transform duration-500 ease-in-out hover:scale-105 cursor-pointer">
            Get Started
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md hover:bg-gray-100 transition"
          >
            {menuOpen ? (
              <X className="text-white w-6 h-6" />
            ) : (
              <Menu className="text-white w-6 h-6" />
            )}
          </button>
        </nav>

        {menuOpen && (
          <div className="lg:hidden bg-[#c1bdbd] border-t border-gray-200 px-4 pb-6 animate-fadeIn">
            <ul className="flex flex-col gap-4 pt-4 text-lg font-medium text-gray-800">
              <li>
                <a href="#" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Our works
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact us
                </a>
              </li>
              <button className="w-[135px] h-[45px] px-5 py-3 rounded-2xl bg-[#018abe] font-bold text-xs leading-[170%] tracking-[-0.02em] uppercase text-center text-white">
                Get Started
              </button>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header