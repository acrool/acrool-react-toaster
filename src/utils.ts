
/**
 * 刪除陣列中的一筆資料 (immutable)
 * ps: 不用先複製, 方法內會複製出來
 * ex: [1,2,3] -> [1,3]
 *
 * @param arrayData
 * @param index
 */
export function removeByIndex<T>(arrayData: T[], index: number): T[] {
    if(index === -1 || index > arrayData.length - 1) return arrayData;
    return [...arrayData.slice(0, index), ...arrayData.slice(index + 1)];
}
