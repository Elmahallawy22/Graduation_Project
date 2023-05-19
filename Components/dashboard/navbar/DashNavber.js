import {DashNavTitle} from './DashNavTitle';
import { DashNavSearch } from './DashNavSearch';
import { DashNavNotifications } from './DashNavNotifications';
import { AdminInfo } from './AdminInfo';
import { useContext } from 'react';
import { StateContext } from  '../../Layout'
import {BsChevronDoubleRight} from 'react-icons/bs'
export function DashNavber() {
  const { activeMenu , setActiveMenu } = useContext(StateContext);
  
  return (
    <div id="dashboard-navbar" className={`sticky top-0 bg-white h-20 flex justify-between items-center pl-2 ${activeMenu=== true ?'' :'justify-evenly'} relative`}>
      { !activeMenu &&
      <span className='absolute -left-1 text-xl bg-gray-300 py-2 pr-1 rounded-lg' 
      onClick={()=>setActiveMenu(true)}
      ><BsChevronDoubleRight/></span>
    }
      <DashNavTitle />
      <DashNavSearch />
      <div className='flex '>
        <div className='border-r-2 border-gray-300 lg:pr-2 mr-2 lg:mr-5'>
        <DashNavNotifications />
        </div>
        <AdminInfo />
      </div>
    </div>  
  )
};