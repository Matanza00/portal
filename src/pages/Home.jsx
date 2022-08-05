import React from 'react'
import './home.scss'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Widget from '../components/Widget'
import Featured from '../components/Featured'
import Charts from '../components/Charts'
import Table from '../components/Table'
import { Tab } from '@mui/material'

function Home() {
  return (
    <div className='home'>
        <Sidebar/>
        <div className="homeContainer">
          <Navbar/>
          <div className="widgets">
            <Widget type='user'/>
            <Widget type='order'/>
            <Widget type='earning'/>
            <Widget type='balance'/>
          </div>
          <div className="charts">
            <Featured/>
            <Charts title="Last 6 Months (Revenue)" aspect={2/1}/>
          </div>
          <div className="listContainer">
            <div className="listtitle">Latest Transactions</div>
            <Table/>
          </div>
        </div>
    </div>
  )
}

export default Home