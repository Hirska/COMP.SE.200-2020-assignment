import defaultToAny from '../src/defaultToAny.js'

describe('defaultToAny', () => {
    // This case means that both should be null for a default value? 
    // By design or an overlook

    test('1: Check for basic cases', () => {
        const result = defaultToAny(1, 10, 20);
        expect(result).toEqual(1);

        const result2 = defaultToAny(undefined, 10, 20);
        expect(result2).toEqual(10);
        
        const result3 = defaultToAny(undefined, null, 20);
        expect(result3).toEqual(20);
        
        const result4 = defaultToAny(undefined, null, NaN);
        expect(result4).toEqual(NaN);        

    });

    test('2: defaultValue is null or undefined', () => {        
        const result = defaultToAny(123456, null);
        expect(result).toEqual(123456);

        const result2 = defaultToAny(95481354.1348468187, NaN);
        expect(result2).toEqual(95481354.1348468187);
        
        const result3 = defaultToAny(91738264.46283719, undefined);
        expect(result3).toEqual(91738264.46283719);      
    });
});