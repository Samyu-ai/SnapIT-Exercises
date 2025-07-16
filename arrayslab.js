function printFlavors() {
  const flavors = [
    "Chocolate",
    "Chocolate chip",
    "Chocolate chip cookie dough",
    "Coffee",
    "Cookies and cream",
    "Cotton candy",
    "Dulce de leche",
    "Earl Grey tea",
    "Eggnog",
    "French vanilla",
    "Goody Goody Gum Drops"
  ];

  for (let i = 0; i < flavors.length; i++) {
    console.log(flavors[i]);
  }
}

printFlavors();


------
unction joinFlavors() {
  const flavors = [
    "Chocolate",
    "Chocolate chip",
    "Chocolate chip cookie dough",
    "Coffee",
    "Cookies and cream",
    "Cotton candy",
    "Dulce de leche",
    "Earl Grey tea",
    "Eggnog",
    "French vanilla",
    "Goody Goody Gum Drops"
  ];

  const joinedFlavors = flavors.join(" & ");
  console.log(joinedFlavors);
}

joinFlavors();
