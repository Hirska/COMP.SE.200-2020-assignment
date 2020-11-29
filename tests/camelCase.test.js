import camelCase from '../src/camelCase.js'

describe('camelCase', () => {
    // This case means that both should be null for a default value? 
    // By design or an overlook

    test('1: Word seperated by space, 2 words', () => {
        const result = camelCase('Foo Bar');
        expect(result).toEqual('fooBar');
    });

    test('2: Word seperated by space, multiple words', () => {
        const result2 = camelCase('Foo Bar Get More Foo Bar');
        expect(result2).toEqual('fooBarGetMoreFooBar');
    });
    
    test('3: Word seperated by space, multiple words 2', () => {
        const result3 = camelCase('This Is Some User Name');
        expect(result3).toEqual('thisIsSomeUserName');
    });    

    test('4: Word seperated by -, 2 words', () => {
        const result = camelCase('Foo-Bar');
        expect(result).toEqual('fooBar');
    });

    test('5: Word seperated by -, multiple words', () => {
        const result2 = camelCase('Foo-Bar-Get-More-Foo-Bar');
        expect(result2).toEqual('fooBarGetMoreFooBar');
    });
    
    test('6: Word seperated by -, multiple words 2', () => {
        const result3 = camelCase('This-Is-Some-User-Name');
        expect(result3).toEqual('thisIsSomeUserName');       
    });    
    
    test('7: Word seperated by _, 2 words', () => {
        const result = camelCase('Foo_Bar');
        expect(result).toEqual('fooBar');
    });

    test('8: Word seperated by _, multiple words', () => {
        const result2 = camelCase('Foo_Bar_Get_More_Foo_Bar');
        expect(result2).toEqual('fooBarGetMoreFooBar');
    });
    
    test('9: Word seperated by _, multiple words 2', () => {
        const result3 = camelCase('This_Is_Some_User_Name');
        expect(result3).toEqual('thisIsSomeUserName');       
    });    
    
    test('10: Unicode or other special characters as input 1', () => {
        const result0 = camelCase('unicode user name ÖÄÖÄÖÄ');
        expect(result0).toEqual('unicodeUserNameÖäöäöä');
    });

    test('11: Unicode or other special characters as input 2', () => {
        const result1 = camelCase(' some #¤Name ');
        expect(result1).toEqual('some#¤Name');
    });     
    
    test('12: Unicode or other special characters as input 3', () => {
        const result2 = camelCase('unicode-user-name-ÖÄÖÄÖÄ');
        expect(result2).toEqual('unicodeUserNameÖäöäöä');
    });     
    
    test('13: Unicode or other special characters as input 4', () => {
        const result3 = camelCase('-some-#¤Name-');
        expect(result3).toEqual('some#¤Name');
    });     
    
    test('14: Unicode or other special characters as input 5', () => {
        const result4 = camelCase('unicode_user_name_ÖÄÖÄÖÄ');
        expect(result4).toEqual('unicodeUserNameÖäöäöä');
    });

    test('15: Unicode or other special characters as input 6', () => {
        const result5 = camelCase('_some_#¤Name_');
        expect(result5).toEqual('some#¤Name')        
    });         
});