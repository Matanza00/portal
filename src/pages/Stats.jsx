import React from 'react'
import './stats.scss'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Featured from '../components/Featured'
import Widget from '../components/Widget'
import Charts from '../components/Charts'


function Stats() {
  return (
    <div className="list">
        <Sidebar/>
        <div className="listConatiner">
            <Navbar/>
            <div className="top">
              <Widget type='order'/>
              <Widget type='balance'/>
            </div>
            
        <div className="left">
            <div className="charts">
            <Featured/>
            <Charts title="Last 6 Months (Revenue)" aspect={3/1}/>
          </div>
          </div>
              </div>
              <div className="right">

              </div>
            
    </div>
  )
}

export default Stats