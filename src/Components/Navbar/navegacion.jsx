import React from 'react'
import '../Navbar/Navbar.css';
import { FaMedapps,FaPaintBrush,FaBars } from "react-icons/fa";
import {Link} from 'react-router-dom';
import {Tools} from '../../Pages/Herramientas/Box/Tools';
import {useComponentVisible} from '../../Hooks/useComponentVisible';

export const Navegacion = ({openSidebar}) => {
  
  const {ref,isComponentVisible,setIsComponentVisible}=useComponentVisible(true);

  return (
    
    <nav className="navbar" ref={ref}>
      <div className="nav_icon"onClick={()=>openSidebar()}>
        <i><FaBars/></i>
      </div>
      <div className="navbar__left">
        
      </div>
      <div className="navbar__right">
        <Link to>
          <i><FaMedapps/></i>
        </Link>
        <Link to>
          <i onClick={()=>setIsComponentVisible(true)}><FaPaintBrush/></i>    
        </Link>
      </div>
      {(isComponentVisible) ? (<Tools/>) : null}
    </nav>
  )
}
