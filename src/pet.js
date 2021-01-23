function Pet(name) {
    this.name = name,
    this.age = 0,
    this.hunger = 0,
    this.fitness = 10
}

//Pet.prototype = {
  //  get isAlive(){
    //    if(!this.fitness <= 0 || this.hunger = 0 || this.age>30) {
      //      return false;
       // } else {
         //   return true;
        //}
    //}
//}

Pet.prototype.growUp = function () {
    this.age += 1;
};

Pet.prototype.growUp = function () {
    this.hunger = this.hunger + 5;
}

Pet.prototype.growUp = function (){
    this.fitness = this.fitness - 3;
}


const pet = {
    name: 'Fido'
};

var fido = new Pet("Fido");
//fido instanceof Pet 

Pet.prototype.name = "Fido";
module.exports = Pet;