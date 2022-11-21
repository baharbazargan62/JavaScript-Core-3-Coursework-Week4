function sales(carsSold) {

    
    return carsSold.reduce((acc, x) => {
        acc[x.make] = (acc[x.make] || 0)+ x.price  ;
        console.log("iteration");
        console.log(acc[x.make]);
        return acc
      }, {})
}
let carsSold = [
    { make: "Ford", model: "Fiesta", colour: "Red", price: 5999 },
    { make: "Land Rover", model: "Defender", colour: "Muddy", price: 12000 },
    { make: "Toyota", model: "Prius", colour: "Silver", price: 6500 },
    { make: "Honda", model: "Civic", colour: "Yellow", price: 8000 },
    { make: "Ford", model: "Fiesta", colour: "Red", price: 15000 },
    { make: "Land Rover", model: "Discovery", colour: "Blue", price: 9000 },
    { make: "Ford", model: "Fiesta", colour: "Green", price: 2000 },
  ]
console.log(sales(carsSold));


module.exports = sales;
