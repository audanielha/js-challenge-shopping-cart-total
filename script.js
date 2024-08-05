// Initialize Variables
var cart =[
    {name: 'Banana',price: 10,quantity: 1},
    {name: 'Apple',price: 8,quantity: 2},
    {name: 'Orange',price: 5,quantity: 3},
    {name: 'Pear',price: 2,quantity: 4},
    {name: 'Grape',price: 7,quantity: 5},
];

let totalCost = 0;
// Calculate Total Cost
for(let i = 0; i < cart.length; i++){
    let calculatedTotal = cart[i].price * cart[i].quantity;
    console.log(calculatedTotal) 
    totalCost += calculatedTotal;
}

// Output Results
console.log(totalCost)
