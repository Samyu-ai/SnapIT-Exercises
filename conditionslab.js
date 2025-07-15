function compareWithDoubleEquals(a, b) {
  if (a == b) {
    console.log(`${a} == ${b} → These values are equal (with ==)`);
  } else {
    console.log(`${a} == ${b} → These values are NOT equal (with ==)`);
  }
}

// Test cases
compareWithDoubleEquals(10, 10);      
compareWithDoubleEquals("hello", 5);


------
function gradeDescription(grade) 
{
  switch (grade) 
  {
    case 'E':
      console.log("Excellent");
      break;
    case 'V':
      console.log("Very Good");
      break;
    case 'G':
      console.log("Good");
      break;
    case 'A':
      console.log("Average");
      break;
    case 'F':
      console.log("Fail");
      break;
    default:
      console.log("Not a valid grade");
  }
}

gradeDescription('E'); // Excellent
gradeDescription('A'); // Average
gradeDescription('Z'); // Not a valid grade
