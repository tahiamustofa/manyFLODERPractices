const user={ id:8909, name:'gorib amir', job:'actor'};
// console.log(user); 
const stringified = JSON.stringify(user);
// console.log(stringified); 
const shop ={
    owner:'Alia',
    address:{
        street:'kochukhet bhoot er goli',
        city:'Ranvir',
        country :'ind'
    },
    products:['laptop','mobile','iphone'],
    revenue:45000,
    isOpen:true,
    isNew:false
};
// console.log(shop); 
const jasonShop= JSON.stringify(shop);
// console.log(jasonShop);
const shopJSON = JSON.parse(jasonShop);
console.log(shopJSON)