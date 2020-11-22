import capitalize from '../src/capitalize.js'

describe('capitalize', () => {
    // This case means that both should be null for a default value? 
    // By design or an overlook

    test('1: Proper string', () => {
        const result = capitalize('Foo bar');
        expect(result).toEqual('Foo bar');

        const result2 = capitalize('hASSOMETHINGinmind');
        expect(result2).toEqual('Hassomethinginmind');
        
        const result3 = capitalize('Foo-Bar');
        expect(result3).toEqual('Foo-bar');
        
        const result4 = capitalize('This_Is_Some_User_Name');
        expect(result4).toEqual('This_is_some_user_name');        

    });

    test('2: String with unicode characters', () => {        
        const result = capitalize('unicode-user-name-ÖÄÖÄÖÄ');
        expect(result).toEqual('Unicode-user-name-öäöäöä');

        const result2 = capitalize('tRẦn loNg cHâu');
        expect(result2).toEqual('Trần long châu');
        
        const result3 = capitalize('五！ = 一百二十');
        expect(result3).toEqual('五！ = 一百二十');
    });
    
    test('3: String with special characters and numbers', () => {
        const result = capitalize('¤()&#startingNameWithSpecialCharacters');
        expect(result).toEqual('¤()&#startingnamewithspecialcharacters'); 

        const result5 = capitalize('_some_#¤Name_1997');
        expect(result5).toEqual('_some_#¤name_1997');       
    });      
});