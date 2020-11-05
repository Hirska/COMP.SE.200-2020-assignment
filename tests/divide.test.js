import divide from '../src/divide.js'


describe('CamelCase', () => {
    test('1: divide returns correct answer', () => {
        const result = divide(1,2)
        expect(result).toBe(1/2)
    })
}) 
