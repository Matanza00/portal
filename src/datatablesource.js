import React from 'react'
export const userColumns = [
    { field: "id", headerName: "ID", width: 70},
    {
        field:'customer',
        headerName: "Customer", 
        width: 230, 
        renderCell: (params) => {
            return (
                <div className="cellwithImg">
                    <img className="cellImg" src={params.row.img} alt='avatar' />
                    {params.row.customer}
                </div>
            )
        }
    },
    {
        field:"car" , headerName:"Car" ,width:170,
    },
    {
        field:"model" , headerName:"Model" ,width:100,
    },
    {
        field:"status" , headerName:"Status" ,width:100,
        renderCell: (params) => {
            return(
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            )
        }
    },
    {
        field:"date" , 
        headerName:"Date" ,
        width:120,
    },
    
]

//temporary data
export const userRows = [
    {
        id: 101,
        car: "Honda City",
        model: 2020,
        img: "https://cache1.pakwheels.com/system/car_generation_pictures/6425/original/Honda_City_Front.jpg",
        customer: "Mani",
        date: "1 March",
        status: "Active",
    },
    {
        id: 102,
        car: "Suzuki Swift",
        model: 2013,
        img: "https://www.india.com/wp-content/uploads/2016/12/2017-Suzuki-Swift-white-front-three-quarters-1.jpg",
        customer: "Shamikh",
        date: "4 March",
        status: "Passive",
    },
    {
        id: 103,
        car: "Toyota Mark X",
        model: 2013,
        img: "https://cache1.pakwheels.com/system/car_generation_pictures/2876/original/Toyota_Mark_X_1st_Gen_(2004-2009).jpg",
        customer: "Arham",
        date: "11 March",
        status: "Active",
    },
    {
        id: 104,
        car: "Honda Vezel",
        model: 2021,
        img: "https://i.pinimg.com/564x/9a/ce/d0/9aced0492e60a274e23ffd3e70cc9557.jpg",
        customer: "Abdullah Ali",
        date: "17 March",
        status: "Passive",
    },
    {
        id: 105,
        car: "Suzuki Cultus",
        model: 2022,
        img: "http://www.suzukirawal.com/media/620x485/cultus/big1.jpg",
        customer: "Ibrahim Sidd",
        date: "21 March",
        status: "Active",
    },
    {
        id: 106,
        car: "Toyota Vitz",
        model: 2022,
        img: "https://www.solutionguider.com/wp-content/uploads/2022/02/Toyota-Vitz-F-1.3-2022-Price-in-Pakistan.jpg",
        customer: "Hammad",
        date: "21 March",
        status: "Active",
    },
    {
        id: 107,
        car: "Toyota GLI",
        model: 2020,
        img: "https://cache1.pakwheels.com/system/car_generation_pictures/5361/original/Corolla-X-Cars-Cropped-Pictures-for-Website.jpg",
        customer: "Faraz",
        date: "25 March",
        status: "Pending",
    },
    {
        id: 108,
        car: "Toyota Vitz",
        model: 2022,
        img: "https://www.solutionguider.com/wp-content/uploads/2022/02/Toyota-Vitz-F-1.3-2022-Price-in-Pakistan.jpg",
        customer: "Baloch",
        date: "26 March",
        status: "Passive",
    },
    {
        id: 109,
        car: "Suzuki Swift",
        model: 2019,
        img: "https://www.india.com/wp-content/uploads/2016/12/2017-Suzuki-Swift-white-front-three-quarters-1.jpg",
        customer: "Daniyal",
        date: "28 March",
        status: "Pending",
    },
    {
        id: 110,
        car: "Toyota GLI",
        model: 2020,
        img: "https://cache1.pakwheels.com/system/car_generation_pictures/5361/original/Corolla-X-Cars-Cropped-Pictures-for-Website.jpg",
        customer: "Asfar",
        date: "30 March",
        status: "Active",
    }
];