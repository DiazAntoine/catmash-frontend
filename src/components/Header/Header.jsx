import { createContext } from 'react';
import { Outlet, NavLink } from "react-router-dom"
import { useLocation } from "react-router-dom";
import {useState, useEffect} from "react"
import './Header.css'
import backendPath from '../../Constant'

export const HeaderContext = createContext(null);

const Header = () => {

  const [nbrVotes, setnbrVotes] = useState(0);
  const location = useLocation();

   const fetchNbrVotes = async () => {
      const response = await fetch(backendPath + "/votes/count");
      const responseParsed = await response.json();
      setnbrVotes(responseParsed);
    };

    useEffect(() => {
      fetchNbrVotes();
    }, [location.pathname])

  return (
    <HeaderContext.Provider value ={{fetchNbrVotes}}>
      <header className="header">
        <h1>Catmash</h1>
        <div>Votes : {nbrVotes}</div>
        <nav className ="nav">
          <NavLink to="/" end="" className ="nav-link">Vote</NavLink>
          <NavLink to="/ranking" className ="nav-link">Classement</NavLink>
        </nav>
      </header>
        
      <Outlet />
    </HeaderContext.Provider>
  )
}

export default Header