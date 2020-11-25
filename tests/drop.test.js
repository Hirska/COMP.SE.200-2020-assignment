import drop from '../src/drop.js'

describe('drop', () => {
    // This case means that both should be null for a default value? 
    // By design or an overlook

    test('1: Valid array and element to drop', () => {
        const result = drop([1, 2, 3]);
        expect(result).toEqual([2, 3]);
    });

    test('2: Valid array and element to drop', () => {
        const result2 = drop([1, 2, 3], 2);
        expect(result2).toEqual([3]);
    });
    
    test('3: Valid array and element to drop', () => {
        const result3 = drop([1, 2, 3], 5);
        expect(result3).toEqual([]);
    });
    
    test('4: Valid array and element to drop', () => {
        const result4 = drop([1, 2, 3], 0);
        expect(result4).toEqual([1, 2, 3]);
    });

    test('5: Array is null, NaN or undefined', () => {
        const result = drop([1, 2, 3], -5);
        expect(result).toEqual([1, 2, 3]);
    });

    test('6: Array is null, NaN or undefined', () => {
        const result2 = drop([1, 2, 3], -3.7);
        expect(result2).toEqual([1, 2, 3]);
    });
    
    test('7: Array is null, NaN or undefined', () => {
        const result3 = drop([1, 2, 3, null], 3);
        expect(result3).toEqual([null]);
    });
    
    test('8: Array is null, NaN or undefined', () => {
        const result4 = drop([1, 2, 3, undefined], -4);
        expect(result4).toEqual([1, 2, 3, undefined]);
    });
    
    test('9: Array is null, NaN or undefined', () => {
        const result5 = drop([1, 2, 3, NaN], -4.1);
        expect(result5).toEqual([1, 2, 3, NaN]);
    });
    
    test('10: Missing one or more input', () => {
        const result = drop(null, 2);
        expect(result).toEqual([]); 
    });

    test('11: Missing one or more input', () => {
        const result2 = drop(undefined, 3);
        expect(result2).toEqual([]);
    });
    
    test('12: Missing one or more input', () => {
        const result3 = drop(null, 3);
        expect(result3).toEqual([]);
    });
    
    test('13: Missing one or more input', () => {
        const result4 = drop([1, 2, 3], null);
        expect(result4).toEqual([1, 2, 3]);   
    });
    
    test('14: Missing one or more input', () => {
        const result5 = drop([1, 2, 3], undefined);
        expect(result5).toEqual([2, 3]);
    });
    
    test('15: Missing one or more input', () => {
        const result6 = drop();
        expect(result6).toEqual([]);
    });
    
    test('16: Missing one or more input', () => {
        const result7 = drop([1, 2, 3], NaN);
        expect(result7).toEqual([1, 2, 3]);        
    });    
});