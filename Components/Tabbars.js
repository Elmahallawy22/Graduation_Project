import Link from "next/link";
import { TbActivity } from 'react-icons/tb';
import { MdMedicalServices } from 'react-icons/md';
import { HiHome, HiOutlineInformationCircle } from 'react-icons/hi';
import { useContext } from "react";
import { StateContext } from "./Layout";

export function Tabbars() {
  const { activePages, setActivePages } = useContext(StateContext);
  return (
    //sidebar class styled in globals
    <div className="w-full lg:hidden flex justify-evenly pt-2 items-center text-xl md:text-2xl text-white fixed bottom-0 bg-main h-16 font-bold" style={{ zIndex: '500' }}>
      <Link href='/' className={`flex flex-col items-center ${activePages == 'home' ? 'text-black' : ''}`}
        onClick={() => { setActivePages('home') }}
      ><HiHome /><span className="text-sm md:text-lg">Home</span></Link>
      <Link href='/services' className={`flex flex-col items-center ${activePages == 'services' ? 'text-black' : ''}`}
        onClick={() => { setActivePages('services'); }}
      ><MdMedicalServices /><span className="text-sm md:text-lg">Services</span></Link>
      <Link href='/' className={`flex flex-col items-center ${activePages == 'activity' ? 'text-black' : ''}`}
        onClick={() => { setActivePages('activity'); }}
      ><TbActivity /><span className="text-sm md:text-lg">Avtivity</span></Link>
      <Link href='/' className={`flex flex-col items-center ${activePages == 'about' ? 'text-black' : ''}`}
        onClick={() => { setActivePages('about'); }}
      ><HiOutlineInformationCircle /><span className="text-sm md:text-lg">About</span></Link>
    </div>
  )
}