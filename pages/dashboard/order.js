import { useState } from 'react';
import { ordersData } from '../../data/data';
import { FiChevronsRight } from 'react-icons/fi';
import { FiChevronsLeft } from 'react-icons/fi';
import { useContext } from 'react';
import { StateContext } from '../../Components/Layout';
import { PageTitle } from '../../Components/dashboard/PageTitle';
function Order() {
  const { activeMenu, setActiveMenu } = useContext(StateContext);
  const [startItem, setStartItem] = useState(0)
  const [endItem, setEndItem] = useState(20)
  return (
    <div className='py-3 lg:py-5 '>
      <PageTitle category='Page' page='Orders'/>
    <div id='orders' className={`flex ${activeMenu === false ? 'md:justify-center' : ''}`}>
      <div>
        <table className=''>
          <thead>
            <tr>
              <td>Image </td>
              <td>Item </td>
              <td>Customer Name </td>
              <td>Total Amount</td>
              <td>Status</td>
              <td>Order ID</td>
              <td>Location</td>
            </tr>
          </thead>
          <tbody>
            {ordersData.map((item, index) => {
              if (index >= startItem && index < endItem) {
                return (
                  <tr>
                    <td className='flex justify-center'><img src={item.ProductImage} width='70px' height='50px' /></td>
                    <td>{item.OrderItems}</td>
                    <td className='font-bold'>{item.CustomerName}</td>
                    <td>{item.TotalAmount}</td>
                    <td><span className='py-1 px-2 text-l text-white rounded-lg' style={{ backgroundColor: `${item.StatusBg}` }}>{item.Status}</span></td>
                    <td>{item.OrderID}</td>
                    <td>{item.Location}</td>
                  </tr>
                )
              }
            })}
          </tbody>
        </table>
        <div className='py-2 flex bg-white w-full justify-center items-center bg-main'>
          <span onClick={() => {
            if (startItem >= 20) {
              setStartItem(startItem - 20);
              setEndItem(endItem - 20);
            }}}><FiChevronsLeft className='text-3xl text-white' /></span>
          <span className={`px-3 py-1 border-2 border-white rounded-full mx-1 font-bold ${startItem === 0 ? 'bg-white' : 'text-white'}`}
            onClick={() => {
              setStartItem(0)
              setEndItem(20)
            }}>1</span>
          <span className={`px-3 py-1 border-2 border-white rounded-full mx-1 font-bold ${startItem === 20 ? 'bg-white' : 'text-white'}`} onClick={() => {
            setStartItem(20)
            setEndItem(40)
          }}>2</span>
          <span className={`px-3 py-1 border-2 border-white rounded-full mx-1 font-bold ${startItem === 40 ? 'bg-white' : 'text-white'}`} onClick={() => {
            setStartItem(40)
            setEndItem(60)
          }}>3</span>
          <span className={`px-3 py-1 border-2 border-white rounded-full mx-1 font-bold ${startItem === 60 ? 'bg-white' : 'text-white'}`} onClick={() => {
            setStartItem(60)
            setEndItem(80)
          }}>4</span>
          <span onClick={() => {
            if (startItem <= 40) {
              setStartItem(startItem + 20);
              setEndItem(endItem + 20);
            }}}><FiChevronsRight className='text-3xl text-white' /></span>
        </div>
      </div>
    </div>
            </div>
  )
}
export default Order;