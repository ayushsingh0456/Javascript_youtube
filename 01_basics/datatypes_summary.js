//  Primitive

// 7 types: String, number, boolean, null, undefined, bigint, symbol

const score=100
const scoreValue= 100.3

const isLoggedIn= false
const outsideTemp = null
let username;   // default value would be undefined

const id= Symbol('123')
const anotherId= Symbol('123')

console.log(id===anotherId)   // Output would be false as both symbol values are unique

const bigNumber = 397428041056789765456n // by just using n at the end we can represent the num as bigint

console.log(typeof bigNumber)


//Referance(Non-Primitive)

// Array, Objects, Functions

const heros = ['Ayush','Thor','Loki']

const myObj = {
    name : 'Ayush',
    age: 22,
    Course: 'BCA'
}
console.log(myObj)



const myFunction = function(){
    console.log('Hello World!')
}
myFunction()