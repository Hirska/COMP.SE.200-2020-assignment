import capitalize from '../src/capitalize.js'

describe('capitalize', () => {
    // This case means that both should be null for a default value? 
    // By design or an overlook

    test('1: Proper string, 2 words', () => {
        const result = capitalize('Foo bar');
        expect(result).toEqual('Foo bar');
    });

    test('2: Proper string, one word with random capitalized letters', () => {
        const result2 = capitalize('hASSOMETHINGinmind');
        expect(result2).toEqual('Hassomethinginmind');
    });
    
    test('3: Proper string, 2 words with -', () => {
        const result3 = capitalize('Foo-Bar');
        expect(result3).toEqual('Foo-bar');
    });
    
    test('4: Proper string, a phrase seperated by _', () => {
        const result4 = capitalize('This_Is_Some_User_Name');
        expect(result4).toEqual('This_is_some_user_name');        
    });    

    test('5: String with unicode characters', () => {
        const result = capitalize('unicode-user-name-ÖÄÖÄÖÄ');
        expect(result).toEqual('Unicode-user-name-öäöäöä');
    });

    test('6: String with unicode characters 2', () => {
        const result2 = capitalize('tRẦn loNg cHâu');
        expect(result2).toEqual('Trần long châu');
    });
    
    test('7: String with unicode characters 3', () => {
        const result3 = capitalize('五！ = 一百二十');
        expect(result3).toEqual('五！ = 一百二十');
    });    
    
    test('8: String with special characters and numbers', () => {
        const result = capitalize('¤()&#startingNameWithSpecialCharacters');
        expect(result).toEqual('¤()&#startingnamewithspecialcharacters'); 
    });

    test('9: String with special characters and numbers 2', () => {
        const result5 = capitalize('_some_#¤Name_1997');
        expect(result5).toEqual('_some_#¤name_1997');       
    });    
});