import React from 'react'
import './listorder.scss'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Datatableorder from '../components/Datatableorder'

function ListOrder() {
  return (
    <div className='list'>
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatableorder/>
      </div>
      </div>
  )
}

export default ListOrder