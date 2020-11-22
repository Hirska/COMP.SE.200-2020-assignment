import defaultTo from '../src/defaultTo.js'

describe('defaultTo', () => {
    // This case means that both should be null for a default value? 
    // By design or an overlook

    test('1: value is Nan, null or undefined', () => {
        const result = defaultTo(NaN, 2);
        expect(result).toEqual(2);

        const result2 = defaultTo(null, 3);
        expect(result2).toEqual(3);
        
        const result3 = defaultTo(undefined, 6);
        expect(result3).toEqual(6);
        
        const result4 = defaultTo(5.234*732.12, 7);
        expect(result4).toEqual(3831.91608);        

    });

    test('2: defaultValue is null or undefined', () => {        
        const result = defaultTo(123456, null);
        expect(result).toEqual(123456);

        const result2 = defaultTo(95481354.1348468187, NaN);
        expect(result2).toEqual(95481354.1348468187);
        
        const result3 = defaultTo(91738264.46283719, undefined);
        expect(result3).toEqual(91738264.46283719);      
    });     
});