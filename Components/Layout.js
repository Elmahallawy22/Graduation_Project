import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { createContext , useState } from "react";

export const StateContext = createContext();

export function Layout(props) {
  const [activeSidebar, setActiveSidebar] = useState(false); 

  return (
    <>
      <StateContext.Provider value={{ activeSidebar, setActiveSidebar }}>
        <Navbar />
        {<>
          <div className="lg:hidden">
            {activeSidebar ?
              <div className="relative">
                <div style={{ zIndex:'-1'}} className={`flex-2 absolute right-0 left-0 opacity-20 ${activeSidebar == true ? 'noscroll' : ''}`} onClick={()=>{setActiveSidebar(false) }}>
                  {props.children}
                </div>
                <div style={{ zIndex:'50'}} className='absolute right-0' >
                  <Sidebar />
                </div>
              </div>
              : <>
                {props.children}
              </>
            }
          </div>
          <div className="hidden lg:block">{props.children}</div>
        </>}
      </StateContext.Provider>
    </>
  )
}