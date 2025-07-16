function printFiveToTwentyFive() {
  let num = 5; // Initialization

  while (num <= 25) { // Condition
    console.log(num); // Body
    num++; // Increment
  }
}

printFiveToTwentyFive();


----
function printDivisibleByThree() {
  for (let i = 0; i <= 30; i++) {
    if (i % 3 === 0) {
      console.log(i);
    }
  }
}

printDivisibleByThree();
