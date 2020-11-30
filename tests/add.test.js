import add from '../src/add.js'

describe('Suite 1: Basic addition', () => {

    describe('Suite 1: Basic addition', () => {
        test('add 1: Addtion between integers', () => {
            const result = add(1,2)
            expect(result).toBe(3)
        });

        test('add 2: Addition between very large integers', () => {
            const result = add(1000000000000000,2000000000000000);
            expect(result).toBe(3000000000000000);
        });

});
    
    test('add 3: Addtion between floats', () => {
        const result = add(1.21354,27646.54)
        expect(result).toBe(27647.75354)
    });
    
    test('add 4: Addtion between signed numbers', () => {
        const result = add(-464911.546,15412.87451)
        expect(result).toBe(-449498.67149)
    });    
});

describe('Suite 2: Invalid inputs - objects and paths', () => {
    // This case means that both should be null for a default value? 
    // By design or an overlook
    test('add 5: Missing path', () => {
        const result = add(1);
        expect(result).toBe(1);
    });

    test('add 6: Path is null', () => {
        const result = add(1, null);
        expect(result).toBe(1);
    });

    test('add 7: Path is undefined', () => {
        const result = add(1, undefined);
        expect(result).toBe(1);
    });

    test('add 8: Path is NaN', () => {
        const result = add(1, NaN);
        expect(result).toBe(NaN);
    });

    test('add 9: Object is null, path is empty', () => {        
        const result = add(null);
        expect(result).toBe(0);
    });

    test('add 10: Object is null, path is undefined', () => {
        const result = add(null, undefined);
        expect(result).toBe(0);
    });    

    test('add 11: Missing both params', () => {        
        const result = add();
        expect(result).toBe(0);
    });    
});