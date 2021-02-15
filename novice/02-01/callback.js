/*
function calculate(param1,param2,callback){
  //default operation
  result = param1 + param2
  
  // callback is function ?
  if (typeof callback == 'function'){
   result= callback(param1,param2)
  }
  
  return result
}

//execute
a=calculate(2000,4000, function(x,y){return "$ " + (x + y) }) 
b=calculate(7000,2000, function(x,y){return "Rp " + (x * y) }) 
c=calculate(8,2,function(x,y){return (x/y)})
console.log(a) // $ 6000
console.log(b) // rp 14000
console.log(c)
*/

const hitung=(a,b,callb)=>{
  return callb(a,b)
}

const tambah = (a,b)=>{
  return a+b
}

const kurang = (a,b)=>{
  return a-b
}

let b=hitung(7,5,tambah)
let c=hitung(7,5,kurang)

console.log(b)
console.log(c)
