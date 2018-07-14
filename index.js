let newID = oldID + 1000000000

// checks that currentAge is integer
let ageIsValid = Number.isInteger(currentAge);

// 1-19 random
let randomNumber = Math.random() * 20;

// rounds to the nearest integer
let randomInteger = Math.floor(randomNumber);

// an integer between 1000000001 and 1000000020
let randomUserID = randomInteger + 1000000000;
