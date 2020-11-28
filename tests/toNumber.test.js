import toNumber from "../src/toNumber.js";

describe("toNumber", () => {
  it("1: should return converted number when binary string is given", () => {
    expect(toNumber("0b010100001")).toEqual(161);
  });

  it("2: should return converted number when octal string is given", () => {
    expect(toNumber("0o10")).toEqual(8);
  });

  it('3: should return NaN when bad hexadecimal is given', () => {
    expect(toNumber("0x10")).toEqual(16);
  })

  it("4: should return number when number is given", () => {
    expect(toNumber(5)).toEqual(5);
  });

  it("5: should return number when number string is given", () => {
    expect(toNumber("5")).toEqual(5);
  });

  it("6: should return number when array with number is given", () => {
    expect(toNumber([1])).toEqual(1);
  });

  it("7: should return NaN for non-number values", () => {
    expect(toNumber(Symbol("test"))).toEqual(NaN);
    expect(toNumber({ a: "test" })).toEqual(NaN);
    expect(toNumber(undefined)).toEqual(NaN);

    expect(toNumber(() => [1])).toEqual(NaN);
  });

  it('8: should return NaN when valueOf is not function set to object', () => {
    function MyObject(n) {
        this.number = n;
    }
    MyObject.prototype.valueOf = 1
    const object = new MyObject(1)
    expect(toNumber(object)).toEqual(NaN)
  })
  it('9: should return NaN when bad hexadecimal is given', () => {
    expect(toNumber("-0x10")).toEqual(NaN);
  })

});
