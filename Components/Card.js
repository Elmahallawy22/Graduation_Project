import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import Button from './Button';
function Card(props) {
  return (
    <div className="card rounded flex text-2xl font-medium text-main flex-col items-center bg-primary pt-20 pb-4 px-7" key={props.key}>
      <div className="back-image"></div>
      <div className="contant-image">
        <img src={props.image} className='card-image'/>
      </div>
      <div className="flex items-center">

      <h1 className="text-3xl font-semibold text-center my-2 mr-2">{props.name}</h1>
        <span className="is-active" style={{backgroundColor:`${props.clr}`}}></span>
      </div>
      <p className="flex items-center mb-1">Location: {Number.parseFloat(props.location /1000).toFixed(1)}km<HiOutlineLocationMarker /></p>
        <p >Price: {props.price}$</p>
        <p className="mt-1 mb-2 flex items-center">Rate: {props.rate} <AiFillStar/></p>
      <div className="flex justify-between w-full">
        <Button name='Order Me' />
        <Button name='Show More' />
      </div>
    </div>
  )
}
export default Card;