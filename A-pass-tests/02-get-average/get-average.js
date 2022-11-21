// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
  let result=[];
   result=numbers.filter(e=>typeof e==="number")
   let arr1= (result.reduce((a,b)=>a+b,0))/result.length;
 return arr1;
}
average([1,"h","54","kjkj",2])
module.exports = average;
