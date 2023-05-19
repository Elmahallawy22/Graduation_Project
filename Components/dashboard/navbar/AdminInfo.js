import { FiChevronDown } from "react-icons/fi"
export function AdminInfo() {
   return (
      <div className="flex">
         <img src='avatar.jpg' className="w-12 rounded-full lg:rounded-lg " />
         <div className="flex flex-col mx-1 lg:mx-2 justify-center">
            <div className="flex items-center font-bold">
               <p className="mr-1 hidden lg:block">Joo Elmahallawy</p>
               <FiChevronDown className="text-3xl " />
            </div>
            <p className="text-gray-500 text-sm hidden lg:block">Super Admin</p>
         </div>
      </div>
   )
};