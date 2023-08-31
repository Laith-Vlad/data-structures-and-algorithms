const Hashmab = require('./Hashmab');

describe('Hashmab', () => {
  let hashTable;

  beforeEach(() => {
    hashTable = new Hashmab(19);
  });

  test('should set and get values', () => {
    hashTable.set('Basha', 'Student');
    hashTable.set('Saleh', 'Student');
    hashTable.set('Anas', 'Student');
    hashTable.set('Farah', 'Student');
    hashTable.set('Rama', 'Student');
    hashTable.set('Waleed', 'Instructor');

    expect(hashTable.get('Basha')).toBe('Student');
    expect(hashTable.get('Saleh')).toBe('Student');
    expect(hashTable.get('Anas')).toBe('Student');
    expect(hashTable.get('Farah')).toBe('Student');
    expect(hashTable.get('Rama')).toBe('Student');
    expect(hashTable.get('Waleed')).toBe('Instructor');
  });

  test('should correctly check if a key exists', () => {
    hashTable.set('Basha', 'Student');
    hashTable.set('Saleh', 'Student');

    expect(hashTable.has('Basha')).toBe(true);
    expect(hashTable.has('Saleh')).toBe(true);
    expect(hashTable.has('Anas')).toBe(false);
  });

  test('should retrieve all keys', () => {
    hashTable.set('Basha', 'Student');
    hashTable.set('Saleh', 'Student');

    const keys = hashTable.keys();
    expect(keys).toContain('Basha');
    expect(keys).toContain('Saleh');
    expect(keys).not.toContain('Anas');
  });
});
