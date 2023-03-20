import { Navbar } from "./Navbar";
import { Tabbars } from "./Tabbars";
import { createContext , useState } from "react";

export const StateContext = createContext();

export function Layout(props) {
  const [activeSidebar, setActiveSidebar] = useState(true); 

  return (
    <>
      <StateContext.Provider value={{ activeSidebar, setActiveSidebar }}>
        <Navbar />
        {props.children}
        <Tabbars/>
      </StateContext.Provider>
    </>
  )
}