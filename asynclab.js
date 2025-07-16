function runTask(arg)
  {
  return new Promise((resolve) =>
    {
    setTimeout(() =>
      {
      resolve(`This task was ran ${arg} times`);
    }, 2000);
  });
}

----
console.log("Lets start the task");

async function executeTask(count) 
{
  const result = await runTask(count);
  console.log(result);
}

----
for (let i = 0; i < 5; i++) 
{
  executeTask(i);
}
