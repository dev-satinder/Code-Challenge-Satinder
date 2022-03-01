import React from 'react'
import { AppBar } from '@mui/material';
import Notification from './../assets/images/notification.svg'
import Settings from './../assets/images/settings.svg'
import BackArrow from './../assets/images/left-arrow.svg'
import HomeIcon from './../assets/images/home.svg'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
     <AppBar position="static" className="page-header">
          <div className="header-left">
               <Link to="/"><img src={BackArrow} alt="Notification" className="mr-3" /></Link>
               <Link to="/"><img src={HomeIcon} alt="Home"/></Link>
          </div> 
          <div className="searchform">
               <select className="form-control">
                    <option value="">
                     Johndoe.near 
                     </option>
               </select>
          </div>
          <div className="header-right">
               <Link to="/notification"><img src={Notification} alt="Notification" className="mr-2" /></Link>
               <Link to="/setting"><img src={Settings} alt="Setting"/></Link>
          </div>
     </AppBar>
  )
}

export default Header