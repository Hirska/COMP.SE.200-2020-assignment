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

    test('1: Inputs value returns non empty [value]', () => {
        const result = castArray(1);
        expect(result).toEqual([1]);

        const result2 = castArray('hASSOMETHINGinmind');
        expect(result2).toEqual(['hASSOMETHINGinmind']);
        
        const result3 = castArray(someItemObject.name);
        expect(result3).toEqual(['some item']);
        
        const result4 = castArray(someItemObject.quantity);
        expect(result4).toEqual([739182465]);
        
        const result5 = castArray('¤()&#startingNameWithSpecialCharacters');
        expect(result5).toEqual(['¤()&#startingNameWithSpecialCharacters']);         
    });

    test('2: Inputs value returns empty array', () => {        
        const result = castArray();
        expect(result).toEqual([undefined]);

        const result2 = castArray(null);
        expect(result2).toEqual([null]);
        
        const result3 = castArray(undefined);
        expect(result3).toEqual([undefined]);

        const result4 = castArray(someItemObject.noneExistence);
        expect(result3).toEqual([undefined]);        
    });
    
    test('3: Input is object', () => {
        const result = castArray(someItemObject);
        expect(result).toEqual([someItemObject]);     
    });      
});