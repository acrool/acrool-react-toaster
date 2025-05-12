import {removeByIndex} from './utils';

describe('removeByIndex', () => {
    it('應正確移除指定索引的元素', () => {
        expect(removeByIndex([1, 2, 3], 1)).toEqual([1, 3]);
        expect(removeByIndex(['a', 'b', 'c'], 0)).toEqual(['b', 'c']);
        expect(removeByIndex([true, false], 1)).toEqual([true]);
    });

    it('索引為 -1 時應回傳原陣列', () => {
        const arr = [1, 2, 3];
        expect(removeByIndex(arr, -1)).toBe(arr);
    });

    it('索引超出範圍時應回傳原陣列', () => {
        const arr = [1, 2, 3];
        expect(removeByIndex(arr, 3)).toBe(arr);
        expect(removeByIndex(arr, 100)).toBe(arr);
    });

    it('空陣列時應回傳空陣列', () => {
        expect(removeByIndex([], 0)).toEqual([]);
        expect(removeByIndex([], 1)).toEqual([]);
    });
});
