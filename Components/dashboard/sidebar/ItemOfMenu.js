import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
export function ItemOfMenu(props) {
  const [active, setActive] = useState();
  
  return (
    <Link className=
      {`item flex items-center text-xl justify-between my-5 pl-6 sm:pl-12 lg:pl-6 cursor-pointer hover:bg-white hover:rounded hover:text-gray-500
      hover:py-2 ${props.active === true && 'bg-white text-gray-500 rounded py-2'}`} href={`${props.link}`} >
      <div className="flex items-center">
        <span className="pr-4 text-center">{props.icon}</span>
        <span className="hidden lg:block">{props.name}</span>
      </div>
      <AiOutlineRight className="hidden lg:block mr-2" />
    </Link>
  )
};