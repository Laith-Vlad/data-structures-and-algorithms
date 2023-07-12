const AnimalShelter = require('./12.js');
class Animal {
  constructor(species, name) {
    this.species = species;
    this.name = name;
  } }

describe('AnimalShelter', () => {
  let shelter;

  beforeEach(() => {
    shelter = new AnimalShelter();
  });

  test('should enqueue a dog', () => {
    const dog = new Animal('dog', 'Rex');
    shelter.enqueue(dog);

    expect(shelter.dogs.length).toBe(1);
    expect(shelter.dogs[0]).toBe(dog);
  });

  test('should enqueue a cat', () => {
    const cat = new Animal('cat', 'Whiskers');
    shelter.enqueue(cat);

    expect(shelter.cats.length).toBe(1);
    expect(shelter.cats[0]).toBe(cat);
  });

  test('should dequeue a dog', () => {
    const dog1 = new Animal('dog', 'Rex');
    const dog2 = new Animal('dog', 'Buddy');
    shelter.enqueue(dog1);
    shelter.enqueue(dog2);

    const dequeuedDog = shelter.dequeue('dog');

    expect(dequeuedDog).toBe(dog1);
    expect(shelter.dogs.length).toBe(1);
    expect(shelter.dogs[0]).toBe(dog2);
  });

  test('should dequeue a cat', () => {
    const cat1 = new Animal('cat', 'Whiskers');
    const cat2 = new Animal('cat', 'Fluffy');
    shelter.enqueue(cat1);
    shelter.enqueue(cat2);

    const dequeuedCat = shelter.dequeue('cat');

    expect(dequeuedCat).toBe(cat1);
    expect(shelter.cats.length).toBe(1);
    expect(shelter.cats[0]).toBe(cat2);
  });

  test('should return null when dequeueing with an invalid preference', () => {
    const cat = new Animal('cat', 'Whiskers');
    shelter.enqueue(cat);

    const dequeuedAnimal = shelter.dequeue('invalid');

    expect(dequeuedAnimal).toBeNull();
    expect(shelter.cats.length).toBe(1);
  });
});