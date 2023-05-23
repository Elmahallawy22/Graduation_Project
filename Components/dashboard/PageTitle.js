import { useContext } from 'react';
import { StateContext } from '../Layout';
export function PageTitle(props){
  const { activeMenu, setActiveMenu } = useContext(StateContext);
    return(
        <div className={`pl-10 ${activeMenu=== false ? 'xl:pl-24' : ''}`}>
            <p className="text-2xl font-bold text-gray-400 ml-1">{props.category}</p>
            <p className="text-4xl font-bold ">{props.page}</p>
        </div>
    )
}