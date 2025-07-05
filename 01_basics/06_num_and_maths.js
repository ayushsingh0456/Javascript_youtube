const score = 400
// console.log(score)

const balance = new Number(100)
// console.log(balance)
// console.log(typeof balance)

console.log(balance.toString()) // convert to string
console.log(balance.toFixed(1)) // convert to string with 1 decimal place

const otherNumber = 123.97960
//console.log(otherNumber.toprecision(5)) // round to 5 decimal

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-In'))

//+++++++++++++++++++ Maths +++++++++++++++

// console.log(Math)

// console.log(Math.round(4.4))
// console.log(Math.ceil(4.1))
// console.log(Math.floor(4.9))
// console.log(Math.sqrt(4))
// console.log(Math.abs(-8))
// console.log(Math.max(2,5,2,9,4,6))
// console.log(Math.max(2,3,4,1,9,5,0,7))

console.log(Math.random())
console.log(Math.random()*10)
console.log((Math.random()*10)+1)

const min= 10
const max= 20

console.log(Math.floor(Math.random()*(max-min+1))+min)