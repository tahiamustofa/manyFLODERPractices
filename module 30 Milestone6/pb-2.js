
const even =()=>{
    const friends=['joha','ayesh','aleza','nuja','keyva','meher'];
    const evenFriend  = [];
    for (let index = 0; index < friends.length; index++) {
        const element = friends[index];
        // console.log(element);
        if ((element.length % 2) === 0 ) {
            evenFriend.push(element);  
        }
    }
    
    return evenFriend;
}

// console.log(even());

// pb-3

    const sqr = (x)=>x*x;

    let arr = [3, 5, 4];
    let sqr_arr=arr.map(sqr);
    console.log(sqr_arr);

    let initial=0;
    for (let index = 0; index < sqr_arr.length; index++) {
        const element = sqr_arr[index];
        initial=initial+element; 
        
    }
 console.log(initial);

 function avg(p) {
    return p/sqr_arr.length;
 }
 console.log(avg(initial))

//  IH vayer kora 
// const sqr = (x) => {
//     return x*x;
// }

// let arr = [3, 5, 4];
// let sqr_arr = arr.map(sqr);

// console.log(sqr_arr);
// let sum2 = sqr_arr.reduce((previous_value, current_value)=>{
//     return previous_value + current_value;
//     },0);

//     console.log(sum2);


    // function avg(x) {
        
    //     return `here the avg ${x/arr.length}`;
    // }
    // console.log(avg(sum2))

// pb-4 
const prob4=(arr1,arr2)=>{
    // const arr1 = [1,2,3,4,7];
    // const arr2 = [900,1700,800,500];
    const newArr = [...arr1,...arr2];

    const maxN = Math.max(...newArr);
    return maxN;
} 

// console.log(prob4([1,2,3,4,7],[900,1700,800,500]));

