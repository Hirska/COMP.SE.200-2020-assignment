import toNumber from "../src/toNumber.js";

describe("toNumber", () => {
  it("1: should return converted number when binary string is given", () => {
    expect(toNumber("0b010100001")).toEqual(161);
  });

  it("2: should return converted number when octal string is given", () => {
    expect(toNumber("0o10")).toEqual(8);
  });

  it("3: should return value when hexadecimal is given", () => {
    expect(toNumber("0x10")).toEqual(16);
  });

  it("4: should return number when number is given", () => {
    expect(toNumber(5)).toEqual(5);
  });

  it("5: should return decimal when decimal number is given", () => {
    expect(toNumber(1.1)).toEqual(1.1);
  });

  it("6: should return negative decimal when negative decimal is given", () => {
    expect(toNumber(-1.1)).toEqual(-1.1);
  });

  it("7: should return number when number string is given", () => {
    expect(toNumber("5")).toEqual(5);
  });

  it("8: should return number when array with number is given", () => {
    expect(toNumber([1])).toEqual(1);
  });

  it("9: should return NaN for non-number values", () => {
    expect(toNumber(Symbol("test"))).toEqual(NaN);
    expect(toNumber({ a: "test" })).toEqual(NaN);
    expect(toNumber(undefined)).toEqual(NaN);
    expect(toNumber('test')).toEqual(NaN)
    expect(toNumber(() => [1])).toEqual(NaN);
  });

  it("10: should return NaN when valueOf is not function set to object", () => {
    function MyObject(n) {
      this.number = n;
    }
    MyObject.prototype.valueOf = 1;
    const object = new MyObject(1);
    expect(toNumber(object)).toEqual(NaN);
  });
  it("11: should return NaN when bad hexadecimal is given", () => {
    expect(toNumber("-0x10")).toEqual(NaN);
  });
  it('12: should return 1/0 when boolean is given as parameter', () => {
    expect(toNumber(true)).toEqual(1);
    expect(toNumber(false)).toEqual(0);
  })
});
