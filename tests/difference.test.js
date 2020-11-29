import difference from '../src/difference.js'

describe('difference', () => {
    // This case means that both should be null for a default value? 
    // By design or an overlook

    test('1: Array is proper array 1', () => {
        const result = difference([2, 1], [2, 3]);
        expect(result).toEqual([1]);
    });

    test('2: Array is proper array 2', () => {
        const result2 = difference([1,2,3,4,5,6], [10, 20]);
        expect(result2).toEqual([1, 2, 3, 4, 5, 6]);
    });
    
    test('3: Array is proper array 3', () => {
        const result3 = difference(undefined, [null, 20]);
        expect(result3).toEqual([]);
    });
    
    test('4: Array is proper array 4', () => {
        const result4 = difference([undefined, null], [NaN]);
        expect(result4).toEqual([undefined, null]);

    });    

    test('5: Array is undefined or null 1', () => {
        const result = difference([123456], null);
        expect(result).toEqual([123456]);
    });

    test('6: Array is undefined or null 2', () => {
        const result2 = difference([95481354.1348468187], NaN);
        expect(result2).toEqual([95481354.1348468187]);

    });
    
    test('7: Array is undefined or null 3', () => {
        const result3 = difference([91738264.46283719], undefined);
        expect(result3).toEqual([91738264.46283719]);
    });

    test('8: values is undefined or null 4', () => {
        const result = difference([123456], null);
        expect(result).toEqual([123456]);
    });

    test('9: values is undefined or null 5', () => {
        const result2 = difference(95481354.1348468187, NaN);
        expect(result2).toEqual(95481354.1348468187);
    });
    
    test('10: values is undefined or null 6', () => {
        const result3 = difference([91738264.46283719], undefined);
        expect(result3).toEqual([91738264.46283719]);      
    });    
});