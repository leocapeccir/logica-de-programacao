function fizzBuzz (numero) {
    
    if ( numero % 3 === 0 && numero % 5 === 0) {
        return "FizzBuzz";

    } else if ( numero % 3 === 0) {
        return "Fizz";

    } else if ( numero % 5 === 0) {
        return "Buzz";

    }
}

console.log(fizzBuzz(150));