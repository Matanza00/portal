import React from 'react'
export const productColumns = [
    { field: "id", headerName: "ID", width: 70},
    {
        field:"car",
        headerName:"Car", 
        width:170, 
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
        field:"model" , headerName:"Model" ,width:100,
    },
    {
        field:"registration" , headerName:"Registration No." ,width:100,
    },
    {
        field:"chassis" , headerName:"Chassis No." ,width:170,
    },
    {
        field:"engine" , headerName:"Engine No." ,width:170,
    },
    {
        field:"date" , 
        headerName:"Date" ,
        width:120,
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
    
    
]

//temporary data
export const productRows = [
    {
        id: 101,
        car: "Honda City",
        img: "https://cache1.pakwheels.com/system/car_generation_pictures/6425/original/Honda_City_Front.jpg",
        model: 2020,
        registration: "BHZ-631",
        chassis: "112233",
        engine: "1112233",
        status: "Active",
        date: "1 March",
    },
    {
        id: 102,
        car: "Suzuki Swift",
        model: 2013,
        img: "https://www.india.com/wp-content/uploads/2016/12/2017-Suzuki-Swift-white-front-three-quarters-1.jpg",
        date: "4 March",
        registration: "ABZ-631",
        chassis: "112244",
        engine: "1122334",
        status: "Sold",
    },
    {
        id: 103,
        car: "Toyota Mark X",
        model: 2013,
        img: "https://cache1.pakwheels.com/system/car_generation_pictures/2876/original/Toyota_Mark_X_1st_Gen_(2004-2009).jpg",
        date: "11 March",
        registration: "AXZ-631",
        chassis: "223344",
        engine: "1112255",
        status: "Active",
    },
    {
        id: 104,
        car: "Honda Vezel",
        model: 2021,
        img: "https://i.pinimg.com/564x/9a/ce/d0/9aced0492e60a274e23ffd3e70cc9557.jpg",
        date: "17 March",
        registration: "BG-1840",
        chassis: "122338",
        engine: "3344556",
        status: "Sold",
    },
    {
        id: 105,
        car: "Suzuki Cultus",
        model: 2022,
        img: "http://www.suzukirawal.com/media/620x485/cultus/big1.jpg",
        date: "21 March",
        registration: "BEH-252",
        chassis: "223311",
        engine: "2233111",
        status: "Active",
    },
    {
        id: 106,
        car: "Toyota Vitz",
        model: 2022,
        img: "https://www.solutionguider.com/wp-content/uploads/2022/02/Toyota-Vitz-F-1.3-2022-Price-in-Pakistan.jpg",
        date: "21 March",
        registration: "BGH-262",
        chassis: "223399",
        engine: "2233998",
        status: "Active",
    },
    {
        id: 107,
        car: "Toyota GLI",
        model: 2020,
        img: "https://cache1.pakwheels.com/system/car_generation_pictures/5361/original/Corolla-X-Cars-Cropped-Pictures-for-Website.jpg",
        date: "25 March",
        registration: "BML-420",
        chassis: "283311",
        engine: "2253111",
        status: "Sold",
    },
    {
        id: 108,
        car: "Toyota Vitz",
        model: 2022,
        img: "https://www.solutionguider.com/wp-content/uploads/2022/02/Toyota-Vitz-F-1.3-2022-Price-in-Pakistan.jpg",
        date: "26 March",
        registration: "BVE-321",
        chassis: "277311",
        engine: "2263811",
        status: "Sold",
    },
    {
        id: 109,
        car: "Suzuki Swift",
        model: 2019,
        img: "https://www.india.com/wp-content/uploads/2016/12/2017-Suzuki-Swift-white-front-three-quarters-1.jpg",
        date: "28 March",
        registration: "BHY-222",
        chassis: "783311",
        engine: "9873111",
        status: "Sold",
    },
    {
        id: 110,
        car: "Toyota GLI",
        model: 2020,
        img: "https://cache1.pakwheels.com/system/car_generation_pictures/5361/original/Corolla-X-Cars-Cropped-Pictures-for-Website.jpg",
        date: "30 March",
        registration: "BHY-232",
        chassis: "2266119",
        engine: "7788999",
        status: "Active",
    }
];