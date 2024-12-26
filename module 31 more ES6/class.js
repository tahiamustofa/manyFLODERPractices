const products =[
    {id:1,name:'dell',price:50000},
    {id:2,name:'lenevo',price:60000},
    {id:3,name:'hp',price:70000},
    {id:4,name:'Mac',price:150000}
]

class Product{
country='Bangladesh';
constructor(name){
    this.name = name;
}
speak(talk){
console.log(`talking about ${talk}`)
}

}

const lenevo = new Product('le le lenevo');
// console.log(lenevo);
// lenevo.speak('oba kita kow');

class Teacher{
    constructor(name,subject){
        this.name = name;
        this.subject = subject;
    }
    lecture(p){
        console.log('Sir is taking classes',p)
    }
}

const tapon = new Teacher('Tapon','Physics');
// console.log(tapon);
const Jakir = new Teacher('Jakir','Science');
Jakir.lecture('Biology');
console.log(Jakir);



// // self reminder--

// function name(params) {
//     console.log(`ara chatgaya ${params}`);
// }
// name('vori dee vori dee');
