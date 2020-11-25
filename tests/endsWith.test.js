import endsWith from '../src/endsWith.js'

describe('endsWith', () => {
    // This case means that both should be null for a default value? 
    // By design or an overlook

    test('1: Valid string, target and position endsWith', () => {
        const result = endsWith('abc', 'c');
        expect(result).toEqual(true);
    });

    test('2: Valid string, target and position endsWith', () => {
        const result2 = endsWith('abc', 'b');
        expect(result2).toEqual(false);
    });
    
    test('3: Valid string, target and position endsWith', () => {
        const result3 = endsWith('abc', 'b', 2);
        expect(result3).toEqual(true);
    });
    
    test('4: Valid string, target and position endsWith', () => {
        const result4 = endsWith('hASSOMETHINGinmind', 'h', 0);
        expect(result4).toEqual(true);
    });

    test('5: Exist null, NaN or undefined', () => {
        const result = endsWith(null, 'h', -3);
        expect(result).toEqual(false);
    });

    test('6: Exist null, NaN or undefined', () => {
        const result2 = endsWith(undefined, 'w', 1);
        expect(result2).toEqual(false);
    });
    
    test('7: Exist null, NaN or undefined', () => {
        const result3 = endsWith(NaN, 3);
        expect(result3).toEqual(false);
    });
    
    test('8: Exist null, NaN or undefined', () => {
        const result4 = endsWith('asdasrtwft <sdfwev', undefined);
        expect(result4).toEqual(true);
    });
    
    test('9: Exist null, NaN or undefined', () => {
        const result5 = endsWith('asdfertsd');
        expect(result5).toEqual(false);
    });
    
    test('10: Missing one or more input', () => {
        const result = endsWith('asdaswtbg', null, 2);
        expect(result).toEqual(false); 
    });

    test('11: Missing one or more input', () => {
        const result2 = endsWith('jrtgseg', undefined, 3);
        expect(result2).toEqual(false);
    });
    
    test('12: Missing one or more input', () => {
        const result3 = endsWith(null, 3);
        expect(result3).toEqual(false);
    });
});