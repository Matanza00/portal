import React from 'react'
import './widget.scss'
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import PaidIcon from '@mui/icons-material/Paid';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';


function Widget({ type }) {
  let data;

  const amount = 100
  const diff  = 100
    switch(type){
      case "user":
        data={
          title:"USERS",
          isMoney:false,
          link:"See all users",
          icon:(
            <PersonOutlineIcon className='icon' 
            style={{
              color: "crimson",
              backgroundColor: "rgba(255,0,0,0.2)",
            }}
            />
            ),
        };
        break;

        case "order":
        data={
          title:"BOOKINGS",
          isMoney:false,
          link:"View all orders",
          icon:(
            <PaidIcon 
              className='icon'
              style={{
                  backgroundColor: "rgba(0,128,0,0.2",
                  color: 'green',
                
                }}
              />
            ),
        };
        break;
        case "earning":
        data={
          title:"DELIVERY",
          isMoney:true,
          link:"View net earnings",
          icon:(
            <ProductionQuantityLimitsIcon
            className='icon'
            style={{
              backgroundColor: "rgba(218,165,32,0.2)",
              color: "goldenrod",
            }}
            />),
        };
        break;
        case "balance":
        data={
          title:"GROSS PROFIT",
          isMoney:true,
          link:"See details",
          icon:(
            <AccountBalanceIcon 
            className='icon'
            style={{
              backgroundColor: "rgba(128,0,128,0.2)",
              color: "purple",
            }}
            />
            ),
        };
      break;
      default:
        
    }




  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMoney && "$"}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive"> 
        <KeyboardDoubleArrowUpIcon/>
        {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widget