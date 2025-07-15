function pemdas) 
{
  let result1 = 10 + 32 * 12 / 3;          
  let result2 = (10 + 32) * 12 / 3;    

  console.log("Result 1:", result1); 
  console.log("Result 2:", result2); 
}

pemdas();

------
function useAssignmentOperators(a, b) 
{
  let x = a;
  x += b;
  console.log(`After x += b: ${x}`);

  let y = a;
  y *= b;
  console.log(`After y *= b: ${y}`);

  let z = a;
  z %= b;
  console.log(`After z %= b: ${z}`);
}

useAssignmentOperators(10, 3);

-----
function compareValues(val1, val2) 
{
  const isEqualLoose = val1 == val2;
  const isNotEqual = val1 != val2;
  const isEqualStrict = val1 === val2;

  console.log(`Using == : ${val1} == ${val2} → ${isEqualLoose}`);
  console.log(`Using != : ${val1} != ${val2} → ${isNotEqual}`);
  console.log(`Using ===: ${val1} === ${val2} → ${isEqualStrict}`);
}

compareValues(5, "5");
