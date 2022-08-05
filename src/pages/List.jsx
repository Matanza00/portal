import React from 'react'
import './list.scss'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Datatable from '../components/Datatable'

function List() {
  return (
    <div className='list'>
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable/>
      </div>
      </div>
  )
}

export default List