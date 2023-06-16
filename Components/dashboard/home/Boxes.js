import { Box } from "./Box";
import { nurses } from '../../../data/data';
import { ordersData } from '../../../data/data';
import { patients } from '../../../data/data';
import {BsCartCheck , BsFillPeopleFill} from 'react-icons/bs';
import {MdOutlinePeople} from 'react-icons/md';
import { FaMoneyBillWave } from "react-icons/fa";

export function Boxes() {
const orderLng = ordersData.length; 
const nurseLng = nurses.length; 
const patientLng = patients.length; 
  return (
    <div className="flex flex-wrap lg:flex-nowrap gap-x-5 items-center justify-center">
      <Box color='bg-sky-500' scolor='bg-sky-700' lngth={orderLng} name='Order' link='order' icon={<BsCartCheck/>}/>
      <Box color='bg-green-400' scolor='bg-green-600' lngth={nurseLng} name='Nurses' link='nurses' icon={<MdOutlinePeople/>}/>
      <Box color='bg-yellow-500' scolor='bg-yellow-600' lngth={patientLng} name='Patient' link='patients' icon={<BsFillPeopleFill/>}/>
      <Box color='bg-cyan-500' scolor='bg-cyan-700' lngth='500' name='budget' link='budget' icon={<FaMoneyBillWave/>}/>
    </div>
  )
}