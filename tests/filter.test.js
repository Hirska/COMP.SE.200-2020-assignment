import filter from '../src/filter.js'

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

describe('filter', () => {
    // This case means that both should be null for a default value? 
    // By design or an overlook

    test('1: Valid string, target and position filter', () => {
        const users = [
            { 'user': 'barney', 'active': true },
            { 'user': 'fred',   'active': false }
        ];
        const result = filter(users, ({ active }) => active);
        expect(result).toEqual([{"active": true, "user": "barney"}]);
    });

    test('2: Valid string, target and position filter', () => {
        const result2 = filter(itemObjectsList, ({attribs}) => attribs[3]);
        expect(result2).toEqual([someItemObject3]);
    });
    
    test('3: Valid string, target and position filter', () => {
        const result3 = filter(itemObjectsList, ({attribs}) => attribs[4]);
        expect(result3).toEqual([someItemObject, someItemObject3]);
    });
    
    test('4: Valid string, target and position filter', () => {
        const result4 = filter(itemObjectsList, ({ratings}) => ratings['5'] > 100);
        expect(result4).toEqual([someItemObject3]);
    });

    test('5: Exist null, NaN or undefined', () => {
        const result = filter(null, ({ active }) => active);
        expect(result).toEqual([[]]);
    });

    test('6: Exist null, NaN or undefined', () => {
        const result2 = filter(undefined, ({ active }) => active);
        expect(result2).toEqual([[]]);
    });
    
    test('7: Exist null, NaN or undefined', () => {
        const result3 = filter(NaN, 3);
        expect(result3).toEqual([[]]);
    });
    
    test('8: Exist null, NaN or undefined', () => {
        const result4 = filter(itemObjectsList, ({ratings}) => ratings['500'] > 100);
        expect(result4).toEqual([[]]);
    });
    
    test('9: Exist null, NaN or undefined', () => {
        const result5 = filter(itemObjectsList, undefined);
        expect(result5).toEqual([[]]);
    });
    
    test('10: Missing one or more input', () => {
        const result = filter(itemObjectsList, null);
        expect(result).toEqual([[]]); 
    });

    test('11: Missing one or more input', () => {
        const result2 = filter(itemObjectsList, NaN);
        expect(result2).toEqual([[]]);
    });
    
    test('12: Missing one or more input', () => {
        const result3 = filter(itemObjectsList);
        expect(result3).toEqual([[]]);
    });
});