import { useContext } from 'react';
import { StateContext } from '../../Layout';
import { BsChevronDoubleLeft , BsFillMenuAppFill , BsFillKanbanFill ,BsCartCheck, BsFillPeopleFill } from 'react-icons/bs'
import { ItemOfMenu } from './ItemOfMenu';
import { CategoryName } from './CategoryName';
import { HiHome } from 'react-icons/hi';
import { AiOutlineLineChart , AiOutlineAreaChart , AiOutlineBarChart , AiOutlinePieChart, AiFillPieChart  } from 'react-icons/ai';
import { BiMessageSquareEdit } from 'react-icons/bi';
import { FaMoneyBillWave } from 'react-icons/fa';
import { MdDashboardCustomize, MdOutlinePeople , MdColorLens} from 'react-icons/md';
import { SiPowerpages , SiApacheecharts} from 'react-icons/si';



export function DashSideber() {
  const { activeMenu, setActiveMenu } = useContext(StateContext);

  return (
    <div className="bg-main text-white h-screen sticky top-0">
      <div className='h-20 flex justify-center items-center border-b border-white relative overflow-hidden'>
        <h1 className='text-2xl font-bold text-center xl:text-4xl'>Care <span className='text-gold'>4 </span>You</h1>
        {activeMenu && <span className='absolute -right-2 bg-white text-main py-2 px-1 rounded-lg'
          onClick={() => setActiveMenu(false)}><BsChevronDoubleLeft /></span>}
      </div>
      <div className='py-6 px-2 xl:px-7 2xl:px-10 '>
        <CategoryName icon={<MdDashboardCustomize />} title='Dashboard' />
        <ItemOfMenu icon={<HiHome />} name='Home' link='/dashboard'/>
        <CategoryName icon={<SiPowerpages />} title='page' />
        <ItemOfMenu icon={<BsCartCheck />} name='Order' link='/dashboard/order' />
        <ItemOfMenu icon={<MdOutlinePeople />} name='Nurses' link='/dashboard/nurses' />
        <ItemOfMenu icon={<BsFillPeopleFill />} name='Patient' link='/dashboard/patient' />
        <CategoryName icon={<BsFillMenuAppFill />} title='App' />
        <ItemOfMenu icon={<BsFillKanbanFill />} name='Kanban' />
        <ItemOfMenu icon={<BiMessageSquareEdit />} name='Editor' />
        <ItemOfMenu icon={<MdColorLens />} name='Color-Pick' />
        <CategoryName icon={<SiApacheecharts />} title='Chatrs' />
        <ItemOfMenu icon={<AiOutlineLineChart />} name='Line' />
        <ItemOfMenu icon={<AiOutlineAreaChart />} name='Area' />
        <ItemOfMenu icon={<AiOutlineBarChart />} name='Bar' />
        <ItemOfMenu icon={<AiFillPieChart />} name='Pie' />
        <ItemOfMenu icon={<FaMoneyBillWave/>} name='Financel' />
      </div>
    </div>
  )
};