var mergesort = require('./mergesort');


var array = [44,23,12,45,32,454,32,12,1,2,342,4,3,8,76,69,0,22,2,34,13];

var sortedArray = mergesort.mergesort(array);

console.log("sorted", sortedArray)
console.log("unsorted", array);
