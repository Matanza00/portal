import React from 'react'
export const deliveryColumns = [
    { field: "id", headerName: "ID", width: 70},
    {
        field:'customer',
        headerName: "Customer", 
        width: 200, 
    },
    {
        field:"car",
        headerName:"Car", 
        width:200, 
        renderCell: (params) => {
            return (
                <div className="cellwithImg">
                    <img className="cellImg" src={params.row.img} alt='avatar' />
                    {params.row.car}
                </div>
            )
        }
    },
    {
        field:"chassis" , headerName:"Chassis No." ,width:160,
    },
    {
        field:"payment" , headerName:"Paid" ,width: 160,editable: true,
    },
    {
        field:"status" , headerName:"Status" ,width:160,
        type:'singleSelect', 
        valueOptions: ['Shipped','ReadytoShip','Pending'],
        editable: true,
        renderCell: (params) => {
            return(
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            )
        }
    },
    
]

//temporary data
export const deliveryRows = [
    {
        id: 101,
        car: "Honda City",
        chassis: "1514131",
        img: "https://cache1.pakwheels.com/system/car_generation_pictures/6425/original/Honda_City_Front.jpg",
        customer: "Mani",
        payment: 5500,
        status: "Shipped",
    },
    {
        id: 102,
        car: "Suzuki Swift",
        chassis: "5554311",
        img: "https://www.india.com/wp-content/uploads/2016/12/2017-Suzuki-Swift-white-front-three-quarters-1.jpg",
        customer: "Shamikh",
        payment: 8500,
        status: "ReadytoShip",
    },
    {
        id: 103,
        car: "Toyota Mark X",
        chassis: "3311212",
        img: "https://cache1.pakwheels.com/system/car_generation_pictures/2876/original/Toyota_Mark_X_1st_Gen_(2004-2009).jpg",
        customer: "Arham",
        payment: 15500,
        status: "Shipped",
    },
    {
        id: 104,
        car: "Honda Vezel",
        chassis: "3322111",
        img: "https://i.pinimg.com/564x/9a/ce/d0/9aced0492e60a274e23ffd3e70cc9557.jpg",
        customer: "Abdullah Ali",
        payment: 18000,
        status: "ReadytoShip",
    },
    {
        id: 105,
        car: "Suzuki Cultus",
        chassis: "2211333",
        img: "http://www.suzukirawal.com/media/620x485/cultus/big1.jpg",
        customer: "Ibrahim Sidd",
        payment: 9500,
        status: "Shipped",
    },
    {
        id: 106,
        car: "Toyota Vitz",
        chassis: "4567890",
        img: "https://www.solutionguider.com/wp-content/uploads/2022/02/Toyota-Vitz-F-1.3-2022-Price-in-Pakistan.jpg",
        customer: "Hammad",
        payment: 10500,
        status: "Shipped",
    },
    {
        id: 107,
        car: "Toyota GLI",
        chassis: "3456789",
        img: "https://cache1.pakwheels.com/system/car_generation_pictures/5361/original/Corolla-X-Cars-Cropped-Pictures-for-Website.jpg",
        customer: "Faraz",
        payment: 21000,
        status: "Pending",
    },
    {
        id: 108,
        car: "Toyota Vitz",
        chassis: "2345678",
        img: "https://www.solutionguider.com/wp-content/uploads/2022/02/Toyota-Vitz-F-1.3-2022-Price-in-Pakistan.jpg",
        customer: "Baloch",
        payment: 10500,
        status: "ReadytoShip",
    },
    {
        id: 109,
        car: "Suzuki Swift",
        chassis: "1234567",
        img: "https://www.india.com/wp-content/uploads/2016/12/2017-Suzuki-Swift-white-front-three-quarters-1.jpg",
        customer: "Daniyal",
        payment: 18500,
        status: "Pending",
    },
    {
        id: 110,
        car: "Toyota GLI",
        chassis: "1122333",
        img: "https://cache1.pakwheels.com/system/car_generation_pictures/5361/original/Corolla-X-Cars-Cropped-Pictures-for-Website.jpg",
        customer: "Asfar",
        payment: 21000,
        status: "Shipped",
    }
];