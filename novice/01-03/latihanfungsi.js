//
//-----------------------

//penghitung luas dan keliling persegi
const pi=3.14

let penghitung = {
    
    luaspersegipanjang : (p,l)=>`Luas Persegi Panjang dengan panjang (${p}) dan luas (${l}) adalah : ${p*l}`,
    kelilingpersegipanjang :(p,l)=>`keliling Persegi Panjang dengan panjang (${p}) dan luas (${l}) adalah : ${(p+l)*2}`,

    luaslingkaran :(r)=>`luas lingkaran dengan jari-jari (${r}) adalah : ${pi*r*r}`,
    kelilinglingkaran :(r)=>`keliling lingkaran dengan jari-jari (${r}) adalah : ${2*pi*r}`,

    luaspersegi :(s)=>`luas persegi dengan sisi (${s}) adalah : ${s*s}`,
    kelilingpersegi :(s)=>`keliling persegi dengan sisi (${s}) adalah : ${4*s}`
};

let hitungtotal = [
    penghitung.kelilingpersegi(10),
    penghitung.luaspersegi(10),
    penghitung.luaspersegipanjang(2,4),
    penghitung.kelilingpersegipanjang(2,4),
    penghitung.luaslingkaran(6),
    penghitung.kelilinglingkaran(6)
]
for(i =1; i< hitungtotal.length; i++){
    console.log(`${i}. ${hitungtotal[i]}`);
}

/*
let luaspp=penghitung.luaspersegipanjang(2,4)
let kellpp=penghitung.kelilingpersegipanjang(2,4)
let luasling=penghitung.luaslingkaran(6)
let kellling=penghitung.kelilinglingkaran(6)
let luasp=penghitung.luaspersegi(10)
let kellp=penghitung.kelilingpersegi(10)

let luastotal=`${luaspp} \n${kellpp}\n${luasling}\n${kellling}\n${luasp}\n${kellp}`
console.log(luastotal)
*/


