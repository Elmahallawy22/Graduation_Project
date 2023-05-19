import {DashNavNotf} from './DashNavNotf';
import {MdOutlineNotificationsActive} from 'react-icons/md'
import {BiMessageRounded , BiGift} from 'react-icons/bi'
export function DashNavNotifications(){
    return(
        <div className='flex'>
            <DashNavNotf icon={<MdOutlineNotificationsActive/>} active={true}/>
            <DashNavNotf icon={<BiMessageRounded/>}/>
            <DashNavNotf icon={<BiGift/>}/>
        </div>
    )
};
