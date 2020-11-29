import toFinite from "../src/toFinite.js";

describe("toFinite", () => {
    it('1: should return MAX_INTEGER when infinity is given', () => {
        expect(toFinite(Infinity)).toEqual(1.7976931348623157e+308)
    })
    it('2: should return MIN_INTEGER when -infinity is given', () => {
        expect(toFinite(-Infinity)).toEqual(-1.7976931348623157e+308)
    })
    it('3: should return 0 when no value is given', () => {
        expect(toFinite()).toEqual(0)
        expect(toFinite(null)).toEqual(0)
        expect(toFinite(undefined)).toEqual(0)
    })
    it('4: should return number when number is given', () => {
        expect(toFinite(3.5)).toEqual(3.5)
    })
    it('5: should return min value if Number.MIN_VALUE is given', () => {
        expect(toFinite(Number.MIN_VALUE)).toEqual(5e-324)
    })
    it('6: should return 0 if 0 is given', () => {
        expect(toFinite(0)).toEqual(0)
    })

});