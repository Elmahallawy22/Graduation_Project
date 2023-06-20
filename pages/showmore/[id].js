import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { specialNurse } from '../../data/data';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { GiAges } from "react-icons/gi";
import { FaMoneyBillWave, FaStar } from "react-icons/fa";
import { MdCastForEducation, MdDriveFileRenameOutline, MdDescription } from "react-icons/md";
import { BsGenderFemale, BsGenderMale, BsWhatsapp, BsFillCartCheckFill, BsChevronDoubleDown, BsChevronDoubleUp } from "react-icons/bs";
import { useEffect, useState } from 'react';

function Id() {
  const [user, setUser] = useState({})
  const [age, setAge] = useState(0)
  const [showActive, setShowActive] = useState(false)
  const params = useRouter();
  useEffect(() => {
    specialNurse.map((item) => {
      if (item.Id == params.query.id) {
        setUser(item)
        setAge(calculateAge(item.Birthday))
      }
    })
  }, [])
  function calculateAge(birthdate) {           //calculate the age... 
    const now = new Date();
    const birth = new Date(birthdate);
    const diffTime = Math.abs(now - birth);
    const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));
    return diffYears;
  }
  return (
    <>
      <div className="flex justify-center pt-5 lg:pt-10 pb-12">
        <div className="container self-stretch flex flex-col items-center xl:flex-row xl:items-start text-white xl:space-y-0 xl:space-x-1 px-2">
          <div className='p-4 bg-main rounded-t-lg xl:rounded-l-lg m-0 flex flex-col items-center text-xl md:text-3xl space-y-2'>
            <img src={user.Image} className='rounded' style={{ width: '300px', height: '250px' }} />
            <p>{user.NameShort}</p>
            <p className='flex'>{Number.parseFloat(user.Price / 5).toFixed(1)} <FaStar className='mx-2' /></p>
          </div>
          <div className='px-8 py-6 font-bold bg-main text-2xl md:text-3xl flex-1 rounded-l rounded-r-lg  space-y-8'>
            <h1 className='text-gold underline'>About The Nurse:</h1>
            <p className='flex'><MdDriveFileRenameOutline className='mr-2' /> {user.Name}</p>
            <p className='flex'> <MdCastForEducation className='mr-2' />{user.Education}</p>
            <div className='flex xl:pr-36 justify-between'>
              <p className='flex'>{user.Gender}{user.Gender == "Male" ? <BsGenderMale className='ml-2' /> : <BsGenderFemale className='ml-2' />}</p>
              <p className='flex'> <GiAges className='mr-2' />{age} Yeard</p>
            </div>
            <div className='flex pr-12 xl:pr-48 justify-between'>
              <p className='flex items-center'>{user.Location} <HiOutlineLocationMarker className='mx-2' /></p>
              <p className='flex'> <FaMoneyBillWave className='mx-2' />{user.Price}$</p>
            </div>
            <div className='flex xl:pr-36 justify-between'>
              <Link href={`https://wa.me/${user.Phone}`} target='_blank'
                className="text-xl 2xl:text-3xl xl:font-bold bg-white text-main py-2 w-fit px-3 rounded-3xl" >
                <span className="mr-1 flex items-center">Contact on Whatsapp <BsWhatsapp className='mx-2' /></span>
              </Link>
              <Link href={``}
                className="text-xl 2xl:text-3xl font-normal bg-white text-main py-2 w-fit px-3 rounded-3xl" >
                <span className="mr-1 flex items-center">Order Me <BsFillCartCheckFill className='mx-2' /></span>
              </Link>
            </div>
            {showActive && <div>
              <h1 className='text-gold underline mb-2'>Nurse Description:</h1>
              <p className='flex flex-1'><MdDescription className='pr-2' /> {user.Description}</p>
            </div>}
            <div className='flex justify-center '>
              <p className='text-2xl 2xl:text-3xl font-normal bg-white text-main py-1 w-fit px-3 rounded-3xl flex'
                onClick={() => setShowActive(!showActive)}
              >Show {showActive ? 'Less' : 'More'}{showActive ? <BsChevronDoubleUp className='mx-2' /> : <BsChevronDoubleDown className='mx-2' />}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Id;