import Link from "next/link";
import { useState, useEffect  } from "react";
import {BiLogIn} from 'react-icons/bi';
import {FiLogIn} from 'react-icons/fi';
import {MdMedicalServices} from 'react-icons/md';
import {HiHome , HiOutlineInformationCircle} from 'react-icons/hi';

export function Sidebar() {
  const [active, setActive] = useState('home');
  
  useEffect(() => {
    if (window.location.pathname === '/') {
      setActive('home')
    }
    else if (window.location.pathname === '/login') {
      setActive('login');
    }
    else if (window.location.pathname === '/signup') {
      setActive('signUp')
    }
  }, [])

  return (
    //sidebar class styled in globals
    <div className="lg:hidden flex justify-end ">
      <div className="sidebar w-96 h- bg-white pt-8 pl-16 pr-40 ">
        <div className="flex flex-col  space-y-8">
          <Link href='/' className={`flex items-center text-main font-bold text-2xl py-2 px-4 ${active === 'home' ? 'border-b-2  border-yellow-400' : ''}`}
            onClick={() => { setActive('home'); }}
          ><HiHome className="mr-2"/> Home</Link>
          <Link href='/#services' className={`flex items-center text-main font-bold text-2xl py-2 px-4 ${active === 'services' ? 'border-b-2  border-yellow-400' :''}`}
            onClick={() => { setActive('services'); }}
          ><MdMedicalServices className="mr-2"/>Services</Link>
          <Link href='/' className={`flex items-center text-main font-bold text-2xl  py-2 px-4 ${active === 'about' ? 'border-b-2  border-yellow-400' : ''}`}
            onClick={() => { setActive('about');}}
          ><HiOutlineInformationCircle className="mr-2"/>About</Link>
          <Link href='/login' className={`flex items-center text-main font-bold text-2xl  py-2 px-4 mr-2 ${active === 'login' ? 'border-b-2  border-yellow-400' : ''}`}
            onClick={() => {
              setActive('login')}}
          ><BiLogIn className="mr-2"/>Login</Link>
          <Link href='/signup' className={`flex items-center text-main font-bold text-2xl py-2 px-4 ${active === 'signUp' ? 'border-b-2  border-yellow-400' : ''}`}
            onClick={() => {
              setActive('signUp')}}
          ><FiLogIn className="mr-2"/>Sign Up</Link>
        </div>
      </div>
    </div>
  )
}

