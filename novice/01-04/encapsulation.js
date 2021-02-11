/*
function Ongkir(berat){
    this.pajak=500;
    this.biaya=function(){
        return berat*1000;
    }
    this.totalBiaya = function(){
        return this.biaya()+this.pajak
    }
}
const laptop = new Ongkir(4);
laptop.pajak=800 //mengubah hasil akhir tnpa encapsul
console.log(laptop.totalBiaya())
*/

function Ongkir(berat){
    var pajak=500;
    var biaya=function(){
        return berat*1000;
    }
    this.totalBiaya = function(){
        return biaya()+pajak
    }
}
const laptop = new Ongkir(4);
laptop.pajak=800 //tdk mengubah hasil akhir krna pakai encap
console.log(laptop.totalBiaya())
