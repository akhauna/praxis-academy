function Barang(name,price,weight,color){
    //public property
    this.name =name;
    this.price=price;

    //private property
    var weight=weight;
    var color=color;
    
    //public metod
    this.detail=function(){
        return trhis.name+" "+ this.price
    }

    //private method
    function showWeightColor(){
        return weight+ " "+ color
    }
}
//instansi sebuah objek

const barang1=new Barang ("snsv", 100,2,"bleki")

console.log(barang1)
console.log(barang1.name)
console.log(barang1.weight)
console.log(barang1.detail)
//console.log(barang1.showWeightColor())