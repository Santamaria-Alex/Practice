//Create a variable called carName, assign the value Volvo to it.
// var carName = 'volvo';
//
//
// const items = [
//     { name: 'Bike', price: 100},
//     { name: 'TV', price: 200},
//     { name: 'Album', price: 10},
//     { name: 'Book', price: 5},
//     { name: 'Phone', price: 500},
//     { name: 'Computer', price: 1000},
//     { name: 'Keyboard', price: 25},
// ]
//
// const filerItems = items.filter((item) => {
//     return item.price <= 100;
// })
//
// console.log(filerItems);
//
// const itemNames = items.map((item) => {
//     return item.name;
// })
//
// console.log(itemNames);


/////// MAKE A "TREE" ////////
for (var i = 1; i <= 9; i++) {
    console.log(i.toString().repeat(i));
}


// Define a function named allIndexesOf that takes in two arguments. The first argument should be the array to search and the second argument should be the value you want to search for. If the item does not exist in the provided array, return an empty array.

var fruits = ["apple", "banana", "orange", "apple", "pineapple"];
function allIndexesOf(array,value) {
    if (fruits.indexOf(value) === -1) {
        return []
    } else {
        return [fruits.indexOf(value)];
    }
}
console.log(allIndexesOf("fruits", "apple"));
console.log(allIndexesOf("fruits", "guava"));
console.log(allIndexesOf("fruits", "pineapple"));






















