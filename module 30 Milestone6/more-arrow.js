// function add(a,b) {
    
//         return a+b;
//     }

//     const add3 =  (a,b) => a+b;
//     const diff = (x,y) => x-y;
//     const multi = (f1st,s2nd,t3rd) =>f1st*s2nd*t3rd;

    const getAge = (person) => person.age;

    const stu = {name:'santa kanta ',age:26}
    const age= getAge(stu);

    // console.log(age);

    const getThird = num => num[2];
    const reresult = getThird([1,2,3,4,56,6]);
    // console.log(reresult);

    const doubleIt = nums =>nums*2;
    // console.log(doubleIt(8));

    // no perameter
    const getPI =()=> Math.PI;
    // console.log(getPI()); 

    // large arrow function
    const doMath = (x,y,z)=>{
        const sum = x+y+z;
        const multi = x*y*z;
        const result = sum + multi;
        return result;
    }



