const myFuncs = require('./functions');

// Add to be in range to expect
expect.extend({
    toBeIntWithinRange(received, floor, ceiling) {
      const pass = Number.isInteger(received) && received >= floor && received <= ceiling;
      if (pass) {
        return {
          message: () =>
            `expected ${received} not to be within range ${floor} - ${ceiling}`,
          pass: true,
        };
      } else {
        return {
          message: () =>
            `expected ${received} to be within range ${floor} - ${ceiling}`,
          pass: false,
        };
      }
    },
  });

// Add to be in range to expect
expect.extend({
toBeWithinRange(received, floor, ceiling) {
    const pass = received >= floor && received <= ceiling;
    if (pass) {
    return {
        message: () =>
        `expected ${received} not to be within range ${floor} - ${ceiling}`,
        pass: true,
    };
    } else {
    return {
        message: () =>
        `expected ${received} to be within range ${floor} - ${ceiling}`,
        pass: false,
    };
    }
},
});


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
        expect(myFuncs.coinFlip()).toEqual(headsOrTails);
    }
});

// Write a dice rolling function. E.g. dice() = 4.
test('roll() = 1 or 2 or 3 or 4 or 5 or 6', () => {
    for (let i = 0; i < 1000; i++) {
        expect(myFuncs.roll()).toBeIntWithinRange(1,6);
    };
});

// Write a dice rolling function, where the dice can have any number of sides. E.g. dice(10)=9.
[6,100,1000].forEach(testData => {
    test(`rollN(${testData}) = 1 to ${testData}`, () => {
        let val;
        let values = [];
        let stanDiv  = testData * 0.05;
        for (let i = 0; i < 100000; i++) {
            val = myFuncs.rollN(testData);
            values.push(val);
            expect(val).toBeIntWithinRange(1,testData);
        };
        expect(Math.max(...values)).toEqual(testData);
        expect(Math.min(...values)).toEqual(1);
        const sum = values.reduce((acc, x) => acc += x, 0);
        const ave = sum / values.length;
        expect(ave).toBeWithinRange(testData/2-stanDiv, testData/2+stanDiv);
    });
});