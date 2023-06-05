import { useState } from 'react';
import { FiChevronsRight } from 'react-icons/fi';
import { FiChevronsLeft } from 'react-icons/fi';

function TableForPages(props) {
  const [startItem, setStartItem] = useState(0)
  const [endItem, setEndItem] = useState(20)
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
            {props.items.map((item, index) => {
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
                    <td className='flex justify-center'><img src={item.Image} width='70px' style={{height:'50px'}} /></td>
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
                    <td className='flex justify-center'><img src={item.Image} width='70px' style={{height:'50px'}} /></td>
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
          if (startItem >= 20) {
            setStartItem(startItem - 20);
            setEndItem(endItem - 20);
          }
        }}><FiChevronsLeft className='text-3xl text-white' /></span>
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
          }
        }}><FiChevronsRight className='text-3xl text-white' /></span>
      </div>
    </>
  )
}
export default TableForPages;