confirm('Do you have 18 years?')


console.log('Hello, World!')

const resault = prompt('How many years you have?')
console.log('Your age: ' + resault)

if (resault >= 18) {
    alert('You have ' + resault + ' years. Wellcome!')
} else if (resault < 18) {
    alert('You have ' + resault + ' years. You cant use this site!')
    window.open("index.html", "_self");
}

const firstName = 'Alexander'
const lastName = 'Hrytskov'
const currentYear = 2022
const birthYear = 1997
let myAge = (currentYear - birthYear)
myAge = --myAge
/*const myAge = false // true
 myAge ? console.log ('My age is a true!') : console.log ('My age in not a true!')*/

console.log('My name is ' + firstName + ' ' + lastName + ' and i have ' + myAge + ' years.')
console.log('Its my first JavaScript code.')


name = '© Luffinage'
console.log(name)





