import every from '../src/every.js'

describe('every', () => {
    // This case means that both should be null for a default value? 
    // By design or an overlook

    test('1: Valid inputs 1', () => {
        const result = every([true, 1, null, 'yes'], Boolean);
        expect(result).toEqual(false);
    });

    test('2: Valid inputs 2', () => {
        const result2 = every(['abc', 'b'], String);
        expect(result2).toEqual(true);
    });
    
    test('3: Valid inputs 3', () => {
        const result3 = every([1,325,132,67, 2], Number);
        expect(result3).toEqual(true);
    });
    
    test('4: Valid inputs 4', () => {
        const result4 = every(['hASSOMETHINGinmind', 'h', '156', '1sqdf'], String);
        expect(result4).toEqual(true);
    });

    test('5: Exist null, NaN or undefined 1', () => {
        const result = every(null, Number);
        expect(result).toEqual(false);
    });

    test('6: Exist null, NaN or undefined 2', () => {
        const result2 = every(undefined, String);
        expect(result2).toEqual(false);
    });
    
    test('7: Exist null, NaN or undefined 3', () => {
        const result3 = every(NaN, Boolean);
        expect(result3).toEqual(false);
    });
    
    test('8: Exist null, NaN or undefined 4', () => {
        const result4 = every([], undefined);
        expect(result4).toEqual(false);
    });
    
    test('9: Exist null, NaN or undefined 5', () => {
        const result5 = every([], NaN);
        expect(result5).toEqual(false);
    });
    
    test('10: Missing one or more input 1', () => {
        const result = every([1,6,78,2,4523,78], null);
        expect(result).toEqual(false); 
    });

    test('11: Missing one or more input 2', () => {
        const result2 = every(['as', 'asfwq','jyer'], undefined);
        expect(result2).toEqual(false);
    });
    
    test('12: Missing one or more input 3', () => {
        const result3 = every(null, null);
        expect(result3).toEqual(false);
    });
});