const readlineSync = require('readline-sync')
const arg1 = readlineSync.question('enter a first number : ').trim()
const arg2 = readlineSync.question('enter a second number : ').trim()

const values = {
    "0" : 0,
    "1" : 1,
    "2" : 2,
    "3" : 3,
    "4" : 4,
    "5" : 5,
    "6" : 6,
    "7" : 7,
    "8" : 8,
    "9" : 9,
}

class Digitization{
    constructor(strNum){
        this.digits = this._strNumToDigits(strNum)
    }
    _strNumToDigits(strNum){
        const digits = {}
        for(let i = 0; i < strNum.length; i++){
            digits[strNum.length - ( i + 1 )] = strNum[i]
        }
        return digits
    }
    getNumFromDigits(){
        let num = 0
        const { digits } = this
        for(let charDigit in digits){
            num += Math.pow(10, values[charDigit]) * values[digits[charDigit]]
        }
        return num
    }    
}

const digitization1 = new Digitization(arg1)
const digitization2 = new Digitization(arg2)

const firstNum = digitization1.getNumFromDigits()
const secondNum = digitization2.getNumFromDigits()

const result = firstNum + secondNum

console.log(result)

setTimeout(() => {

}, 1000 * 60)