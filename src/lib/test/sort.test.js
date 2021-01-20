import { sortByNameOption } from '../lib';

test('should sort by name property', () => {
    const arr = [
        { name: 'ugo' },
        { name: 'Dimirti' },
        { name: 'Anna' }
    ];
    arr.sort(sortByNameOption);
    expect(arr[[0]].name).toBe('Anna');
});
