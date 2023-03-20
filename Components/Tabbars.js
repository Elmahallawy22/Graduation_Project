import Link from "next/link";
import { useState, useEffect  } from "react";
import {BiLogIn} from 'react-icons/bi';
import {FiLogIn} from 'react-icons/fi';
import {MdMedicalServices} from 'react-icons/md';
import {HiHome , HiOutlineInformationCircle} from 'react-icons/hi';

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

    <div className="lg:hidden flex justify-center items-center sticky bottom-0 bg-main h-16" style={{zIndex:5000}}>
    <div className="w-full flex justify-around items-center text-white text-xl font-bold">
          <a href='/' className={`flex flex-col items-center ${active === 'home' ? 'text-slate-900' : ''}`}
            onClick={() => { setActive('home'); }}
          ><HiHome/><span className="text-base md:text-lg"> Home</span></a>
          <a href='/services' className={`flex flex-col items-center ${active === 'services' ? 'text-slate-900' : ''}`}
            onClick={() => { setActive('services'); }}
          ><MdMedicalServices/><span className="text-base md:text-lg">Services</span></a>
          <a href='/' className={`flex flex-col items-center ${active === 'activity' ? 'text-slate-900' : ''}`}
            onClick={() => { setActive('activity'); }}
          ><HiHome/><span className="text-base md:text-lg">Activity</span></a>
          <a href='/' className={`flex flex-col items-center ${active === 'about' ? 'text-slate-900' : ''}`}
            onClick={() => { setActive('about'); }}
          ><HiOutlineInformationCircle/><span className="text-base md:text-lg">About</span></a>
      </div>
      </div>
  )
}

