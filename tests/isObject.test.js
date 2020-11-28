import isObject from "../src/isObject.js";
import { argsFunction } from "./helper";
describe("isObject", () => {
  it("1: should return true when object is given as parameter", () => {

    expect(isObject({ test: 12 })).toBe(true);
    expect(isObject(["test", "test2"])).toBe(true);
    expect(isObject(() => "test")).toBe(true);
    expect(isObject(argsFunction(1))).toBe(true);
    expect(isObject(new Boolean())).toBe(true);
    expect(isObject(Buffer.alloc(2))).toBe(true);
  });
  it("2: should return false when other than object", () => {

    // Test number
    expect(isObject(1)).toBe(false);

    // Test symbol
    expect(isObject(Symbol("test"))).toBe(false);

    //Test string
    expect(isObject("test")).toBe(false);

    // Test null and undefined
    expect(isObject(null)).toBe(false);
    expect(isObject(undefined)).toBe(false);

    // Test boolean
    expect(isObject(true)).toBe(false);
    expect(isObject(false)).toBe(false);
  });
});
