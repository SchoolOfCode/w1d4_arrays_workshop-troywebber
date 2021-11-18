

// Task 3 - Looping and Accessing

let englishNumbers = [
"one", 
"two", 
"three", 
"four", 
"five"];

// 👉 Declare an index variable and assign it the value of 0.

// 👉 In a while loop, console.log the array item at the current 
// index and add 1 to the index variable.

// 👉 Have the while loop run until the index is equal to or
//  greater than the array's length property.

let index = 0

while ( index < englishNumbers.length) {
    console.log(englishNumbers[index])
    index++
  }


//  Task 4 - Looping and Accessing
//  👉 Refactor task three to use a for loop instead 
//  of a while loop.

for (let index = 0; index < englishNumbers.length; index++) {
  console.log(englishNumbers[index]);
}