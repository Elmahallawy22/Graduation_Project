import React from 'react';
import { render } from 'react-dom';
import { useRouter } from 'next/router';
import { specialNurse } from '../../data/data';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { GiAges } from "react-icons/gi";
import { FaMoneyBillWave ,FaStar } from "react-icons/fa";
import { MdCastForEducation , MdDriveFileRenameOutline} from "react-icons/md";
import { BsGenderFemale , BsGenderMale} from "react-icons/bs";
import { useEffect, useState } from 'react';
// import ReactWhatsapp from 'react-whatsapp';

function Id() {
  const  [user ,  setUser ] = useState({})
  const [age ,  setAge] = useState(0)
  const params = useRouter();
  useEffect(()=>{
    specialNurse.map((item)=>{
      if(item.Id == params.query.id){
        setUser(item)
        setAge(calculateAge(item.Birthday))
      }
    })
  },[])
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
      <div className="container self-stretch flex flex-col items-center xl:flex-row xl:items-start text-white xl:space-y-0 xl:space-x- ">
        <div className='p-4 bg-main xl:rounded-l-lg rounded-t-lg m-0 flex flex-col items-center text-xl md:text-3xl space-y-2'>
        <img src={user.Image} className='rounded'  style={{width:'300px' , height: '250px'}}/>
        <p>{user.NameShort}</p>
        <p className='flex'>{Number.parseFloat(user.Price/5).toFixed(1)} <FaStar className='mx-2'/></p>
        </div>
        <div className='px-8 py-6 font-bold bg-main text-2xl md:text-3xl flex-1 rounded-l rounded-r-lg  space-y-8'>
          <h1 className='text-gold underline'>About The Nurse:</h1>
          <p className='flex'><MdDriveFileRenameOutline className='mr-2'/> {user.Name}</p>
          <p className='flex'> <MdCastForEducation className='mr-2'/>{user.Education}</p>
          <div className='flex xl:pr-36 justify-between'>
          <p className='flex'>{user.Gender}{user.Gender == "Male" ? <BsGenderMale className='ml-2'/> : <BsGenderFemale className='ml-2'/>}</p>
            <p className='flex'> <GiAges className='mr-2'/>{age} Yeard</p>
          </div>
          <div className='flex pr-12 xl:pr-48 justify-between'>
          <p className='flex items-center'>{user.Location} <HiOutlineLocationMarker className='mx-2'/></p>
          <p className='flex'> <FaMoneyBillWave className='mx-2'/>{user.Price}$</p>
          </div>
          {/* <ReactWhatsapp number={`${user.PhoneNumber}`} message="Hello World!!!" type='button' className="me-5 rounded-pill text-4xl ps-3 pe-3 text-white bg-main">
            Contact on Whatsapp </ReactWhatsapp> */}
        </div>
      </div>
    </div>
    </>
  )
}
export default Id;