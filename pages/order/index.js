import { useState, useEffect, useContext } from 'react';
import { StateContext } from '../../Components/Layout'
import { specialNurse } from '../../data/data';
import { MdPayment } from 'react-icons/md';
import { HiOutlineArrowLeft } from 'react-icons/hi';

function Order() {
  const [user, setUser] = useState({})
  const { userId, setUserId } = useContext(StateContext);
  useEffect(() => {
    specialNurse.map((item) => {
      if (item.Id === userId) setUser(item);
    })
  }, [])
  return (
    <div className='flex text-white text-xl xl:text-3xl px-24 py-8 font-bold rounded-lg'>
      <div className='flex flex-col bg-main p-4 space-y-2 items-center'>
        <img src={user.Image} style={{ width: '280px', height: '300px' }} />
        <h2>{user.NameShort}</h2>
      </div>
      <div className='flex flex-col text-main bg-primary flex-1 justify-center space-y-8 px-16'>
        <div className='flex justify-around mr-8'>
          <p>Service Price</p>
          <p>{user.Price}$</p>
        </div>
        <div className='flex justify-around pb-6 border-b border-b-2 border-b-yellow-400'>
          <p>Fees</p>
          <p>2.00$</p>
        </div>
        <div className='flex justify-around mr-8'>
          <p>The Total Price</p>
          <p>{user.Price + 2}$</p>
        </div>
        <div className='flex justify-between mx-24'>
          <button className='text-white py-2 px-5 rounded-full flex items-center' ><HiOutlineArrowLeft className='mr-2'/>Back</button>
          <button className='text-white py-2 px-5 rounded-full flex items-center' >Pay For Service <MdPayment className='ml-2'/></button>
        </div>
      </div>
    </div>
  )
}
export default Order;