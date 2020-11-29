import castArray from '../src/castArray.js'

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

describe('castArray', () => {
    // This case means that both should be null for a default value? 
    // By design or an overlook

    test('1: Inputs value returns non empty [value], number', () => {
        const result = castArray(1);
        expect(result).toEqual([1]);
    });

    test('2: Inputs value returns non empty [value], string', () => {
        const result2 = castArray('hASSOMETHINGinmind');
        expect(result2).toEqual(['hASSOMETHINGinmind']);
    });
    
    test('3: Inputs value returns non empty [value], object attribute', () => {
        const result3 = castArray(someItemObject.name);
        expect(result3).toEqual(['some item']);
    });
    
    test('4: Inputs value returns non empty [value], object attribute 2', () => {
        const result4 = castArray(someItemObject.quantity);
        expect(result4).toEqual([739182465]);
    });
    
    test('5: Inputs value returns non empty [value], wild card string', () => {
        const result5 = castArray('¤()&#startingNameWithSpecialCharacters');
        expect(result5).toEqual(['¤()&#startingNameWithSpecialCharacters']);         
    });    

    test('6: Inputs value returns array with no input', () => {        
        const result = castArray();
        expect(result).toEqual([undefined]);
    });

    test('7: Inputs value returns array with null input', () => {        
        const result2 = castArray(null);
        expect(result2).toEqual([null]);
    });
    
    test('8: Inputs value returns array with NaN input', () => {        
        const result2 = castArray(NaN);
        expect(result2).toEqual([NaN]);
    });
    
    test('9: Inputs value returns array with undefined input', () => {        
        const result4 = castArray(someItemObject.noneExistence);
        expect(result4).toEqual([undefined]);        
    });    
    
    test('10: Input is object', () => {
        const result = castArray(someItemObject);
        expect(result).toEqual([someItemObject]);     
    }); 
});