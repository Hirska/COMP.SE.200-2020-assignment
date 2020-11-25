import clamp from '../src/clamp.js'

describe('clamp', () => {
    // This case means that both should be null for a default value? 
    // By design or an overlook

    test('1: Valid inputs in number, lower and upper', () => {
        const result0 = clamp(-10, -5, 5);
        expect(result0).toEqual(-5);
        
        const result00 = clamp(10, -5, 5);
        expect(result00).toEqual(5);        

        const result = clamp(2, 4, 12);
        expect(result).toEqual(4);

        const result2 = clamp(-45, 1, 3);
        expect(result2).toEqual(1);

        const result4 = clamp(5, -5, 25);
        expect(result4).toEqual(5);         

        // Suppose to be 6, but received 1
        const result3 = clamp(99, 1, 6);
        expect(result3).toEqual(6);
    });

    test('2: Upper is missing', () => {        
        const result = clamp(123456, -5);
        expect(result).toEqual(-5);

        const result2 = clamp(95481354.1348468187, -3, null);
        expect(result2).toEqual(-3); // honest case would be 0
        
        const result3 = clamp(91738264.46283719, -3.3, NaN);
        expect(result3).toEqual(-3.3);

        const result4 = clamp(123456, -4, undefined);
        expect(result4).toEqual(-4);
        
        const result5 = clamp(123456, -2.5);
        expect(result5).toEqual(-2.5);         
    });
    
    test('3: Missing one or more input', () => {
        const result = clamp(null, null, null);
        expect(result).toEqual(0); 

        const result2 = clamp(undefined, 3, 5);
        expect(result2).toEqual(NaN);

        const result21 = clamp(NaN, 3, 5);
        expect(result2).toEqual(NaN);
        
        const result3 = clamp(null, 3);
        expect(result3).toEqual(0);
        
        const result4 = clamp(123.456, null);
        expect(result4).toEqual(0);
        
        const result5 = clamp(123.456);
        expect(result5).toEqual(0);
        
        const result6 = clamp();
        expect(result6).toEqual(NaN);
        
        const result7 = clamp(123.456, NaN);
        expect(result7).toEqual(0);        
    });      
});