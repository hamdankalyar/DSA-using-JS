function sayDigits(n,names){
    if(n===0){
        return ''
    }
        
    let digit = n%10
    let remDigits = Math.floor( n / 10)
    console.log(names[digit])
    return sayDigits(remDigits,names)
}
console.log(sayDigits(123,['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']))

