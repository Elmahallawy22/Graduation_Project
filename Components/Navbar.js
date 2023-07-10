import Link from "next/link";
import { useContext, useState } from "react";
import { StateContext } from "./Layout";
import { BiLogIn } from "react-icons/bi";
import { MdMedicalServices } from "react-icons/md";
import { FiChevronDown, FiLogOut, FiActivity } from "react-icons/fi";
import { FaMoneyBillAlt } from "react-icons/fa";

export function Navbar() {
  const [showAct, setShowAct] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const { activePages, setActivePages, activeLogin, setActiveLogin, loginTrue, setLoginTrue, asNurse, setAsNurse } = useContext(StateContext);
  
  return (
    <div className="navbar relative bg-main flex justify-between lg:justify-around items-center py-2 text-white h-24 sticky top-0" style={{ zIndex: '500' }}>
      <img src='logoWhite.png' className="ml-5 w-44 md:w-56" />
      <div className="hidden lg:block">
        <Link href='/' className={`text-2xl font-medium py-2 px-4 ${activePages === 'home' ? 'bg-white text-main font-semibold' : 'text-white'}`}
          onClick={() => { setActivePages('home'); setActiveLogin('signUp') }}
        >Home</Link>
        <Link href='/services' className={`text-2xl font-medium py-2 px-4 ${activePages === 'services' ? 'bg-white text-main font-semibold' : 'text-white'}`}
          onClick={() => { setActivePages('services'); setActiveLogin('signUp') }}
        >Services</Link>
        <Link href='/' className={`text-2xl font-medium py-2 px-4 ${activePages === 'about' ? 'bg-white text-main font-semibold' : 'text-white'}`}
          onClick={() => { setActivePages('about'); setActiveLogin('signUp') }}
        >About</Link>
      </div>
      {loginTrue ?
        <div className="flex items-center reletive">
          <img src='avatar.jpg' style={{ width: '60px', height: '60px' }} className="rounded-full mr-1" />
          <span onClick={() => setShowAct(!showAct)}>
            <FiChevronDown className="text-3xl" />
          </span>
          {showAct &&
            <ul className={`absolute -bottom-28 right-1 lg:right-40 bg-main px-3 py-2 space-y-2 rounded text-lg ${asNurse ? 'lg:-bottom-44' : 'lg:-bottom-36'} `}>
              <li className="hidden lg:block" >Youssef Elmahallawy</li>
              {asNurse && <li onClick={() => setShowAct(false)}><Link href='/balance' className="flex justify-around items-center">
                Balance<FaMoneyBillAlt className="ml-4" /></Link></li>}
              <li onClick={() => setShowAct(false)}><Link href='/activity' className="flex justify-around items-center">
                My Activity<FiActivity className="ml-4" /></Link></li>
              <li onClick={() => setShowAct(false)}><Link href='/myservice' className="flex justify-around items-center">
                My Profile<MdMedicalServices className="ml-4" /></Link></li>
              <li className="border-t-2 flex justify-around items-center cursor-pointer" onClick={() => { setShowAlert(true); setShowAct(false) }}>
                Log Out<FiLogOut className="ml-1" /></li>
            </ul>
          }
        </div>
        :
        <>
          <div className="hidden lg:block">
            <Link href='/login' className={`text-2xl font-medium py-2 px-4 mr-2 ${activeLogin === 'login' ? 'bg-white text-main font-semibold ' : 'text-white'}`}
              onClick={() => {
                setActiveLogin('login');
                setActivePages('')
              }}
            >Login</Link>
            <Link href='/signup' className={`text-2xl font-medium py-2 px-4 ${activeLogin === 'signUp' ? 'bg-white text-main font-semibold' : 'text-white'}`}
              onClick={() => {
                setActiveLogin('signUp')
                setActivePages('')
              }}
            >Sign Up</Link>
          </div>

          <div className="mr-6 lg:hidden ">
            <Link href='/signup' className={`${activeLogin === 'signUp' ? '' : 'text-white'}`}
              onClick={() => {
                setActiveLogin('signUp')
                setActivePages('')
              }}
            ><BiLogIn className="text-5xl sm:text-5xl font-medium py-2 pl-1 pr-2 rounded-full bg-white text-main" /></Link>
          </div>
        </>
      }
      {showAlert &&
        <div className="absolute top-96 bg-main p-16 rounded-lg font-bold">
          <p className="text-3xl pb-12">Are You Sure For Loging Out ?!</p>
          <div className="flex justify-between">
            <button className="text-main bg-white py-2 px-6 text-2xl rounded-full" onClick={() => setShowAlert(false)}>Cancel</button>
            <button className="text-main bg-white py-2 px-6 text-2xl rounded-full">
              <Link href='/' onClick={() => { setLoginTrue(false); setShowAlert(false) }} className="flex justify-around items-center">
                Sure<FiLogOut className="ml-1" /></Link>
            </button>
          </div>
        </div>
      }
    </div>
  )
}