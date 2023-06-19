import Head from 'next/head';
import Headofsection from '../Components/Headofsection';
import { specialNurse } from '../data/data';
import Cards from '../Components/cards';

import { useState } from 'react';
import { useEffect } from 'react';

function Special() {
  const [userData , setUserData] = useState(specialNurse);
  
  const allOfAbove = () => {
    setUserData(specialNurse);
  }

  const activeUser = () => {
    setUserData([]);
    const list = [];
    specialNurse.map((item) => {
      if (item.Status === 'active')
        list.push(item);
    })
    setUserData(list);
  }
  const maleUser = () => {
    setUserData([]);
    const list = [];
    specialNurse.map((item) => {
      if (item.Gender === 'Male')
        list.push(item);
    })
    setUserData(list);
  }
  const femaleUser = () => {
    setUserData([]);
    const list = [];
    specialNurse.map((item) => {
      if (item.Gender === 'Female')
        list.push(item);
    })
    setUserData(list);
  }
  useEffect(() => {
    maleUser();
    femaleUser();
    activeUser();
    allOfAbove();
  }, []);
  const filterButton = `text-2xl px-4 py-2 m-2 rounded-full hover-btn text-white bg-main `
  return (
    <>
      <Head>
        <title>Special Nursing</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Playball&family=Roboto+Serif:ital,opsz,wght@0,8..144,100;0,8..144,700;1,8..144,100;1,8..144,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"></link>
      </Head>
      <Headofsection title='Special Nursing' />
      <div className='mt-10'>
      <div className='filter-div flex  justify-center bg-white' >
        <div className='filter'>
          <button className={filterButton} onClick={() => {
            allOfAbove();
          }}>All Of Above</button>
          <button className={filterButton} onClick={() => {
            activeUser();
          }}>Active</button>
          <button className={filterButton} onClick={() => {
            allOfAbove();
          }}>All Genders</button>
          <button className={filterButton} onClick={() => {
            maleUser();
          }}>Male</button>
          <button className={filterButton} onClick={() => {
            femaleUser();
          }}>Female</button>
        </div>
      </div>
        <div className='flex justify-center mt-6'>
        <div className='container p-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-5'>
          <Cards users={userData} />
        </div>
        </div>
      </div>
    </>
  )
}
export default Special;