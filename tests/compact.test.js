import compact from '../src/compact.js'

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

describe('compact', () => {
    // This case means that both should be null for a default value? 
    // By design or an overlook

    test('1: Array containing number, string and falsely values', () => {
        const result = compact([2,4]);
        expect(result).toEqual([2,4]);

        const result1 = compact([0]);
        expect(result1).toEqual([0]);

        const result2 = compact([4.23582176, 3, false, true, 1, 0, 15]);
        expect(result2).toEqual([4.23582176, 3, true, 1, 15]);
        
        const result3 = compact([-4.94578215134, 6, 0, 0, 1, false, "", 2020]);
        expect(result3).toEqual([-4.94578215134, 6, 1, 2020]);
        
        const result4 = compact([5.234*732.12, "", 1, 0, 1, 7]);
        expect(result4).toEqual([5.234*732.12, 1, 1, 7]);
    });

    test('2: Array containing objects and falsely values', () => {        
        const result = compact([someItemObject.ratings, 0, false, "", 1]);
        expect(result).toEqual([someItemObject.ratings, 1]);    
    });
    
    test('3: Missing one or more input', () => {
        const result = () => {
            const result = compact(null);
            return result;
        };
        expect(result).toEqual(NaN); 

        expect(compact).toThrow(TypeError);        
    });      
});