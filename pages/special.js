import Head from 'next/head';
import Headofsection from '../Components/Headofsection';
import { usersData } from '../data/data';
import Cards from '../Components/cards';
import { useEffect } from 'react';
import { useState } from 'react';
// import { log } from 'console';

function Special() {
  const [userData , setUserData] = useState({})
  useEffect(()=>{

    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>setUserData(json))
    console.log(userData);
  },[])
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
      <div className='flex justify-center mt-10'>
        <div className='container p-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-5'>
          <Cards users={usersData} />
        </div>
        

      </div>
    </>
  )
}
export default Special;