import {FiSearch} from 'react-icons/fi';
import {RiCloseCircleLine} from 'react-icons/ri';

export function DashNavSearch() {
  return (
    <div className="hidden xl:flex search bg-gray-100 flex items-center rounded-lg text-slate-600 py-2 pr-2">
      <label className="flex ml-2 align-end">
        <FiSearch className="text-xl m-1 " />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent text-xl placeholder:text-base placeholder:text-slate-500 text-black hover:border-0 focus:outline-0"
        />
      </label>
        <RiCloseCircleLine className="text-xl " />
    </div>
  )
};