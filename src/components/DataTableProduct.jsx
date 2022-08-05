import React from 'react'
import './datatableproduct.scss'
import { DataGrid } from '@mui/x-data-grid';
import { productColumns, productRows } from '../datatablesourceproduct.js';
import { Link } from 'react-router-dom';

const DataTableProduct = () => {
  const actionColumn = [{ 
    field:"action", 
    headerName: "Action",
    width: 200,
    renderCell:()=>{
      return(
      <div className='cellAction'>
        <Link to='/products/test' style={{textDecoration:'none'}}> 
        <div className="viewButton">View</div></Link>
        <div className="deleteButton">Delete</div>
      </div>
      )
  }
}]
  return (
    <div className='datatable'>
        <div className="datatableTitle">
          Add New Product
          <Link to='/products/new' style={{textDecoration:'none'}} className="link">  
          Add New
          </Link>
        </div>
        <DataGrid
        className='datagrid'
            rows={productRows}
            columns={productColumns.concat(actionColumn)}
            pageSize={7}
            rowsPerPageOptions={[5]}
            checkboxSelection
      />
    </div>
  );
};

export default DataTableProduct;
