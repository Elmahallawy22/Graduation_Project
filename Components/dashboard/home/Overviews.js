import { useEffect, useState } from 'react'
import { GrStackOverflow } from 'react-icons/gr'
export function Overviews() {
  const [active , setActive] = useState('nurses');

  return (
    <div className="overviews bg-white w-full lg:w-2/3">
      <div className="flex items-end py-3 pl-5 border-b border-b-gray-300">
        <h1 className="text-2xl font-bold mr-1 flex items-center text-main"><GrStackOverflow className='mr-1' /> Overview </h1>
        <span className="text-gray-600">report overview....</span>
      </div>
      <div className='py-3 border-b border-b-gray-300'>
        <a className={`nav-itm p-3 ${active == 'nurses' ? 'text-block border-b-4 border-blue-800':''}`} onClick={()=>setActive('nurses')}>Nurses</a>
        <a className={`nav-itm p-3 ${active == 'patients' ? 'text-block border-b-4 border-blue-800':''}`} onClick={()=>setActive('patients')}>Patients</a>
        <a className={`nav-itm p-3 ${active == 'orders' ? 'text-block border-b-4 border-blue-800':''}`} onClick={()=>setActive('orders')}>Orders</a>
      </div>
      <div className={`px-6 py-2 text-sm ${active === 'nurses' ? 'block' :"hidden"}`}>
        <div className='item-list'>
          <p className='font-thin'>Total Nurses</p>
          <span>0</span>
        </div>
        <div className='item-list'>
          <p className='font-thin'>Active Nurses</p>
          <span>0</span>
        </div>
        <div className='item-list '>
          <p className='font-thin'>InActive Nurses</p>
          <span>0</span>
        </div>
        <div className='item-list'>
          <p className='font-thin'>Nurses Jioned This Week</p>
          <span>0</span>
        </div>
        <div className='item-list '>
          <p className='font-thin'>Nurses Jioned This Month</p>
          <span>0</span>
        </div>
        <div className='item-list'>
          <p className='font-thin'>Nurses Jioned This Year</p>
          <span>0</span>
        </div>
      </div>
      <div className={`px-6 py-2 text-sm ${active === 'patients' ? 'block' :"hidden"}`}>
        <div className='item-list'>
          <p className='font-thin'>Total Patients</p>
          <span>0</span>
        </div>
        <div className='item-list'>
          <p className='font-thin'>Active Patients</p>
          <span>0</span>
        </div>
        <div className='item-list '>
          <p className='font-thin'>InActive Patients</p>
          <span>0</span>
        </div>
        <div className='item-list'>
          <p className='font-thin'>Patients Jioned This Week</p>
          <span>0</span>
        </div>
        <div className='item-list '>
          <p className='font-thin'>Patients Jioned This Month</p>
          <span>0</span>
        </div>
        <div className='item-list'>
          <p className='font-thin'>Patients Jioned This Year</p>
          <span>0</span>
        </div>
      </div>
      <div className={`px-6 py-2 text-sm ${active === 'orders' ? 'block' :"hidden"}`}>
        <div className='item-list'>
          <p className='font-thin'>Total Orders</p>
          <span>0</span>
        </div>
        <div className='item-list'>
          <p className='font-thin'>Active Orders</p>
          <span>0</span>
        </div>
        <div className='item-list '>
          <p className='font-thin'>InActive Orders</p>
          <span>0</span>
        </div>
        <div className='item-list'>
          <p className='font-thin'>Orders Jioned This Week</p>
          <span>0</span>
        </div>
        <div className='item-list '>
          <p className='font-thin'>Orders Jioned This Month</p>
          <span>0</span>
        </div>
        <div className='item-list'>
          <p className='font-thin'>Orders Jioned This Year</p>
          <span>0</span>
        </div>
      </div>
    </div>
  )
}