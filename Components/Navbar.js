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
    <div className="navbar bg-main flex justify-between lg:justify-around items-center py-2 text-white h-24 sticky top-0" style={{zIndex:'500'}}>
      <img src='logoWhite.png' width='210px'className="ml-5" />
      <div className="hidden lg:block">
        <Link href='/' className={`text-2xl font-medium py-2 px-4 ${active === 'home' ? 'bg-white text-main font-semibold' : 'text-white'}`}
          onClick={() => { setActive('home'); setActiveLogin('signUp') }}
        >Home</Link>
        <Link href='#services' className={`text-2xl font-medium py-2 px-4 ${active === 'services' ? 'bg-white text-main font-semibold' : 'text-white'}`}
          onClick={() => { setActive('services'); setActiveLogin('signUp') }}
        >Services</Link>
        <Link href='/' className={`text-2xl font-medium py-2 px-4 ${active === 'about' ? 'bg-white text-main font-semibold' : 'text-white'}`}
          onClick={() => { setActive('about'); setActiveLogin('signUp') }}
        >About</Link>
      </div>
      <div className="hidden lg:block">
        <Link href='/login' className={`text-2xl font-medium py-2 px-4 mr-2 ${activeLogin === 'login' ? 'bg-white text-main font-semibold ' : 'text-white'}`}
          onClick={() => {
            setActiveLogin('login');
            setActive('')
          }}
        >Login</Link>
        <Link href='/signup' className={`text-2xl font-medium py-2 px-4 ${activeLogin === 'signUp' ? 'bg-white text-main font-semibold' : 'text-white'}`}
          onClick={() => {
            setActiveLogin('signUp')
            setActive('')
          }}
        >Sign Up</Link>
      </div>
      <div className="mr-6 lg:hidden">
        {activeSidebar ? 
        <AiOutlineClose className="text-4xl" onClick={()=>{setActiveSidebar(false)}}/>
        :
        <HiOutlineMenu className="text-4xl" onClick={()=>{setActiveSidebar(true)}}/>
        } 
      </div>
    </div>

  )
}