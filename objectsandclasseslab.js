const cat = 
{
  name: "Whiskers",
  age: 3,
  breed: "Siamese",
  color: "Cream",

  meow: function() {
    console.log(`${this.name} says: Meow!`);
  }
};

console.log(`Name: ${cat.name}`);
console.log(`Age: ${cat.age}`);
console.log(`Breed: ${cat.breed}`);
console.log(`Color: ${cat.color}`);
cat.meow();

----
class Person 
{
  #name;
  #age;
  #email;
  #occupation;

  constructor(name, age, email, occupation)
  {
    this.#name = name;
    this.#age = age;
    this.#email = email;
    this.#occupation = occupation;
  }

  getName()
  {
    return this.#name;
  }

  getAge()
  {
    return this.#age;
  }

  getEmail() 
  {
    return this.#email;
  }

  getOccupation() 
  {
    return this.#occupation;
  }

  // Setters
  setName(name) 
  {
    this.#name = name;
  }

  setAge(age)
  {
    this.#age = age;
  }

  setEmail(email) 
  {
    this.#email = email;
  }

  setOccupation(occupation) 
  {
    this.#occupation = occupation;
  }


  introduce() 
  {
    console.log(`Hi, I'm ${this.#name}, a ${this.#age}-year-old ${this.#occupation}.`);
  }
}

