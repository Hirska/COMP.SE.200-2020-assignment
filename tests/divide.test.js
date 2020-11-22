import divide from '../src/divide.js'


describe('CamelCase', () => {
    test('1: divide returns correct answer', () => {
        const result = divide(1,2)
        expect(result).toBe(1/2)

        result = divide(6,4)
        expect(result).toBe(6/4)
        
        result = divide(9,3)
        expect(result).toBe(3)        
    })
}) 
