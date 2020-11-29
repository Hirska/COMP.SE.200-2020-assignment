import defaultToAny from '../src/defaultToAny.js'

describe('defaultToAny', () => {
    // This case means that both should be null for a default value? 
    // By design or an overlook

    test('1: Check for basic cases 1', () => {
        const result = defaultToAny(1, 10, 20);
        expect(result).toEqual(1);
    });

    test('2: Check for basic cases 2', () => {
        const result2 = defaultToAny(undefined, 10, 20);
        expect(result2).toEqual(10);
    });
    
    test('3: Check for basic cases 3', () => {
        const result3 = defaultToAny(undefined, null, 20);
        expect(result3).toEqual(20);
    });
    
    test('4: Check for basic cases 4', () => {
        const result4 = defaultToAny(undefined, null, NaN);
        expect(result4).toEqual(NaN);
    });    

    test('5: defaultValue is null or undefined 1', () => {
        const result = defaultToAny(123456, null);
        expect(result).toEqual(123456);
    });

    test('6: defaultValue is null or undefined 2', () => {
        const result2 = defaultToAny(95481354.1348468187, NaN);
        expect(result2).toEqual(95481354.1348468187);
    });
    
    test('7: defaultValue is null or undefined 3', () => {
        const result3 = defaultToAny(91738264.46283719, undefined);
        expect(result3).toEqual(91738264.46283719);
    });    
});