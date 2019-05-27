const myFuncs = require('./functions');

// Double a number. E.g. double(2) = 4.
test('Duobbles 2 to equal 4', () => {
  expect(myFuncs.double(2)).toBe(4);
});

test('Doubble -2 to equal -4', () => {
    expect(myFuncs.double(-2)).toBe(-4);
});

test('Doubble 8 to equal 16', () => {
    expect(myFuncs.double(8)).toBe(16);
});

// Triple a number. E.g. triple(3) = 9.
test('Triples 2 to equal 6', () => {
    expect(myFuncs.triple(2)).toBe(6);
});

test('Triples -2 to equal -6', () => {
    expect(myFuncs.triple(-2)).toBe(-6);
});

test('Triples 1 to equal 3', () => {
    expect(myFuncs.triple(1)).toBe(3);
});

// Return the first character of a string. E.g. first("cat") = "c".
test('first("cat") = "c"', () => {
    expect(myFuncs.first("cat")).toBe("c");
});

test('first("Dog") = "D"', () => {
    expect(myFuncs.first("Dog")).toBe("D");
});

test('first("1234") = "1"', () => {
    expect(myFuncs.first("1234")).toBe("1");
});

test('first(" 156") = " "', () => {
    expect(myFuncs.first(" 156")).toBe(" ");
});

// Write a toin cossing function. E.g. toss() = "heads".
test('coinToss() = "heads" or "tails"', () => {
    const headsOrTails = {
        asymmetricMatch: actual => actual === 'heads' || actual === 'tails'
    };
    for (let i = 0; i < 1000; i++) {
        expect(myFuncs.coinFlip(" 156")).toEqual(headsOrTails);
    }
});