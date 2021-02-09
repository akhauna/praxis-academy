
/*
const coba=[2,4,6,8]
const coba1=coba.map(coba2=>{
    return coba2 *2
})
console.log(coba1)
*/
//----------------------------
const pengguna = [
    { nama: 'baginda', hobi: 'suka koding' },
    { nama: 'sigelap', hobi: 'suke terknock' },
    { nama: 'petarunx', hobi: 'gelud' }
]

const hobipengguna = pengguna.map(item => {
    const container = {};

    container[item.nama] = item.hobi;
    container.banyakhurupnama = item.nama.length;

    return container;
})

console.log(hobipengguna);