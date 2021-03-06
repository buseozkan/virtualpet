const MAXIMUM_FITNESS = 10;
const fitnessinc = 4;
const fitnessdec = 3;
const hungerinc = 5;
const hungerdec = 3;
const hungermin = 0;
const ageinc = 1;

function Pet(name) {
    this.name = name,
    this.age = 0,
    this.hunger = 0,
    this.fitness = 10
}

Pet.prototype = {
    get isAlive() {
        return this.age < 30 && this.hunger < 10 && this.fitness > 0;
      }
    }

Pet.prototype.growUp = function() {
   
    this.age = this.age + ageinc;
    this.hunger = this.hunger + hungerinc;
    this.fitness -= hungerdec;
};


//const MAXIMUM_FITNESS = 10;
Pet.prototype.walk = function() {
    if((this.fitness + 4) <= 10) {
        this.fitness += 4;
    } else {
        this.fitness = 10;
    }
}

Pet.prototype.feed = function() {
    if (this.hunger <= 3) {
        this.hunger = 0;
    } else {
        this.hunger -= 3;
    }
}

Pet.prototype.checkUp = function() {
    if (!this.isAlive) {
    throw new Error('Your pet is no longer alive :(');
    }
  if (this.fitness <= 3 && this.hunger >= 5) {
      return 'I am hungry AND I need a walk!';
    } else if (this.fitness > 3 && this.hunger < 5) {
      return 'I feel great!';
    } else if (this.fitness <= 3) {
      return 'I need a walk!';
    } else if (this.hunger >= 5) {
      return 'I am hungry!';
    }   
}

//Pet.prototype.growUp = function (){
  //  this.fitness = this.fitness - 3;
//}

Pet.prototype.feed = function(){
    if(!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
      }
}

Pet.prototype.walk = function() {
    if(!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
      }
}

Pet.prototype.growUp = function() {
    if(!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
      }
}
const pet = {
    name: 'Fido'
};

var fido = new Pet("Fido");
//fido instanceof Pet 

Pet.prototype.name = "Fido";
module.exports = Pet;