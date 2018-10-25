var toSort = [1, 10, 2, 5, 9];
var sorted = toSort.sort(function(a,b){
  return a - b;
});
console.log(sorted);


var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

//if name is the same, return sort by age
//return sort by name

function sortOrder(a,b){

  var nameA = a.name;
  //console.log(nameA);

  var nameB = b.name;
  //console.log(nameB);

  var ageA = a.age;

  var ageB = b.age;

  if (nameA === nameB) {
    return ageA - ageB;
  } else if (nameA < nameB) {
    return -1;
  } else if (nameA > nameB) {
    return 1;
  }
}
var sorted = students.sort(sortOrder);
console.log(sorted);


//   if (a.name - b.name !== 0) {
//     return a.name - b.name;
//   }
//   return a.age - b.age;
// };

// //var sorted = students.sort(sortOrder(a,b));