import upperFirst from '../src/upperFirst.js'

describe('upperFirst', () => {
    it('1: should stay same if all caps is given', () => {
        const result = upperFirst('TEST')
        expect(result).toBe('TEST')
    })
    it('2: should uppercase first if lowercase is given', () => {
        const result = upperFirst('tEST')
        expect(result).toBe('TEST')
    })

    it('3: should uppercase first if all lowercase is given', () => {
        const result = upperFirst('test')
        expect(result).toBe('Test')
    })
    it('4: should not do anything if first is not char', () => {
        const result = upperFirst('7EST')
        expect(result).toBe('7EST')
    })
})