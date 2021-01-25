const Pet = require('../src/pet');
const pet = new Pet('Fido');
pet.name;

describe('constructor', () => {
    test('should be an instance of object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
});

describe('create a new Pet', () => {
    it('should return a pet with a name, age, hunger level(0) and fitness(10)', () => {
        expect(new Pet('Fido')).toEqual({
            name: 'Fido',
            age: 0,
            hunger: 0, 
            fitness: 10,
        });
    });
});

describe('growUp', () => {
    it('should check if the age increases', () => {
        Pet.growUp(1);
        expect(Pet.age).toBe(1);
        Pet.age = 0;
        Pet.growUp(2);
        expect(Pet.age).toBe(2);
    });
});

describe('walk', () => {
    it('increases fitness by to a maximum of 10', () => {
      const pet = new Pet('fido');
  
      pet.fitness = 8;
      pet.walk();
  
      expect(pet.fitness).toEqual(10);
    });
  });

describe('feed', () => {
    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
        pet.age = 30;
        expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
    });
});



