// Double a number. E.g. double(2) = 4.
function double(x){
    return x*2;
}

// Triple a number. E.g. triple(3) = 9.

function triple(x){
    return x*3;
}

// Return the first character of a string. E.g. first("cat") = "c".
function first(x) {
    return x[0]
}

// Write a toin cossing function. E.g. toss() = "heads".
function coinFlip() {
    return ( Math.random() > 0.5 ? "heads" : "tails" );
}

// Write a dice rolling function. E.g. dice() = 4.
function roll() {
    return Math.ceil(Math.random() * 6);
}

// Write a dice rolling function, where the dice can have any number of sides. E.g. dice(10)=9.
function rollN(n) {
    return Math.ceil(Math.random() * n);
}


// Test if an integer is even; return true if it is, false if not. E.g.
// is_even(4) = true 
// is_even(9) = false
function isEven(n) {
    if (Number.isInteger(n)) {
        return n % 2 === 0;
    }
    else throw new TypeError;
}

// Check if n is divisible by m. E.g.
// is_divisible(10,2) = true 
// is_divisible(9,2) = false
function isDivisible(x,y) {
    return x % y === 0;
}

// Returns true if the user correctly guesses a secret random number between 1 and 10, false otherwise. E.g.
// secret = 6 
// is_secret(4) = false 
// is_secret(6) = true.
function guessMeGen(n, y) {
    y = y || Math.ceil(Math.random() * n);
    return (x) => {
        if (0 <= x <= y){
            return y === x;
        } 
        else throw new RangeError;
    };
};


// Write a function that returns an array containing the odd numbers in a given array. E.g. odds([3,4,5,4,3,8,10,11]) = [3,5,3,11].
function odds(values) {
    return values.filter((x) => !isEven(x));
}


// Write a function that sums the elements of an array. E.g. sum([3,4,6]) = 13. [Hint: reduce might be useful here.]
function sum(values){ 
    return values.reduce((acc, x) => acc += x, 0);
}

// Write a function that finds the mean of the elements of an array. E.g. mean([3,4,8]) = 5.
function mean(values){
    const sumValues = sum(values);
    return sumValues / values.length;
}

// Returns true if string is palindrome, false otherwise. E.g.
// is_palindrome("anutforajaroftuna") = true 
// is_palindrome("fanta") = false
function isPalindrome(s) {
    let l = (isEven(s.length) ? s.length/2 : (s.length-1)/2 );
    for (let i = 0; i < l; i++){
        if (s[i] != s[s.length-i]){
            return false;
        }
    }
    return true;
}

// Returns a list of the factors of a given integer. E.g. factors(10) = [1,2,5,10].
function factorise(n){
    let factors = []
    for (let i = 0; i < n/2; i++){
        if (n%i===0) factors.push(i, n/i);
    }
    return factors;

}

// Write a function that takes a string as input and returns a string containing its vowels. E.g. vowels("delicious") = "eiiou".
function vowels(s){
    let output = ""
    const vowels = ["aeiou"];
    for (let j = 0; j < n/2; j++){
        for (let i = 0; i < n/2; i++){
            if (s[j] === vowels[i]){
                output += s[j];
                break;
            }
        }
    }
    return vowels

}

module.exports = {double , triple, first, coinFlip, roll, rollN, isEven, isDivisible, guessMeGen};