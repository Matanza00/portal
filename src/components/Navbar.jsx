import React from 'react'
import './navbar.scss'
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import {Link} from "react-router-dom"
import { DarkModeContext } from '../context/darkModeContext'
import { useContext } from 'react';

function Navbar() {
  const { dispatch } = useContext(DarkModeContext)

  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search...'/>
          <SearchOutlinedIcon/>
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className='icon'/>
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon className='icon' onClick={()=>dispatch({type:"TOGGLE"})} />
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className='icon'/>
          </div>
          <div className="item">
            <NotificationNoneOutlinedIcon className='icon'/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className='icon'/>
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className='icon'/>
          </div>
          <div className="item">
            <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
            alt="" 
            className='avatar'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar