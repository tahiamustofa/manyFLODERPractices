class Vehicle{
    constructor(name,price){
      this.name = name;
      this.price = price;
    }
    move(){
        console.log('gari chole na cole na chole na re');
    } 
} 
// const gari = new Vehicle('car',100000000);
// console.log(gari.move());

class Bus extends Vehicle{
    constructor(name,price,seat,ticketprice){
      super(name,price);
      this.seat = seat;
      this.ticketprice = ticketprice;
    }
}

class Truck extends Vehicle{
    constructor(name,price,load){
        super(name,price);
        this.load = load;
    }
}