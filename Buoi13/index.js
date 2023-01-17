// const listShopping = [
//     {
//         name: 'Milk',
//         price: 2.50,
//     },
//     {
//         name: 'Bread',
//         price: 3.50,
//     },
//     {
//         name: 'Eggs',
//         price: 4.50,
//     },
//     {
//         name: 'Cheese',
//         price: 5.50,
//     }
// ]

// const totalCost = listShopping.reduce(
//     (accumulater, current) => accumulater + current.price, 0
// )
// 
// console.log(totalCost);

const arr = [1,2,3,4,5,6,7,8,9,10];

Array.prototype.map_tu_tao = function(callback) {
    const newArr = []
    for(let i = 0; i < this.length; i++) {
        newArr.push(
            callback(this[i], i, this)
        )
    }
    return newArr
}

const result = arr.map_tu_tao(
    function (item, index, array) {
        return item
    },
    0
)

console.log(result);