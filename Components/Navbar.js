import Link from "next/link";
import { useState, useEffect, useContext } from "react";
import {HiOutlineMenu } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { StateContext } from "./Layout";

export function Navbar() {
  const [active, setActive] = useState('home');
  const [activeLogin, setActiveLogin] = useState('signUp');
  const {activeSidebar, setActiveSidebar} = useContext(StateContext);
  useEffect(() => {
    if (window.location.pathname === '/') {
      setActive('home')
    }
    if (window.location.pathname === '/services') {
      setActive('services')
    }
    else if (window.location.pathname === '/login') {
      setActiveLogin('login');
      setActive('')
    }
    else if (window.location.pathname === '/signup') {
      setActiveLogin('signUp')
      setActive('')
    }
  }, [])

  return (
    <div className="navbar bg-main flex justify-between lg:justify-around items-center py-2 text-white  h-20 md:h-24 sticky top-0" style={{zIndex:'500'}}>
      <img src='logoWhite.png' className="ml-5 w-44 md:w-52" />
      <div className="hidden lg:block">
        <a href='/' className={`text-2xl font-medium py-2 px-4 ${active === 'home' ? 'bg-white text-main font-semibold' : 'text-white'}`}
          onClick={() => { setActive('home'); setActiveLogin('signUp') }}
        >Home</a>
        <a href='services' className={`text-2xl font-medium py-2 px-4 ${active === 'services' ? 'bg-white text-main font-semibold' : 'text-white'}`}
          onClick={() => { setActive('services'); setActiveLogin('signUp') }}
        >Services</a>
        <a href='/' className={`text-2xl font-medium py-2 px-4 ${active === 'about' ? 'bg-white text-main font-semibold' : 'text-white'}`}
          onClick={() => { setActive('about'); setActiveLogin('signUp') }}
        >About</a>
      </div>
      <div className="hidden lg:block">
        <a href='/login' className={`text-2xl font-medium py-2 px-4 mr-2 ${activeLogin === 'login' ? 'bg-white text-main font-semibold ' : 'text-white'}`}
          onClick={() => {
            setActiveLogin('login');
            setActive('')
          }}
        >Login</a>
        <a href='/signup' className={`text-2xl font-medium py-2 px-4 ${activeLogin === 'signUp' ? 'bg-white text-main font-semibold' : 'text-white'}`}
          onClick={() => {
            setActiveLogin('signUp')
            setActive('')
          }}
        >Sign Up</a>
      </div>
      <div className="mr-5 lg:hidden">
        <a href='/signup' className={`text-2xl font-medium py-2 px-4 ${activeLogin === 'signUp' ? 'bg-white text-main font-semibold' : 'text-white'}`}
          onClick={() => {
            setActiveLogin('signUp')
            setActive('')
          }}
        >Sign Up</a>
        
      </div>
    </div>

  )
}