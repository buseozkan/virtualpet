function Pet(name) {
    if(!(this instanceof Pet))
    return new Pet(name)
    this.name = name
}
const pet = {
    name: 'Fido'
};

var fido = new Pet("Fido");
//fido instanceof Pet 

Pet.prototype.name = "Fido";
module.exports = Pet;