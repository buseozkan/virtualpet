const Pet = require('../src/pet');
const pet = new Pet('Fido');
pet.name;

describe('constructor', () => {
    test('returns an object', () => {
        expect(new Pet("Fido")).toBeInstanceOf(Object);
    });
});