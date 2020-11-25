import countBy from '../src/countBy.js'

const users = [
    { 'user': 'barney', 'active': true },
    { 'user': 'betty', 'active': true },
    { 'user': 'fred', 'active': false }
 ];

 const someItemObject = {
    'name': 'some item',
    'quantity' : 739182465,
    'attribs': [
        {'height': 15, 'width': 45, 'length': 97},
        12,
        'no',
        false,
        true
    ],
    'ratings': {
        '5': 15,
        '4': 10,
        '3': 6,
        '2': 3,
        '1': 8
    }
};

describe('countBy', () => {
    // This case means that both should be null for a default value? 
    // By design or an overlook

    test('1: Array of object as input', () => {
        const result = countBy(users, value => value.active);
        expect(result).toEqual({ 'true': 2, 'false': 1 });
    });

    test('2: Iteratee accesses undefined attribute', () => {
        const result = countBy(users, value => value.activation);
        expect(result).toEqual({});
    });

    test('3: Iteratee accesses undefined attribute', () => {
        const result2 = countBy(users, null);
        expect(result2).toEqual({});
    });
    
    test('4: Iteratee accesses undefined attribute', () => {
        const result3 = countBy(users, undefined);
        expect(result3).toEqual({});
    });
    
    test('5: Iteratee accesses undefined attribute', () => {
        const result4 = countBy(users, NaN);
        expect(result4).toEqual({});
    });
    
    test('6: Missing one or more input', () => {
        const result = countBy(null, value => value.active);
        expect(result).toEqual({}); 
    });

    test('7: Missing one or more input', () => {
        const result2 = countBy(undefined, value => value.active);
        expect(result2).toEqual({});
    });
    
    test('8: Missing one or more input', () => {
        const result3 = countBy(NaN, value => value.active);
        expect(result3).toEqual({});
    });
    
    test('9: Missing one or more input', () => {
        const result4 = countBy(123.456, value => value.active);
        expect(result4).toEqual({});
    });
    
    test('10: Missing one or more input', () => {
        const result6 = countBy();
        expect(result6).toEqual({});
    });
    
    test('11: Missing one or more input', () => {
        const result7 = countBy(123.456, NaN);
        expect(result7).toEqual({});
    });
});

