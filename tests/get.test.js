import get from '../src/get.js'

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

const someItemObject2 = {
    'name': 'some item 2',
    'quantity' : 456541356684,
    'attribs': [
        {'height': 25, 'width': 15, 'length': 985},
        12,
        'no',
        false,
        false
    ],
    'ratings': {
        '5': 25,
        '4': 0,
        '3': 6,
        '2': 30,
        '1': 18
    }
};

const someItemObject3 = {
    'name': 'some item 3',
    'quantity' : 897312321,
    'attribs': [
        {'height': 115, 'width': 455, 'length': 67},
        112,
        'yes',
        true,
        true
    ],
    'ratings': {
        '5': 1645,
        '4': 1120,
        '3': 16,
        '2': 13,
        '1': 82
    }
};

const itemObjectsList = [
    someItemObject,
    someItemObject2,
    someItemObject3
];

describe('get', () => {
    // This case means that both should be null for a default value? 
    // By design or an overlook

    test('1: Valid string, target and position get', () => {
        const object = { 'a': [{ 'b': { 'c': 3 } }] };
        const result = get(object, 'a[0].b.c');
        expect(result).toEqual(3);
    });

    test('2: Valid string, target and position get', () => {
        const object = { 'a': [{ 'b': { 'c': 3 } }] };
        const result2 = get(object, ['a', '0', 'b', 'c']);
        expect(result2).toEqual(3);
    });
    
    test('3: Valid string, target and position get', () => {
        const object = { 'a': [{ 'b': { 'c': 3 } }] };
        const result3 = get(object, 'a.b.c', 'default');
        expect(result3).toEqual('default');
    });
    
    test('4: Valid string, target and position get', () => {
        const result4 = get(itemObjectsList, [2, 'name']);
        expect(result4).toEqual('some item 3');
    });

    test('5: Exist null, NaN or undefined', () => {
        const result = get(null, 'a[0].b.c');
        expect(result).toEqual(undefined);
    });

    test('6: Exist null, NaN or undefined', () => {
        const result2 = get(undefined, 'w', 1);
        expect(result2).toEqual(1);
    });
    
    test('7: Exist null, NaN or undefined', () => {
        const result3 = get(NaN, 3);
        expect(result3).toEqual(undefined);
    });
    
    test('8: Exist null, NaN or undefined', () => {
        const result4 = get(itemObjectsList, undefined);
        expect(result4).toEqual(undefined);
    });
    
    test('9: Exist null, NaN or undefined', () => {
        const result5 = get(itemObjectsList);
        expect(result5).toEqual(undefined);
    });
    
    test('10: Missing one or more input', () => {
        const result = get(itemObjectsList, null, 2);
        expect(result).toEqual(2); 
    });

    test('11: Missing one or more input', () => {
        const result2 = get(itemObjectsList, undefined, 3);
        expect(result2).toEqual(3);
    });
    
    test('12: Missing one or more input', () => {
        const result3 = get(null, 3, 1);
        expect(result3).toEqual(1);
    });
});