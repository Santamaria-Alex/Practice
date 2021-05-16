//Create a variable called carName, assign the value Volvo to it.
var carName = 'volvo';


const items = [
    { name: 'Bike', price: 100},
    { name: 'TV', price: 200},
    { name: 'Album', price: 10},
    { name: 'Book', price: 5},
    { name: 'Phone', price: 500},
    { name: 'Computer', price: 1000},
    { name: 'Keyboard', price: 25},
]

const filerItems = items.filter((item) => {
    return item.price <= 100;
})

console.log(filerItems);

const itemNames = items.map((item) => {
    return item.name;
})

console.log(itemNames);

