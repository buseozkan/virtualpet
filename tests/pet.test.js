const Pet = require('../src/pet');
const pet = new Pet('Fido');
pet.name;

describe('constructor', () => {
    test('should be an instance of object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
});

describe('constructor', () => {
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
    it('should check if the age increases or not', () => {
        let testPet = new Pet('Test Pet');
        testPet.growUp(1);
        expect(testPet.age).toBe(1);
        testPet.age = 0;
        testPet.growUp(2);
        expect(testPet.age).toBe(2);
    });
});

describe('health with growUp', () => {
    it('should check if the pets health impairs when it gets older; age should increase by the numebr passed', () => {
        let testPet = new Pet('TestPet')
        testPet.growUp(1)
        expect(testPet.hunger).toBe(5);
        expect(testPet.fitness).toBe(7);
    });
});

