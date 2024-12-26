function scope(a,b) {
    const total= a+b;
    console.log(a,b);
    if (b>5) {
       const sum = 25+a+b;
       console.log(sum); 
    }
    
    else{
        var sum = 2+a+b; //var scope er vetor takena 
    }
    console.log(sum);
    return total
}

// console.log(a,b);

console.log(scope(2,7))