import toInteger from "../src/toInteger.js";

describe("toInteger", () => {
    it('1: should return floored decimal when decimal is given', () => {
        expect(toInteger(3.7)).toEqual(3)
        expect(toInteger(-3.7)).toEqual(-3)
    })
    it('2: should return 0 when when number.MIN_VALUE is given', () => {
        expect(toInteger(Number.MIN_VALUE)).toEqual(0)
        expect(toInteger(-Number.MIN_VALUE)).toEqual(0)
    })
    it('3: should return sameinteger when integer is given', () => {
        expect(5).toEqual(5)
        expect(-5).toEqual(-5)
    })
    it('4: should return toFinite max value when Infinity is given', () => {
        expect(toInteger(Infinity)).toEqual(1.7976931348623157e+308)
    })

    it('5: should return integer when string containing number is given', () => {
        expect(toInteger('3.7')).toEqual(3)
        expect(toInteger('-3.7')).toEqual(-3)
        expect(toInteger('5')).toEqual(5)
    })
});