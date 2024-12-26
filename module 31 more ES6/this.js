// https://chatgpt.com/share/67192fb9-0e7c-800a-9f96-fb26de9d97e5
// https://discord.gg/z47hsTeT 
class Person{
    constructor(name,age){
     this.name = name;
     this.age =age;
    }
    sleep(){
        console.log(`sleeping now ${this.name}`)
    }
    activity(){
        this.sleep();
    }
} 

const kodom = new Person('kdom ali',23);
console.log(kodom);
// kodom.sleep();
const badam = new Person('kacha Badam',21);
// badam.sleep();

// bejal 
const lazy = kodom.sleep();
// console.log(lazy);  