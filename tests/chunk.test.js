import chunk from '../src/chunk.js'

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

describe('chunk', () => {
    // This case means that both should be null for a default value? 
    // By design or an overlook

    test('1: Valid number and precision 1', () => {
        const result = chunk([1,2,3,4,5,6,7], 2);
        expect(result).toEqual([[1,2], [3,4], [5,6], [7]]);
    });

    test('2: Valid number and precision 2', () => {
        const result2 = chunk([1,2,3,4,5,6,7], 10);
        expect(result2).toEqual([[1,2,3,4,5,6,7]]);
    });
    
    test('3: Valid number and precision 3', () => {
        const result3 = chunk(someItemObject.ratings, 2);
        expect(result3).toEqual([[1,2], [3,4], [5]]);
    });
    
    test('4: Valid number and precision 4', () => {
        const result4 = chunk(someItemObject.attribs, 2);
        expect(result4).toEqual([
            [{'height': 15, 'width': 45, 'length': 97}, 12],
            ['no', false],
            [true]]);
    });    

    test('5: Chunk is negative or float 1', () => {        
        const result = chunk([1,2,3,4,5,6,7], -5);
        expect(result).toEqual([]);
    });

    test('6: Chunk is negative or float 2', () => {
        const result1 = chunk([1,2,3,4,5,6], 3.5);
        expect(result1).toEqual(null);
    });
    
    test('7: Chunk is negative or float 3', () => {        
        const result2 = chunk([1,2,3,4,5,6], 1.5);
        expect(result2).toEqual(null);
    });
    
    test('8: Chunk is negative or float 4', () => {        
        const result3 = chunk(someItemObject.ratings, -3.3);
        expect(result3).toEqual(NaN);
    });
    
    test('9: Chunk is negative or float 5', () => {        
        const result4 = chunk(someItemObject.attribs, -4);
        expect(result4).toEqual(null);        
    });    
    
    test('10: Missing one or more input 1', () => {
        const result = chunk(null, 2);
        expect(result).toEqual([]); 
    });

    test('11: Missing one or more input 2', () => {
        const result2 = chunk(undefined, 3);
        expect(result2).toEqual([]);
    });
    
    test('12: Missing one or more input 3', () => {
        const result3 = chunk(null, 3);
        expect(result3).toEqual([]);
    });
    
    test('13: Missing one or more input 4', () => {
        const result4 = chunk([1,2,3,4,5,6], null);
        expect(result4).toEqual([1,2,3,4,5,6]);
    });
    
    test('14: Missing one or more input 5', () => {
        const result5 = chunk([1,2,3,4,5,6], undefined);
        expect(result5).toEqual([1,2,3,4,5,6]);
    });
    
    test('15: Missing one or more input 6', () => {
        const result6 = chunk();
        expect(result6).toEqual([]);
    });
    
    test('16: Missing one or more input 7', () => {
        const result7 = chunk([1,2,3,4,5,6], NaN);
        expect(result7).toEqual([1,2,3,4,5,6]);        
    });    
});