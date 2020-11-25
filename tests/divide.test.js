import divide from '../src/divide.js'

describe('divide', () => {
    // This case means that both should be null for a default value? 
    // By design or an overlook

    test('1: Valid number and precision', () => {
        const result = divide(4, 2);
        expect(result).toEqual(2.0);
    });

    test('2: Valid number and precision', () => {
        const result2 = divide(4, 3);
        expect(result2).toEqual(4/3);
    });
    
    test('3: Valid number and precision', () => {
        const result3 = divide(-4, 6);
        expect(result3).toEqual(-2/3);
    });
    
    test('4: Valid number and precision', () => {
        const result4 = divide(5.234*732.12, 7);
        expect(result4).toEqual(547.417);
    });

    test('5: Precision is negative or float', () => {
        const result = divide(123456, -5);
        expect(result).toEqual(-24691.2);
    });

    test('6: Precision is negative or float', () => {
        const result2 = divide(95481354.1348468187, -3);
        expect(result2).toEqual(-31827118.04);
    });
    
    test('7: Precision is negative or float', () => {
        const result3 = divide(91738264.46283719, -3.3);
        expect(result3).toEqual(-28933743.68);
    });
    
    test('8: Precision is negative or float', () => {
        const result4 = divide(123456, -4);
        expect(result4).toEqual(-30864);
    });
    
    test('9: Precision is negative or float', () => {
        const result5 = divide(123456, -4.1);
        expect(result5).toEqual(-30111.21951);
    });
    
    test('10: Missing one or more input', () => {
        const result = divide(null, 2);
        expect(result).toEqual(NaN); 
    });

    test('11: Missing one or more input', () => {
        const result2 = divide(undefined, 3);
        expect(result2).toEqual(NaN);
    });
    
    test('12: Missing one or more input', () => {
        const result3 = divide(null, 3);
        expect(result3).toEqual(NaN);
    });
    
    test('13: Missing one or more input', () => {
        const result4 = divide(123.456, null);
        expect(result4).toEqual(124);   
    });
    
    test('14: Missing one or more input', () => {
        const result5 = divide(123.456, undefined);
        expect(result5).toEqual(124);
    });
    
    test('15: Missing one or more input', () => {
        const result6 = divide();
        expect(result6).toEqual(NaN);
    });
    
    test('16: Missing one or more input', () => {
        const result7 = divide(123.456, NaN);
        expect(result7).toEqual(124);        
    });    
});