import React from 'react'
import './single.scss'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Chart from '../components/Charts'
import { List } from '@mui/material'
import LList from '../components/Table'

function Single() {
  return (
    <div className='single'>
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
              <h1 className='title'>Information</h1>
              <div className="item">
                  <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80" 
                  alt="" 
                  className="itemImg" />
                  <div className="details">
                    <h1 className="itemTitle">Usman Nadeem</h1>
                      <div className="detailItem">
                        <span className="itemKey">Email:</span>
                        <span className="itemValue">usmannadeem@metcrafteng.com</span>
                      </div>
                      <div className="detailItem">
                        <span className="itemKey">Phone:</span>
                        <span className="itemValue">+92 303 2743621</span>
                      </div>
                      <div className="detailItem">
                        <span className="itemKey">CNIC:</span>
                        <span className="itemValue">42101-8640091-7</span>
                      </div>
                      <div className="detailItem">
                        <span className="itemKey">Address:</span>
                        <span className="itemValue">A-262,Sector 14-B, ShadmanTown</span>
                      </div>
                      <div className="detailItem">
                        <span className="itemKey">Bank:</span>
                        <span className="itemValue">Habib Bank Limited HBL</span>
                      </div>
                    
                  </div>
                  
              </div>
              </div>
              <div className="right">
               <Chart aspect={3 / 1} title="User Spending (Last 6 Months)"/>
              </div>
          </div>
        <div className="bottom">
        <h1 className='title'>Last Transactions</h1>
          <LList/>
        </div>
       
      </div>
      </div>
  );
}

export default Single