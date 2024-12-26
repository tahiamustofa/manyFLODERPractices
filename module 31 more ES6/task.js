// 1
let data={
    Sophia:{
        id:33,
        study:[
            {
                primary:[
                    {schoolName:'ABC PM School'},
                    {location:'Peters burg'}
                ]
            },
            {
                secondary:[
                    {schoolName:'ABC S2ndary School'},
                    {location:'Xford__College'}
                ]
            },
        ]
    }
}

// console.log(data.Sophia.study[1].secondary[1]?.location); 

// task2
let students ={
    2222:{
        name:'Jack',
        selection:'C',
        class:'IX',
        address:{
            'building no':12,
            'street':'ST Jeason',
            'city':'peterburg',
            'country':'UK'
        }
    },
    3333:{
        name:"Herry",
        selection:'A',
        class:'X',
        address:{
            'building no':85,
            'street':'bvgfh -Jeason',
            'city':'Kashmir',
            'country':'Pakistan'
        }
    },
}

// console.log(students[2222]?.address['city']);
// console.log(students[3333]?.name)

// 3 
let data2 ={
    data:[
        {
            bookid:1,
            bookDetails:{
                name:'habluder adda',
                catagory:'XYZ',
                price:'20$',
            },
            bookCatagory:'basic',
        },
        {
         bookid:2,
            bookDetails:{
                name:'gubluder adda',
                catagory:'CYZ',
                price:'50$',
            },
            bookCatagory:'beginner',   
        }
    ]
}

console.log(data2.data[0]?.bookDetails?.name)
console.log(data2.data[1]?.bookCatagory)
