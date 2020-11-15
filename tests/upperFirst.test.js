import upperFirst from '../src/upperFirst.js'

describe('upperFirst', () => {
    it('should stay same if all caps is given', () => {
        const result = upperFirst('TEST')
        expect(result).toBe('TEST')
    })
    it('should uppercase first if lowercase is given', () => {
        const result = upperFirst('tEST')
        expect(result).toBe('TEST')
    })
    it('should not do anything if first is not char', () => {
        const result = upperFirst('7EST')
        expect(result).toBe('7EST')
    })
})