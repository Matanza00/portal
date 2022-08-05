import React from 'react'
import './table.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function List() {
    const rows = [
        {
            id: 101,
            car: "Honda City",
            model: 2020,
            img: "https://cache1.pakwheels.com/system/car_generation_pictures/6425/original/Honda_City_Front.jpg",
            customer: "Mani",
            date: "1 March",
            amount: 5500,
            method: "Cash on Delivery",
            status: "Approved",
        },
        {
            id: 102,
            car: "Toyota Swift",
            model: 2013,
            img: "https://www.india.com/wp-content/uploads/2016/12/2017-Suzuki-Swift-white-front-three-quarters-1.jpg",
            customer: "Shamikh",
            date: "4 March",
            amount: 8500,
            method: "Cash on Delivery",
            status: "Pending",
        },
        {
            id: 103,
            car: "Toyota Mark X",
            model: 2013,
            img: "https://cache1.pakwheels.com/system/car_generation_pictures/2876/original/Toyota_Mark_X_1st_Gen_(2004-2009).jpg",
            customer: "Arham",
            date: "11 March",
            amount: 15500,
            method: "Cash on Delivery",
            status: "Approved",
        },
        {
            id: 104,
            car: "Honda Vezel",
            model: 2021,
            img: "https://i.pinimg.com/564x/9a/ce/d0/9aced0492e60a274e23ffd3e70cc9557.jpg",
            customer: "Abdullah Ali",
            date: "17 March",
            amount: 18000,
            method: "Cash on Delivery",
            status: "Pending",
        },
        {
            id: 105,
            car: "Suzuki Cultus",
            model: 2022,
            img: "http://www.suzukirawal.com/media/620x485/cultus/big1.jpg",
            customer: "Ibrahim Sidd",
            date: "21 March",
            amount: 9500,
            method: "Cash on Delivery",
            status: "Approved",
        },
        {
            id: 106,
            car: "Toyota Vitz",
            model: 2022,
            img: "https://www.solutionguider.com/wp-content/uploads/2022/02/Toyota-Vitz-F-1.3-2022-Price-in-Pakistan.jpg",
            customer: "Hammad",
            date: "21 March",
            amount: 10500,
            method: "Cash on Delivery",
            status: "Approved",
        },
        {
            id: 107,
            car: "Toyota GLI",
            model: 2020,
            img: "https://cache1.pakwheels.com/system/car_generation_pictures/5361/original/Corolla-X-Cars-Cropped-Pictures-for-Website.jpg",
            customer: "Faraz",
            date: "25 March",
            amount: 21000,
            method: "Cash on Delivery",
            status: "Pending",
        },
    ];
  return (
    <TableContainer component={Paper} className='table'>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell className='tableCell'>Tracking ID</TableCell>
            <TableCell className='tableCell'>Cars</TableCell>
            <TableCell className='tableCell'>Model</TableCell>
            <TableCell className='tableCell'>Customer</TableCell>
            <TableCell className='tableCell'>Date</TableCell>
            <TableCell className='tableCell'>Amount</TableCell>
            <TableCell className='tableCell'>Method</TableCell>
            <TableCell className='tableCell'>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
                <TableCell className='tableCell'List>{row.id}</TableCell>
              <TableCell className='tableCell'List>
                <div className="cellWrapper">
                    <img src={row.img} alt="" className="image" />
                    {row.car}
                </div>
              </TableCell>
              <TableCell className='tableCell'List>{row.model}</TableCell>
              <TableCell className='tableCell'List>{row.customer}</TableCell>
              <TableCell className='tableCell'List>{row.date}</TableCell>
              <TableCell className='tableCell'List>{row.amount}</TableCell>
              <TableCell className='tableCell'List>{row.method}</TableCell>
              <TableCell className='tableCell'List>
                <span className={`status ${row.status}`}>{row.status}</span>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default List