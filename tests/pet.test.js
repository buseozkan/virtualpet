const Pet = require('../src/pet');
const pet = new Pet('Fido');
pet.name;

describe('constructor', () => {
    test('sets the name property', () => {
        const pet = new Pet('Fido');

        expect(pet.name).toEqual('Fido');
    });
    // test('returns an object', () => {
      //  expect(new Pet("Fido")).toBeInstanceOf(Object);
   // });
});