import eq from '../src/eq.js'

describe('eq', () => {
    // This case means that both should be null for a default value? 
    // By design or an overlook

    test('1: Valid value and other 1', () => {
        const object = { 'a': 1 };
        const other = { 'a': 1 };
        const result = eq(object, other);
        expect(result).toEqual(false);
    });

    test('2: Valid value and other 2', () => {
        const object = { 'a': 1 }
        const other = { 'a': 1 }
        const result = eq(object, object);
        expect(result).toEqual(true);
    });
    
    test('3: Valid value and other 3', () => {
        const object = { 'a': 1 }
        const other = { 'a': 1 }
        const result3 = eq(1, object['a']);
        expect(result3).toEqual(true);
    });
    
    test('4: Valid value and other 4', () => {
        const result4 = eq(NaN, NaN);
        expect(result4).toEqual(true);
    });

    test('5: Exist null, NaN or undefined 1', () => {
        const result = eq(null, undefined);
        expect(result).toEqual(false);
    });

    test('6: Exist null, NaN or undefined 2', () => {
        const result2 = eq(undefined, NaN);
        expect(result2).toEqual(false);
    });
    
    test('7: Exist null, NaN or undefined 3', () => {
        const result3 = eq(NaN, null);
        expect(result3).toEqual(false);
    });
    
    test('8: Exist null, NaN or undefined 4', () => {
        const result4 = eq('asdasrtwft <sdfwev', 'asdasrtwft <sdfwev');
        expect(result4).toEqual(true);
    });
    
    test('9: Exist null, NaN or undefined 5', () => {
        const result5 = eq('asdfertsd');
        expect(result5).toEqual(false);
    });
    
    test('10: Missing one or more input 1', () => {
        const result = eq(null, 2);
        expect(result).toEqual(false); 
    });

    test('11: Missing one or more input 2', () => {
        const result2 = eq(undefined, 3);
        expect(result2).toEqual(false);
    });
    
    test('12: Missing one or more input 3', () => {
        const result3 = eq();
        expect(result3).toEqual(false);
    });
});