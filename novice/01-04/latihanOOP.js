
//MASAKAN PADANG PENDAWA

function Makanan(lauk,minum){
  this.lauk = lauk;
  this.minum = minum;
  this.detail=function(){
    return dompet-(this.lauk+this.minum);
  }
}

const dompet=(20000);

const ayam = new Makanan(10000,3000);
const lele = new Makanan(10000,3000);
const telur= new Makanan(7000,3000);

//jumat diskon 20%

class discon extends Makanan{
  constructor (lauk,minum,diskon){
      super(lauk,minum)
      this.diskon=diskon;

  }
  disck (){
      return dompet-(this.lauk+this.minum-((this.lauk + this.minum)*(this.diskon/100)));
  }

}

const ayamz = new discon(10000,3000,20);
const lelez = new discon(10000,3000,20);
const telurz= new discon(7000,3000,20);


console.log(telurz.disck())
//console.log(telur.detail())