function Pet(name) {
    this.name = name,
    this.age = 0,
    this.hunger = 0,
    this.fitness = 10
}
Pet.prototype = {
    get isAlive() {
   if (this.fitness <= 0 || this.hunger >= 10 || this.age >= 30) {
       return false;
   } else {
       return true;
}}}

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
Pet.prototype.walk = function() {
    if((this.fitness + 4) <= 10) {
        this.fitness += 4;
    } else {
        this.fitness = 10;
    }
}
const MAXIMUM_FITNESS = 10;

Pet.prototype.checkUp = function() {
    if (!this.isAlive) {
    return 'Your pet is no longer alive :('
    }
  if (this.fitness <= 3 && this.hunger >= 5) {
      return 'I am hungry AND I need a walk!';
    } 
   if (this.fitness > 3 && this.hunger < 5) {
      return 'I feel great!';
    } 
   if (this.fitness <= 3) {
      return 'I need a walk!';
    } 
    if (this.hunger >= 5) {
      return 'I am hungry!';
    }   
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