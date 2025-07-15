const addStrings = function(str1, str2) 
{
  return str1 + str2;
};
console.log(addStrings("Hello, ", "world!"));


----
  function addWithDefault(num1, num2 = 15) 
{
  return num1 + num2;
}

console.log(addWithDefault(10, 5));  
console.log(addWithDefault(10));


----
const addStringsArrow = (str1, str2) => str1 + str2;
console.log(addStringsArrow("Good ", "morning!"));
