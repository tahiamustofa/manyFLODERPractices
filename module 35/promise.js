const getData = new Promise((resolve,reject)=>{
    const num = Math.random()*10;
    console.log('Number=',num);
    if (num <5) {
        resolve({numB : 55668});   
    } else {
        reject('Not available'); 
    }
}) 
// console.log(getData);
getData
.then(data=>console.log(data.numB +12))
.catch(err=>console.log('ERR:',err));

// let arrived=true;
// const ride = new Promise((resolve, reject) => {
//     if (arrived) {
//         resolve('yes here the car')
//     } else {
//         reject('Nooo Not find driver!Sorry') 
//     }
// })
// ride
// .then(vale=>console.log(vale))
// .catch(error=>(error))