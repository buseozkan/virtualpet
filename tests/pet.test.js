const Pet = require('../src/pet');
//pet.name;


describe('constructor', () => {
    test('should be an instance of object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
    test('has initial age 0', () => {
        const pet = new Pet('Fido');
        expect(pet.age).toEqual(0);
    });

    it('sets the name property', () => {
        const pet = new Pet('Fido');
        expect(pet.name).toEqual('Fido');
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
    test('check if the age increases', () => {
        const pet = new Pet('Fido');
        pet.age = 1;
        pet.growUp();
        expect(pet.age).toEqual(1);
    })
})

describe('walk', () => {
    it('increases fitness by 4 up to a maximum of 10', () => {
      const pet = new Pet('Fido');
  
      this.fitness = 8;
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


describe('checkUp', () => {
    it('checks up the hunger and fitness level of the pet', () => {
        const pet = new Pet('Fido');
        let testFidoPet = new Pet('Test Fido');
        testFidoPet.fitness = 2;
        testFidoPet.hunger = 0;
        expect(testFidoPet.checkUp()).toBe('I need a walk!');
        testFidoPet.fitness = 10;
        testFidoPet.hunger = 8;
        expect(testFidoPet.checkUp()).toBe('I am hungry!');
        testFidoPet.fitness = 2;
        testFidoPet.hunger = 8;
        expect(testFidoPet.checkUp()).toBe('I am hungry AND I need a walk!');
        testFidoPet.fitness = 10;
        testFidoPet.hunger = 0;
        expect(testFidoPet.checkUp()).toBe('I feel great!');
    });
})
