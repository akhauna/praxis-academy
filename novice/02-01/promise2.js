/*
let myPromise = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve("Hello World 1");
    }, 1000);
  });
  
  myPromise.then(function(success){
    console.log(success);
    console.log("Hello World 2");
  });
  */

//const { rejects } = require("assert");

const mobil1=()=>(new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('mobil1')
    },2000)
}))

const mobil2=()=>(new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('mobil2')
    },3000)
}))

const mobil3=()=>(new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('mobil3')
    },500)
}))

async function promseAll(){
    let result = await Promise.all(
        [mobil1(),mobil2(),mobil3()]
    )
    console.log(result);
}

async function promiseBalap(){
    let result = await Promise.race(
        [mobil1(),mobil2(),mobil3()]
    )
    console.log(result);
}

promseAll()
promiseBalap()