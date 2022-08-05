import React from 'react'
import './listproduct.scss'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import DataTableProduct from '../components/DataTableProduct'

function ListProduct() {
  return (
    <div className='list'>
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <DataTableProduct/>
      </div>
      </div>
  )
}

export default ListProduct