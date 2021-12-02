var stuff = [
    "cars",
    "blankets",
    "sunflowers",
    "sky",
    "yellow",
    "code",
    "perfume",
    "coffee",
    "books"
];

/*stuff.forEach(function (item, index) {
  if (index % 2 === 0) {
    console.log(item);
  }
});*/

/*var removeItem = function (array, item) {
  var index = array.indexOf(item);
  
  if (index === -1) {
    console.log(`Sorry, no such ${item} exists in the array.`);
  } else {
    array.splice(index, 1);
    console.log(`Removing ${item}.`);
  }
};
  
removeItem(stuff, "code");
console.log(stuff);
removeItem(stuff, "teeth");*/

/*var onlyS = [];
  
for (let item of stuff) {
  if (item.includes("s")){
    onlyS.push(item);
  }
}
  
console.log(onlyS);*/

var filteredOnlyS = stuff.filter(function(item) {
    return item.includes("s");
});

console.log(filteredOnlyS);