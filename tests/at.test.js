import at from '../src/at.js'

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

const someRandomPaths = {
    'get_name'           : 'name',
    'get_quantity'       : 'quantity',
    'get_attribs'        : 'attribs',
    'get_ratings'        : 'ratings',
    'get_height'         : 'attribs[0].height',
    'get_width'          : 'attribs[0].width',
    'get_length'         : 'attribs[0].length',
    'get_is_metal'       : 'attribs[1]',
    'get_is_plastic'     : 'attribs[2]',
    'get_is_glass'       : 'attribs[3]',
    'get_ratings_5_stars': 'ratings.5',  
    'get_ratings_4_stars': 'ratings.4',  
    'get_ratings_3_stars': 'ratings.3',  
    'get_ratings_2_stars': 'ratings.2',  
    'get_ratings_1_stars': 'ratings.1',  
}


describe('Suite 1: Basic functionality, proper object and paths', () => {
    test('at 1: get object attribute - name', () => {
        const result = at(someItemObject, someRandomPaths.get_name)
        expect(result).toEqual(['some item']);
    });

    test('at 2: get object attribute - quanlity', () => {
        const result2 = at(someItemObject, someRandomPaths.get_quantity)
        expect(result2).toEqual([739182465]);
    });

    test('at 3: get object attribute - attribs', () => {
        const result3 = at(someItemObject, someRandomPaths.get_attribs)
        expect(result3).toEqual([[
            {'height': 15, 'width': 45, 'length': 97},
            12,
            'no',
            false,
            true
        ]]);
    });

    test('at 4: get object attribute - ratings', () => {
        const result4 = at(someItemObject, someRandomPaths.get_ratings)
        expect(result4).toEqual([{
            '5': 15,
            '4': 10,
            '3': 6,
            '2': 3,
            '1': 8
        }]);
    });

    test('at 5: get object attribute - height', () => {
        const result = at(someItemObject, someRandomPaths.get_height);
        expect(result).toEqual([15]);
    });

    test('at 6: get object attribute - sizes', () => {
        const result2 = at(someItemObject, [
            someRandomPaths.get_height,
            someRandomPaths.get_width,
            someRandomPaths.get_length]);
        expect(result2).toEqual([15, 45, 97]);
    });

    test('at 7: get object attribute - ratings', () => {
        const result3 = at(someItemObject, [
            someRandomPaths.get_ratings_5_stars,
            someRandomPaths.get_ratings_4_stars,
            someRandomPaths.get_ratings_3_stars,
            someRandomPaths.get_ratings_2_stars,
            someRandomPaths.get_ratings_1_stars]);
        expect(result3).toEqual([15, 10, 6, 3, 8]);        
    });     
   
});

describe('Suite 2: Invalid inputs - paths and objects', () => {
    // This case means that both should be null for a default value? 
    // By design or an overlook
    test('at 8: Paths are not found', () => {
        const result = at(someItemObject, ['some invalid path', 'another invalid stuff']);
        expect(result).toEqual([undefined, undefined]);
    });

    test('at 9: Path is null', () => {
        const result = at(someItemObject, null);
        expect(result).toEqual([undefined]);
    }); 
    
    test('at 10: Path is not passed', () => {
        const result = at(someItemObject);
        expect(result).toEqual([]);
    });     

    // This case means that both should be null for a default value? 
    // By design or an overlook

    test('at 11: Object is null', () => {
        const result = at(null, someRandomPaths.get_height);
        expect(result).toEqual([undefined]);
    }); 
    
    test('at 12: Path is not passed', () => {
        const result = at();
        expect(result).toEqual([]);
    });
});