function Pet(name){
    if(!(this instanceof Pet))
    return new Pet(name)
    this.name = name
}
var fido = new Pet("Fido");
//fido instanceof Pet 

Pet.prototype.name = "Fido";
module.exports = Pet;