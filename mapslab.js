function getColorMap()
  {
  const colors = new Map();

  colors.set("red", "#FF0000");
  colors.set("green", "#00FF00");
  colors.set("blue", "#0000FF");
  colors.set("yellow", "#FFFF00");
  colors.set("purple", "#800080");
  colors.set("orange", "#FFA500");

  return colors;
}

-----
function printColor(key, value) 
{
  console.log(`Color Name: ${key}, Hex Code: ${value}`);
}

function displayAllColors() 
{
  const colorsMap = getColorMap();
  colorsMap.forEach(printColor);
}

displayAllColors();
