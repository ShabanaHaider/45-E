
// Tests for equality test with strings
console.log("Equality test with strings: ",  "Apple" === "Apple" ) ;

// Tests for inequality with strings

console.log("Inequality test with strings: ",  ("Apple" as string) != "Orange" ) ;

// Tests using the lower case function
console.log("Lower Case function test: ", "HELLO". toLowerCase() === "hello")

// Numerical tests involving equality
console.log("Equality test with numbers: ",  22  === 22 ) ;

// Numerical tests involving inequality
console.log("Inequality test with numbers: ",  (22 as number) != 25) ;

// greater than and less than
console.log("Greater than test: " , 10 > 5);

// less than test
console.log("Less than test: " , 5 < 10)

// Numerical tests involving greater than and equal to 
console.log("Greater than and equal to test: ",  10 >= 10 ) ;


// Numerical tests involving less than or equal to 
console.log("Less than or equal to test: ",  5  <= 10 ) ;


// Tests using "and" operators- both conditions puri hogai tu true aae ga
console.log("and operator test: ", 5===5 && 10 > 5);

// Tests using "or" operators- Aik bhi condition puri hogai tu true aae ga
console.log("or operator test: ", 5===5 || false);

// Test whether an item is in a array
const fruits :string[] = ['Grapes','Banana','Mango'];
console.log('Test "Mango" in the array: ' , fruits.includes("Mango"));

// Test whether an item is not in a array
console.log('Testing "Apple" is not in the array: ' , !fruits.includes("Apple"));










