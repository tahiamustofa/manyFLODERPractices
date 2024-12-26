const products =[
    {id:1,name:'dell',price:50000},
    {id:2,name:'lenevo',price:60000},
    {id:3,name:'hp',price:70000},
    {id:4,name:'Mac',price:150000}

]

// map 
const names = products.map(product=>product.name);
// console.log(names);
const pri =products.map(p=>p.price);
// console.log(pri);

// forEach 
// products.forEach(pera => {
//     // console.log(pera.id)
// });

// filter 
const expensive = products.filter(m => m.price >60000);
// console.log(expensive);

// find 
const cheap = products.find(m => m.price < 70000);
// console.log(cheap );

// reduce 
const total = products.reduce((accum,current)=>accum+current.price ,0);//ekhane
//  current er modhe obj ta store hoche tai cuurent.price hoche ar accum hoche initial
//  value 0 
console.log(total)