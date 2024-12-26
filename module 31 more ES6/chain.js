const data =[{id:1,name:'abul',age:50,address:'kochur khet'}]
// console.log(data[0].address);
const products ={
    count:5000,
    data:[
        {id:1,name:'lanavo laptop',price:50000,address:'kochur khet'},
        {id:2,name:'mac laptop',price:190000,address:'kochur khet2'}
    ]
};
// console.log(products.data[1].price);
const user = {
    id:5001,
    nam:'Shariful Raj',
    address:{
        street:{
          first:'67/4 line road',
          se2nd:'poribag er goli',
          thierd:'noDorai'
        },
        city:'Dhaka',
    }
}
const user2 = {
    id:5002,
    nam:'kuch bhi Raj',
    address:{
        country:'BD',
        city:'Dhaka'
    }
}
console.log(user.address.street?.se2nd);
console.log(user2.address.street?.se2nd);//optional chaining