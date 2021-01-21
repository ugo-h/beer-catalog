import { searchBy } from '../search';

test('should return filtered array of objects, whole name of which matches the query', () => {
    const arr = [{ name: 'Ivan Fomin' }, { name: 'Igor Lex Mountain' }, { name: 'Mix doug' }];
    const result = searchBy('name')(arr, 'Ivan Fomin');
    expect(result[0].name).toBe('Ivan Fomin');
    expect(result.length).toBe(1);
});

test('should return array of elements that match any word in a query. Register should not matter', () => {
    const arr = [{ name: 'Ivan Fomin' }, { name: 'Igor Lex Mountain' }, { name: 'Mix doug' }];
    expect(searchBy('name')(arr, 'Ivan')[0].name).toBe('Ivan Fomin');
    expect(searchBy('name')(arr, 'ivan')[0].name).toBe('Ivan Fomin');
});

test('should return array of elements, and of them should match the query', () => {
    const arr = [{ name: 'Ivan Fomin' }, { name: 'Ivan Borisov' }, { name: 'Lev Tolstoy' }];
    const result = searchBy('name')(arr, 'Ivan');
    expect(result[0].name).toBe('Ivan Fomin');
    expect(result[1].name).toBe('Ivan Borisov');
    expect(result.length).toBe(2);
});

test('should return array of elements that match the first part of any word in a query', () => {
    const arr = [{ name: 'Maxwell Fomin' }, { name: 'John Maxon' }, { name: 'Lev Tolstoy' }];
    const result = searchBy('name')(arr, 'max');
    expect(result[0].name).toBe('Maxwell Fomin');
    expect(result[1].name).toBe('John Maxon');
    expect(result.length).toBe(2);
});
