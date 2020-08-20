// Behavior Order:

// Test: The program will send an alert if the user inputs a 0 or a number of 4000+.
// Input: 4000
// Output: "Please enter a number between 1 - 3999"

// Test: The program convert the user input from a number to a Roman numeral.
// Input: 1, 5, 10, 50, 100, 500, 1000
// Output: I, V, X, L, C, D, M

// Test: The program will add the values of the Roman numerals together.
// Input: 2
// Output: II

// Test: The program will switch to subtraction when four or more of the same Roman numeral are in a row.
// Input: 4
// Output: IV

// Business Interface

function rNum(userInput){
  const rMatrix = {I:1, IV:4, V:5, IX:9, X:10, XL:40, L:50, XC:90, C:100, CD:400, D:500, CM:900, M:1000}

let arrayStringInput = userInput.toString().split("");
if (userInput === "" || userInput <=0 || userInput >= 4000) {
alert("Please enter a number between 1 - 3999.")

} else {
  return("Add the rest of the tests!");
}
}

// User Interface



// Console Log Test Example:
    // function rNum(userInput){
    //   const rMatrix = {I:1, IV:4, V:5, IX:9, X:10, XL:40, L:50, XC:90, C:100, CD:400, D:500, CM:900, M:1000}

    // let arrayStringInput = userInput.toString().split("");
    // if (userInput === "" || userInput <=0 || userInput >= 4000) {
    //   // alert("Please enter a number between 1 - 3999.")
    // return("Please enter a number between 1 - 3999.")

    // } else {
    //   return("Ok range!");
    // }
    // }
    // undefined
    // rNum(3)
    // "Ok range!"
    // rNum(5000)
    // "Please enter a number between 1 - 3999."
