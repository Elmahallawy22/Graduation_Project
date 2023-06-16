import React from 'react';
import { useState } from 'react'
import { BsFillBarChartLineFill } from 'react-icons/bs'

export function Statistics() {
  const [active, setActive] = useState('today');

  const date = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options);

  return (
    <div className="overviews bg-white w-full lg:w-1/3">
      <div className="py-3 pl-5 border-b border-b-gray-300">
        <h1 className="text-2xl font-bold mr-1 flex items-center text-main"><BsFillBarChartLineFill className='mr-1' />Order Statistics </h1>
      </div>
      <div className='py-3 border-b border-b-gray-300'>
        <a className={`nav-itm p-3 ${active == 'today' ? 'text-block border-b-4 border-blue-800':''}`} onClick={() => setActive('today')}>Today</a>
        <a className={`nav-itm p-3 ${active == 'week' ? 'text-block border-b-4 border-blue-800':''}`} onClick={() => setActive('week')}>Week</a>
        <a className={`nav-itm p-3 ${active == 'month' ? 'text-block border-b-4 border-blue-800':''}`} onClick={() => setActive('month')}>Month</a>
        <a className={`nav-itm p-3 ${active == 'year' ? 'text-block border-b-4 border-blue-800':''}`} onClick={() => setActive('year')}>Year</a>
      </div>
      <div className={`px-6 py-2 text-sm ${active === 'today' ? 'block' : "hidden"}`}>
        <div className='item-top'>{formattedDate} </div>
        <div className='item-list'>
          <p className='font-thin'>Orders Today</p>
          <span>0</span>
        </div>
        <div className='item-list'>
          <p className='font-thin'>Sales Today</p>
          <span>0</span>
        </div>
        <div className='item-list '>
          <p className='font-thin'>Delivered Order</p>
          <span>0</span>
        </div>
        <div className='item-list'>
          <p className='font-thin'>In Preparation</p>
          <span>0</span>
        </div>
      </div>
      <div className={`px-6 py-2 text-sm ${active === 'week' ? 'block' : "hidden"}`}>
        <div className='item-top'>Week </div>
        <div className='item-list'>
          <p className='font-thin'>Orders Week</p>
          <span>0</span>
        </div>
        <div className='item-list'>
          <p className='font-thin'>Sales Week</p>
          <span>0</span>
        </div>
        <div className='item-list '>
          <p className='font-thin'>Delivered Order</p>
          <span>0</span>
        </div>
        <div className='item-list'>
          <p className='font-thin'>In Preparation</p>
          <span>0</span>
        </div>
      </div>
      <div className={`px-6 py-2 text-sm ${active === 'month' ? 'block' : "hidden"}`}>
        <div className='item-top'>Month</div>
        <div className='item-list'>
          <p className='font-thin'>Orders Month</p>
          <span>0</span>
        </div>
        <div className='item-list'>
          <p className='font-thin'>Sales Month</p>
          <span>0</span>
        </div>
        <div className='item-list '>
          <p className='font-thin'>Delivered Order</p>
          <span>0</span>
        </div>
        <div className='item-list'>
          <p className='font-thin'>In Preparation</p>
          <span>0</span>
        </div>
      </div>
      <div className={`px-6 py-2 text-sm ${active === 'year' ? 'block' : "hidden"}`}>
        <div className='item-top'>Year</div>
        <div className='item-list'>
          <p className='font-thin'>Orders Year</p>
          <span>0</span>
        </div>
        <div className='item-list'>
          <p className='font-thin'>Sales Year</p>
          <span>0</span>
        </div>
        <div className='item-list '>
          <p className='font-thin'>Delivered Order</p>
          <span>0</span>
        </div>
        <div className='item-list'>
          <p className='font-thin'>In Preparation</p>
          <span>0</span>
        </div>
      </div>
    </div>
  )
}


