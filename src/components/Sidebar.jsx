import React from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import StoreMallDirectoryRoundedIcon from '@mui/icons-material/StoreMallDirectoryRounded';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import {Link} from "react-router-dom"
import { DarkModeContext } from '../context/darkModeContext';
import { useContext } from "react";

function Sidebar() {
    const { dispatch } = useContext(DarkModeContext)
  return (
    <div className='sidebar'>
        <div className="top1">
            <Link to='/home' style={{textDecoration:'none'}}>
            <span className="logo"> LaMatanza Portal</span>
            </Link></div>
        <div className="center">
           
            <ul>
                <p className="title"> MAIN </p>
                <Link to='/home' style={{textDecoration:'none'}}>
                <li>
                <DashboardIcon className='icon'/>
                    <span>Dashboard</span>
                </li>
                </Link>
                <p className="title"> LIST </p>
                <Link to='/users' style={{textDecoration:'none'}}>
                <li>
                    <PersonIcon className='icon'/>
                    <span>Users</span>
                </li>
                </Link>

                <Link to='/products' style={{textDecoration:'none'}}> 
                <li>
                    <StoreMallDirectoryRoundedIcon className='icon'/>
                    <span>Product</span>
                </li>
                </Link>
                <Link to='/orders' style={{textDecoration:'none'}}>
                <li>
                <ProductionQuantityLimitsIcon className='icon'/>
                    <span>Orders</span>
                </li>
                </Link>
                <Link to='/delivery' style={{textDecoration:'none'}}>
                <li>
                    <LocalShippingIcon className='icon'/>
                    <span>Delivery</span>
                </li>
                </Link>
                <p className="title"> SERVICES </p>

                <li>
                    <PsychologyIcon className='icon'/>
                    <span>Logs</span>
                </li>

                <p className="title"> USER </p>
                <Link to='/users/single' style={{textDecoration:'none'}}>
                <li>
                    <AccountCircleRoundedIcon className='icon'/>
                    <span>Profile</span>
                </li>
                </Link>
                <Link to='/' style={{textDecoration:'none'}}>
                <li>
                    <LogoutRoundedIcon className='icon'/>
                    <span>Logout</span>
                </li>
                </Link>
            </ul>

        </div>
        <div className="bottom">
            <div className="colorOption" onClick={()=> dispatch({type:"DARK"})}></div>
            <div className="colorOption" onClick={()=> dispatch({type:"LIGHT"})}></div>
        </div>

    </div>
  )
}

export default Sidebar