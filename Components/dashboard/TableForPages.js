import { useState } from 'react';
import { FiChevronsRight } from 'react-icons/fi';
import { FiChevronsLeft } from 'react-icons/fi';
const num = 15; // number of items in table...........

function TableForPages(props) {
  const [startItem, setStartItem] = useState(0)
  const [endItem, setEndItem] = useState(num);
  const items = [];
  for (let i = 0; i <= Math.ceil(props.items.length / num) - 1; i++) {
    items.push(
      <span className={`spans span${i} px-3 py-1 border-2 border-white rounded-full mx-1 font-bold  ${ startItem === num * i  && 'bg-white' }`}
        onClick={() => { setStartItem(i * num); setEndItem((i + 1) * num) }} > {i + 1} </span>
    )
  }
  return (
    <>
      <table className=''>
        <thead>
          <tr>
            {props.one != false && <td>{props.one}</td>}
            {props.one != false && <td>{props.two}</td>}
            {props.one != false && <td>{props.three}</td>}
            {props.one != false && <td>{props.four}</td>}
            {props.one != false && <td>{props.five}</td>}
            {props.one != false && <td>{props.six}</td>}
            {props.one != false && <td>{props.seven}</td>}
            {props.one != false && <td>{props.eight}</td>}
          </tr>
        </thead>
        {props.type == "order" &&
          <tbody>
            {props.items.map((
              item, index) => {
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
          </tbody>}
        {props.type == "patients" &&
          <tbody>
            {props.items.map((item, index) => {
              if (index >= startItem && index < endItem) {
                return (
                  <tr key={index.ID}>
                    <td className='flex justify-center'><img src={item.Image} width='70px' style={{ height: '50px' }} /></td>
                    <td className='font-bold'>{item.Name}</td>
                    <td>{item.Gender}</td>
                    <td>{item.Service}.</td>
                    <td><span className='py-1 px-2 text-l text-white rounded-lg' style={{ backgroundColor: `${item.StatusBg}` }}>{item.Status}</span></td>
                    <td>{item.Location}</td>
                  </tr>
                )
              }
            })}
          </tbody>}
        {props.type == "nurses" &&
          <tbody>
            {props.items.map((item, index) => {
              if (index >= startItem && index < endItem) {
                return (
                  <tr key={index.ID}>
                    <td className='flex justify-center'><img src={item.Image} width='70px' style={{ height: '50px' }} /></td>
                    <td className='font-bold'>{item.Name}</td>
                    <td>{item.Gender}</td>
                    <td>{item.Service}</td>
                    <td>{item.Price}$</td>
                    <td><span className='py-1 px-2 text-l text-white rounded-lg' style={{ backgroundColor: `${item.StatusBg}` }}>{item.Status}</span></td>
                    <td>{item.Location}</td>
                  </tr>
                )
              }
            })}
          </tbody>}
      </table>
      <div className='py-2 flex bg-white w-full justify-center items-center bg-main'>
        <span onClick={() => {
          if (startItem >= num) {
            setStartItem(startItem - num);
            setEndItem(endItem - num);
          }
        }}><FiChevronsLeft className='text-3xl text-white' /></span>
        {items}
        <span onClick={() => {
          if (startItem <= num * (Math.ceil(props.items.length / num) - 2)) {
            setStartItem(startItem + num);
            setEndItem(endItem + num);
          }
        }}><FiChevronsRight className='text-3xl text-white' /></span>
      </div>
    </>
  )
}
export default TableForPages;