import { Navbar } from "./Navbar";
import { Tabbars } from "./Tabbars";
import { Welcome } from "./Welcome";
import { DashNavber } from "./dashboard/navbar/DashNavber";
import { DashSideber } from "./dashboard/sidebar/DashSidebar";
import { createContext, useEffect, useState } from "react";

export const StateContext = createContext();
export const StateContextDashboard = createContext();

export function Layout(props) {
  // setTimeout(() => {
  //   document.querySelector('.welcome').style.display="none"    
  //   document.querySelector('.website').style.display="block"    
  // }, 1000);
  const [activePages, setActivePages] = useState('home');
  const [activeLogin, setActiveLogin] = useState('signUp');
  const [path, setPath] = useState(true);
  const [activeMenu, setActiveMenu] = useState(false);
  const [userId ,  setUserId] = useState(0);
  const [loginTrue , setLoginTrue ] = useState(false)
  const [asNurse , setAsNurse ] = useState(true)

  useEffect(() => {
    if (window.location.pathname === '/dashboard' || window.location.pathname === '/dashboard/order')
      setPath(false)
  }, [])

  return (
    <>
      {/* <div className="welcome">
        <Welcome/>
    </div> */}
      <>
        {path ?
          <div className="website" style={{ display: 'one' }}>
            <StateContext.Provider value={{ activePages, setActivePages, activeLogin, setActiveLogin , userId , setUserId , loginTrue , setLoginTrue , asNurse , setAsNurse}}>
              <Navbar />
              {props.children}
              <Tabbars />
            </StateContext.Provider>
          </div>
          :
          <div className="website" style={{ display: 'one' }}>
            <StateContext.Provider value={{ activeMenu, setActiveMenu }}>
              <div className="flex">
                {activeMenu ? (
                  <div className="w-1/6">
                    <DashSideber />
                  </div>
                ) : (
                  <div></div>
                )}
                <div className={`${activeMenu ? "w-5/6" : "w-full"}`}>
                  <DashNavber />
                  <div className="bg-slate-100 min-h-screen">
                    {props.children}
                  </div>
                </div>
              </div>
            </StateContext.Provider>
          </div>
        }
      </>
    </>
  )
}