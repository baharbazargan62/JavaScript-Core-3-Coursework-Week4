function add(numbers){

if (numbers.length===0){return 0 } 
let result=numbers.split(",")
let numberArray=result.map(number =>Number(number));
let negatives=numberArray.some(item=>item<0);
if (negatives){
return `negatives are not allowed:${numberArray.filter(item=>item<0).join(",")}`}

return numberArray.reduce((a,b)=>b<1000 ? a+b : a,0)

}
module.exports=add
