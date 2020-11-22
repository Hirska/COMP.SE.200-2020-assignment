import add from '../src/add.js'

describe('1: Basic addition', () => {
    test('1: Addtion between integers', () => {
        const result = add(1,2)
        expect(result).toBe(3)
    });

    test('2: Addition between very large integers', () => {
        const result = add(1000000000000000,2000000000000000);
        expect(result).toBe(3000000000000000);
    });
    
    test('3: Addtion between floats', () => {
        const result = add(1.21354,27646.54)
        expect(result).toBe(27647.75354)
    });
    
    test('4: Addtion between signed numbers', () => {
        const result = add(-464911.546,15412.87451)
        expect(result).toBe(-449498.67149)
    });    
})

describe('1: Undefined values', () => {
    // This case means that both should be null for a default value? 
    // By design or an overlook
    test('1: Missing one params', () => {
        const result = add(1);
        expect(result).toBe(1);
    });

    test('2: Missing both params', () => {        
        const result = add();
        expect(result).toBe(0);
    });  
}) 