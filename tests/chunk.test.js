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

    test('1: Valid number and precision', () => {
        const result = chunk([1,2,3,4,5,6,7], 2);
        expect(result).toEqual([[1,2], [3,4], [5,6], [7]]);

        const result2 = chunk([1,2,3,4,5,6,7], 10);
        expect(result2).toEqual([[1,2,3,4,5,6,7]]);
        
        const result3 = chunk(someItemObject.ratings, 2);
        expect(result3).toEqual([[1,2], [3,4], [5]]);
        
        const result4 = chunk(someItemObject.attribs, 2);
        expect(result4).toEqual([
            [{'height': 15, 'width': 45, 'length': 97}, 12],
            ['no', false],
            [true]]);        

    });

    test('2: Chunk is negative or float', () => {        
        const result = chunk([1,2,3,4,5,6,7], -5);
        expect(result).toEqual([]);

        const result2 = chunk([1,2,3,4,5,6], 1.5);
        expect(result2).toEqual(null);
        
        const result3 = chunk(someItemObject.ratings, -3.3);
        expect(result3).toEqual(NaN);

        const result4 = chunk(someItemObject.attribs, -4);
        expect(result4).toEqual(null);        
    });
    
    test('3: Missing one or more input', () => {
        const result = chunk(null, 2);
        expect(result).toEqual([]); 

        const result2 = chunk(undefined, 3);
        expect(result2).toEqual([]);
        
        const result3 = chunk(null, 3);
        expect(result3).toEqual([]);
        
        const result4 = chunk([1,2,3,4,5,6], null);
        expect(result4).toEqual([1,2,3,4,5,6]);
        
        const result5 = chunk([1,2,3,4,5,6], undefined);
        expect(result5).toEqual([1,2,3,4,5,6]);
        
        const result6 = chunk();
        expect(result6).toEqual([]);
        
        const result7 = chunk([1,2,3,4,5,6], NaN);
        expect(result7).toEqual([1,2,3,4,5,6]);        
    });      
});