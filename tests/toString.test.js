import toString from "../src/toString.js";

describe("toString", () => {
  it("1: should return empty string when null or undefined is given  given", () => {
    expect(toString(null)).toEqual('');
    expect(toString(undefined)).toEqual('');
  });
  it("2: should return -0 if -0 is given", () => {
    expect(toString(-0)).toEqual('-0');
  });
  it("3: should return values of an array if an array is given", () => {
    expect(toString([1,2,3])).toEqual('1,2,3');
  });
  it("4: should return null value as empty string if array with null/undefined values is given", () => {
    expect(toString([1,null,3])).toEqual('1,,3');
  });
  it("5: should return symbol as a string if symbol is given",() => {
    expect(toString(Symbol('test'))).toEqual('Symbol(test)');
  });
  it("6: should return original string if string is given",() => {
    expect(toString('test')).toEqual('test');
  });

});
