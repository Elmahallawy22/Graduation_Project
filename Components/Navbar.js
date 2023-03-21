import Link from "next/link";
import { useContext } from "react";
import { StateContext } from "./Layout";
import { BiLogIn } from "react-icons/bi";

export function Navbar() {
  const { activePages, setActivePages , activeLogin , setActiveLogin } = useContext(StateContext);
  return (
    <div className="navbar bg-main flex justify-between lg:justify-around items-center py-2 text-white h-24 sticky top-0" style={{ zIndex: '500' }}>
      <img src='logoWhite.png'  className="ml-5 w-44 md:w-56" />
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
    </div>
  )
}