import React from 'react'
import './listdelivery.scss'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Datatabledelivery from '../components/Datatabledelivery'

function ListDelivery() {
  return (
    <div className='list'>
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatabledelivery/>
      </div>
      </div>
  )
}

export default ListDelivery