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

        const result2 = countBy(users, null);
        expect(result2).toEqual({});
        
        const result3 = countBy(users, undefined);
        expect(result3).toEqual({});

        const result4 = countBy(users, NaN);
        expect(result4).toEqual({});          
       
    });
    
    test('3: Missing one or more input', () => {
        const result = countBy(null, value => value.active);
        expect(result).toEqual({}); 

        const result2 = countBy(undefined, value => value.active);
        expect(result2).toEqual({});
        
        const result3 = countBy(null, value => value.active);
        expect(result3).toEqual({});
        
        const result4 = countBy(123.456, value => value.active);
        expect(result4).toEqual({});
        
        const result6 = countBy();
        expect(result6).toEqual({});
        
        const result7 = countBy(123.456, NaN);
        expect(result7).toEqual({});        
    });      
});

