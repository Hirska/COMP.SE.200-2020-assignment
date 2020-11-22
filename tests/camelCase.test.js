import camelCase from '../src/camelCase.js'

describe('camelCase', () => {
    // This case means that both should be null for a default value? 
    // By design or an overlook

    test('1: Word seperated by space', () => {
        const result = camelCase('Foo Bar');
        expect(result).toEqual('fooBar');

        const result2 = camelCase('Foo Bar Get More Foo Bar');
        expect(result2).toEqual('fooBarGetMoreFooBar');

        const result3 = camelCase('This Is Some User Name');
        expect(result3).toEqual('thisIsSomeUserName');
    });

    test('2: Word seperated by -', () => {
        const result = camelCase('Foo-Bar');
        expect(result).toEqual('fooBar');

        const result2 = camelCase('Foo-Bar-Get-More-Foo-Bar');
        expect(result2).toEqual('fooBarGetMoreFooBar');

        const result3 = camelCase('This-Is-Some-User-Name');
        expect(result3).toEqual('thisIsSomeUserName');       
    });
    
    test('3: Word seperated by _', () => {
        const result = camelCase('Foo_Bar');
        expect(result).toEqual('fooBar');

        const result2 = camelCase('Foo_Bar_Get_More_Foo_Bar');
        expect(result2).toEqual('fooBarGetMoreFooBar');

        const result3 = camelCase('This_Is_Some_User_Name');
        expect(result3).toEqual('thisIsSomeUserName');       
    });
    
    test('4: Unicode or other special characters as input', () => {
        const result0 = camelCase('unicode user name ÖÄÖÄÖÄ');
        expect(result0).toEqual('unicodeUserNameÖäöäöä');
        
        const result1 = camelCase(' some #¤Name ');
        expect(result1).toEqual('some#¤Name');
        
        const result2 = camelCase('unicode-user-name-ÖÄÖÄÖÄ');
        expect(result2).toEqual('unicodeUserNameÖäöäöä');
        
        const result3 = camelCase('-some-#¤Name-');
        expect(result3).toEqual('some#¤Name') 
        
        const result4 = camelCase('unicode_user_name_ÖÄÖÄÖÄ');
        expect(result4).toEqual('unicodeUserNameÖäöäöä');
        
        const result5 = camelCase('_some_#¤Name_');
        expect(result5).toEqual('some#¤Name')        
    });     
});