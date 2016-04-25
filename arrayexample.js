
// arr.forEach(function(value, i, orig){
//   console.log(i);
//   console.log(orig);
//   console.log(value);
// });

// var newArr = arr.filter(function(value, i, orig){
//   return value % 2 !== 0;
// });
// 

// var newArr = arr.map(function(value, i, orig){
//   return {
//     number: value,
//     isEven: value % 2 === 0,
//     isOdd: value % 2 !== 0,
//     lessThan5: value < 5
//   }
// });
// 
// console.log(newArr);
// 

var arr = [
  1,2,3,4,5,6,7,8,9
];

var newVal = arr.reduce(function(a,b,i){
  return {
    sum: a.sum + b,
    count: i
  }
},{sum:0, count:0});

var avg = newVal.sum / newVal.count;

console.log(avg);


