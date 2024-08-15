class vehicle{
    constructor(type,wheels,capacity){
     this.type = type;
     this.wheels = wheels;
     this.capacity = capacity;
    }

    dirigir(gas){
        setInterval(() => {
            if(gas >= 0) console.log(gas, "\n");
            gas -=10;
            if(gas < 0) clearInterval()
        },1000)
    }
}

const carro = new vehicle ("car",4,5);
carro.drive(100);