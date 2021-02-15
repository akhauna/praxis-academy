class persegip{
    constructor(p,l){
        this.p=p;
        this.l=l;
    }
    //getter
    get area(){
        return this.luas();
    }
    //METOD
    luas(){
        return this.l * this.p;
    }
    keliling(){
        return (this.l + this.p)*2;
    }

}

const kotak = new persegip(2,4)

console.log(kotak.keliling())
/*
class kubus extends persegip{
    constructor (p,l,t){
        super(p,l)
        this.t=t;

    }
    volume (){
        return this.p * this.l *this.t;
    }

}
const volum = new kubus(2,3,4)

console.log(volum.volume())
*/

module.exports={persegip,kotak};