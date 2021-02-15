/* */

const hitung = (a,b)=>{
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            if (a>0){
                resolve(a+b)
            }
            reject ('a kurang dari 0')
        },20)
    })
}

let a=hitung(9,9)

//a.then(a=>console.log(a)).catch(err=>console.log(err))

//a.then(a=>a+9).then(a=>console.log(a)).catch(err=>console.log(err))

const hitung1=async (a,b)=>{
    try{
        let c = await hitung(a,b);
        return c;
    }
    catch(error){
        console.log(error);
    }
};

hitung1(8,8)
.then((a)=>console.log(a))
.catch((err)=>console.log(err))