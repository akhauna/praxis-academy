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

const hitung = (a,b)=>{
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            if (a>0){
                resolve((a,b)=>{
                if (a<5){
                    (a+b)
                }
                if (a>5){
                    (a*b)
                }
                })
            }
            reject ('a kurang dari 0')
        },20)
    })
}

let a=hitung(9,9)

a.then(a=>console.log(a)).catch(err=>console.log(err))

//a.then(a=>a+9).then(a=>console.log(a)).catch(err=>console.log(err))
