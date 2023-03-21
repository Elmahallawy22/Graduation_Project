import { Navbar } from "./Navbar";
import { Tabbars } from "./Tabbars";
import { Welcome } from "./Welcome";
import { createContext , useState } from "react";

export const StateContext = createContext();

export function Layout(props) {
  setTimeout(() => {
    document.querySelector('.welcome').style.display="none"    
    document.querySelector('.website').style.display="block"    
  }, 2000);
  const [activePages, setActivePages] = useState('home');  
  const [activeLogin, setActiveLogin] = useState('signUp');
  
  return (
    <>
    <div className="welcome">
        <Welcome/>
    </div>
    <div className="website" style={{display:'none'}}>
      <StateContext.Provider value={{ activePages, setActivePages , activeLogin , setActiveLogin}}>
        <Navbar />
        {props.children}
        <Tabbars/>
      </StateContext.Provider>
    </div>
    </>
  )
}