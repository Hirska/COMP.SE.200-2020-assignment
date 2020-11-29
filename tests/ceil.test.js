import ceil from '../src/ceil.js'

describe('ceil', () => {
    // This case means that both should be null for a default value? 
    // By design or an overlook

    test('1: Valid number and precision, int', () => {
        const result = ceil(4, 2);
        expect(result).toEqual(4.00);
    });

    test('2: Valid number and precision, float', () => {
        const result2 = ceil(4.23582176, 3);
        expect(result2).toEqual(4.236);
    });
    
    test('3: Valid number and precision, signed float', () => {
        const result3 = ceil(-4.94578215134, 6);
        expect(result3).toEqual(-4.945782);
    });
    
    test('4: Valid number and precision, multiplication', () => {
        const result4 = ceil(5.234*732.12, 7);
        expect(result4).toEqual(3831.91608);
    });

    test('5: Precision is negative or float 1', () => {
        const result = ceil(123456, -5);
        expect(result).toEqual(200000);
    });

    test('6: Precision is negative or float 2', () => {
        const result2 = ceil(95481354.1348468187, -3);
        expect(result2).toEqual(95482000);
    });
    
    test('7: Precision is negative or float 3', () => {
        const result3 = ceil(91738264.46283719, -3.3);
        expect(result3).toEqual(NaN);
    });
    
    test('8: Precision is negative or float 4', () => {
        const result4 = ceil(123456, -4);
        expect(result4).toEqual(130000);
    });
    
    test('9: Precision is negative or float 5', () => {
        const result5 = ceil(123456, -4.1);
        expect(result5).toEqual(NaN);
    });
    
    test('10: Missing one or more input 1', () => {
        const result = ceil(null, 2);
        expect(result).toEqual(NaN); 
    });

    test('11: Missing one or more input 2', () => {
        const result2 = ceil(undefined, 3);
        expect(result2).toEqual(NaN);
    });
    
    test('12: Missing one or more input 3', () => {
        const result3 = ceil(null, 3);
        expect(result3).toEqual(NaN);
    });
    
    test('13: Missing one or more input 4', () => {
        const result4 = ceil(123.456, null);
        expect(result4).toEqual(124);   
    });
    
    test('14: Missing one or more input 5', () => {
        const result5 = ceil(123.456, undefined);
        expect(result5).toEqual(124);
    });
    
    test('15: Missing one or more input 6', () => {
        const result6 = ceil();
        expect(result6).toEqual(NaN);
    });
    
    test('16: Missing one or more input 7', () => {
        const result7 = ceil(123.456, NaN);
        expect(result7).toEqual(124);
    });    
});