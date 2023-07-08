import React from 'react';
import Link from 'next/link';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { GiAges } from "react-icons/gi";
import { FaMoneyBillWave, FaStar } from "react-icons/fa";
import { MdCastForEducation, MdDriveFileRenameOutline, MdDescription } from "react-icons/md";
import { BsGenderFemale, BsGenderMale, BsWhatsapp, BsFillCartCheckFill, BsChevronDoubleDown, BsChevronDoubleUp } from "react-icons/bs";
import { useState } from 'react';

function Activity() {
  const [showActiveO, setShowActiveO] = useState(false);
  const [showActiveT, setShowActiveT] = useState(false);
  return (
    <>
      <div className="flex justify-center pt-5 lg:pt-10 pb-12">
        <div className="container self-stretch flex flex-col items-center xl:flex-row xl:items-start text-white xl:space-y-0 xl:space-x-1 px-2">
          <div className='p-4 bg-main rounded-t-lg xl:rounded-l-lg m-0 flex flex-col items-center text-xl md:text-3xl space-y-2'>
            <img src='avatar2.jpg' className='rounded' style={{ width: '300px', height: '250px' }} />
            <p>Youssef Elmahallawy</p>
            <p className='flex'>{Number.parseFloat(24.65 / 5).toFixed(1)} <FaStar className='mx-2' /></p>
          </div>
          <div className='px-8 py-6 font-bold bg-main text-2xl md:text-3xl flex-1 rounded-l rounded-r-lg  space-y-8'>
            <h1 className='text-gold underline'>About The Nurse:</h1>
            <p className='flex'><MdDriveFileRenameOutline className='mr-2' />Habeba Ahmed Mohamed</p>
            <p className='flex'> <MdCastForEducation className='mr-2' />Cairo University Faculty of Nursing</p>
            <div className='flex xl:pr-36 justify-between'>
              <p className='flex'>Female<BsGenderFemale className='ml-2' /></p>
              <p className='flex'> <GiAges className='mr-2' />{26} Years</p>
            </div>
            <div className='flex pr-12 xl:pr-48 justify-between'>
              <p className='flex items-center'>Cairo <HiOutlineLocationMarker className='mx-2' /></p>
              <p className='flex'> <FaMoneyBillWave className='mx-2' />{15}$</p>
            </div>
            <div className='flex xl:pr-36 justify-between'>
              <Link href={`https://wa.me/${`+201067271096`}`} target='_blank'
                className="text-xl 2xl:text-3xl xl:font-bold bg-white text-main py-2 w-fit px-3 rounded-3xl" >
                <span className="mr-1 flex items-center">Contact on Whatsapp <BsWhatsapp className='mx-2' /></span>
              </Link>
              <Link href='../order' className="text-xl 2xl:text-3xl font-normal bg-white text-main py-2 w-fit px-3 rounded-3xl" >
                <span className="mr-1 flex items-center">Order Me <BsFillCartCheckFill className='mx-2' /></span>
              </Link>
            </div>
            {showActiveO && <div>
              <h1 className='text-gold underline mb-2'>Nurse Description:</h1>
              <p className='flex flex-1'><MdDescription className='pr-2' />As a nurse, I understand that each patient has unique care needs that require special attention and personalized care.That's why I offer specialized nursing care services to help patients achieve optimal wellness and recovery. My special nursing care services include a range of services tailored to meet the unique needs of each patient.These services may include wound care, medication management, pain management, and patient education.</p>
            </div>}
            <div className='flex justify-center '>
              <p className='text-2xl 2xl:text-3xl font-normal bg-white text-main py-1 w-fit px-3 rounded-3xl flex'
                onClick={() => setShowActiveO(!showActiveO)}
              >Show {showActiveO ? 'Less' : 'More'}{showActiveO ? <BsChevronDoubleUp className='mx-2' /> : <BsChevronDoubleDown className='mx-2' />}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center pb-12">
        <div className="container self-stretch flex flex-col items-center xl:flex-row xl:items-start text-white xl:space-y-0 xl:space-x-1 px-2">
          <div className='p-4 bg-main rounded-t-lg xl:rounded-l-lg m-0 flex flex-col items-center text-xl md:text-3xl space-y-2'>
            <img src='avatar4.jpg' className='rounded' style={{ width: '300px', height: '250px' }} />
            <p>Youssef Elsayed</p>
            <p className='flex'>{Number.parseFloat(23.65 / 5).toFixed(1)} <FaStar className='mx-2' /></p>
          </div>
          <div className='px-8 py-6 font-bold bg-main text-2xl md:text-3xl flex-1 rounded-l rounded-r-lg  space-y-8'>
            <h1 className='text-gold underline'>About The Nurse:</h1>
            <p className='flex'><MdDriveFileRenameOutline className='mr-2' />Youssef Elsayed ibrahem Mohamed</p>
            <p className='flex'> <MdCastForEducation className='mr-2' />Mansoura University Faculty of Nursing</p>
            <div className='flex xl:pr-36 justify-between'>
              <p className='flex'>Male<BsGenderMale className='ml-2' /></p>
              <p className='flex'> <GiAges className='mr-2' />{25} Years</p>
            </div>
            <div className='flex pr-12 xl:pr-48 justify-between'>
              <p className='flex items-center'>El Mansoura <HiOutlineLocationMarker className='mx-2' /></p>
              <p className='flex'> <FaMoneyBillWave className='mx-2' />{10}$</p>
            </div>
            <div className='flex xl:pr-36 justify-between'>
              <Link href={`https://wa.me/${`+201067271096`}`} target='_blank'
                className="text-xl 2xl:text-3xl xl:font-bold bg-white text-main py-2 w-fit px-3 rounded-3xl" >
                <span className="mr-1 flex items-center">Contact on Whatsapp <BsWhatsapp className='mx-2' /></span>
              </Link>
              <Link href='../order' className="text-xl 2xl:text-3xl font-normal bg-white text-main py-2 w-fit px-3 rounded-3xl" >
                <span className="mr-1 flex items-center">Order Me <BsFillCartCheckFill className='mx-2' /></span>
              </Link>
            </div>
            {showActiveT && <div>
              <h1 className='text-gold underline mb-2'>Nurse Description:</h1>
              <p className='flex flex-1'><MdDescription className='pr-2' />As a nurse, I understand that each patient has unique care needs that require special attention and personalized care.That's why I offer specialized nursing care services to help patients achieve optimal wellness and recovery. My special nursing care services include a range of services tailored to meet the unique needs of each patient.These services may include wound care, medication management, pain management, and patient education.</p>
            </div>}
            <div className='flex justify-center '>
              <p className='text-2xl 2xl:text-3xl font-normal bg-white text-main py-1 w-fit px-3 rounded-3xl flex'
                onClick={() => setShowActiveT(!showActiveT)}
              >Show {showActiveT ? 'Less' : 'More'}{showActiveT ? <BsChevronDoubleUp className='mx-2' /> : <BsChevronDoubleDown className='mx-2' />}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Activity;
