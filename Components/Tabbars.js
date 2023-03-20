import Link from "next/link";
import { useState, useEffect } from "react";
import { TbActivity } from 'react-icons/tb';
import { MdMedicalServices } from 'react-icons/md';
import { HiHome, HiOutlineInformationCircle } from 'react-icons/hi';

export function Tabbars() {
  const [active, setActive] = useState('home');
   
  useEffect(() => {
    if (window.location.pathname === '/') {
      setActive('home')
    }
    else if (window.location.pathname === '/services') {
      setActive('services')
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
    <div className="lg:hidden flex justify-evenly pt-2 items-center text-xl md:text-2xl text-white sticky bottom-0 bg-main h-16 font-bold" style={{ zIndex: '500' }}>
      <a href='/' className={`flex flex-col items-center ${active == 'home' ? 'text-black' : ''}`}
        onClick={() => { setActive('home') }}
      ><HiHome /><span className="text-sm md:text-lg">Home</span></a>
      <a href='/services' className={`flex flex-col items-center ${active == 'services' ? 'text-black' : ''}`}
        onClick={() => { setActive('services'); }}
      ><MdMedicalServices /><span className="text-sm md:text-lg">Services</span></a>
      <a href='/' className={`flex flex-col items-center ${active == 'activity' ? 'text-black' : ''}`}
        onClick={() => { setActive('activity'); }}
      ><TbActivity /><span className="text-sm md:text-lg">Avtivity</span></a>
      <a href='/' className={`flex flex-col items-center ${active == 'about' ? 'text-black' : ''}`}
        onClick={() => { setActive('about'); }}
      ><HiOutlineInformationCircle /><span className="text-sm md:text-lg">About</span></a>
    </div>
  )
}