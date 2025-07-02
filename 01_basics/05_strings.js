const name = 'Ayush'
const repocount = 1

//console.log(name+repocount+"Value")    //Not a good practice

console.log(`My name is ${name} and my repo count is ${repocount}`)


const gamename = new String('Ayush-22-450')

console.log(gamename.split('-',1))

// console.log(gamename[0])
// console.log(gamename.__proto__)

// console.log(gamename.length)

// console.log(gamename.toUpperCase())

console.log(gamename.charAt(3))
console.log(gamename.indexOf('s'))

const newString = gamename.substring(0,4)
console.log(newString)

const anotherstring = gamename.slice(-12,-2)
console.log(anotherstring)

const newStringname = "   Ayush  "
console.log(newStringname)
console.log(newStringname.trim())

const url = 'https://www.youtube.com/watch?v=sscX432bMZo&t=9762s'
console.log(url.includes('youtube'))

console.log(url.replace('youtube','linkedin'))