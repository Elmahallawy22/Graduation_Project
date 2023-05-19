import { AiOutlineRight } from "react-icons/ai";

export function ItemOfMenu(props){
    return(
        <div className="flex items-center text-xl justify-between my-5 pl-6 sm:pl-12 lg:pl-6 cursor-pointer hover:bg-white hover:rounded hover:text-gray-500 hover:py-2">
            <div className="flex items-center">
                <span className="pr-4 text-center">{props.icon}</span>
                <span className="hidden lg:block">{props.name}</span>
            </div>
            <AiOutlineRight className="hidden lg:block mr-2"/>
        </div>
    )
};