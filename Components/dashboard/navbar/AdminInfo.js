import { useState } from "react"
import { FiChevronDown } from "react-icons/fi"
export function AdminInfo() {
   const [showLogout, setShowLogout] = useState(false)
   return (
      <div className="flex relative">
         <img src='avatar.jpg' className="w-12 rounded-full lg:rounded-lg " />
         <div className="flex flex-col mx-1 lg:mx-2 justify-center">
            <div className="flex items-center font-bold">
               <p className="mr-1 hidden lg:block">Joo Elmahallawy</p>
               <span onClick={()=>setShowLogout(true)}>
                  <FiChevronDown className="text-3xl " />
               </span>
               {showLogout &&
                  <span className="absolute rounded -right-4 top-7 bg-main text-white py-1 px-2">
                     <a href="/">Log Out</a>
                  </span>
               }
            </div>
            <p className="text-gray-500 text-sm hidden lg:block">Super Admin</p>
         </div>
      </div>
   )
};