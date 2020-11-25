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
    });

    test('2: Inputs value returns non empty [value]', () => {
        const result2 = castArray('hASSOMETHINGinmind');
        expect(result2).toEqual(['hASSOMETHINGinmind']);
    });
    
    test('3: Inputs value returns non empty [value]', () => {
        const result3 = castArray(someItemObject.name);
        expect(result3).toEqual(['some item']);
    });
    
    test('4: Inputs value returns non empty [value]', () => {
        const result4 = castArray(someItemObject.quantity);
        expect(result4).toEqual([739182465]);
    });
    
    test('5: Inputs value returns non empty [value]', () => {
        const result5 = castArray('¤()&#startingNameWithSpecialCharacters');
        expect(result5).toEqual(['¤()&#startingNameWithSpecialCharacters']);         
    });    

    test('6: Inputs value returns empty array', () => {        
        const result = castArray();
        expect(result).toEqual([undefined]);
    });

    test('7: Inputs value returns empty array', () => {        
        const result2 = castArray(null);
        expect(result2).toEqual([null]);
    });
    
    test('8: Inputs value returns empty array', () => {        
        const result2 = castArray(null);
        expect(result2).toEqual([null]);
    });
    
    test('9: Inputs value returns empty array', () => {        
        const result4 = castArray(someItemObject.noneExistence);
        expect(result3).toEqual([undefined]);        
    });    
    
    test('10: Input is object', () => {
        const result = castArray(someItemObject);
        expect(result).toEqual([someItemObject]);     
    }); 
});