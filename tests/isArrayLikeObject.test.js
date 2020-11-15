import isArrayLikeObject from "../src/isArrayLikeObject.js";
import { argsFunction } from "./helper";
describe("isArrayLikeObject", () => {
  it("1: should return true when arrayLikeObject is given as parameter", () => {
    
    expect(isArrayLikeObject(["test", "test2"])).toBe(true);
    expect(isArrayLikeObject(argsFunction(1))).toBe(true);
    expect(isArrayLikeObject(document.body.children))
  });
  it("2: should return false when other than ArrayLikeObject", () => {
    // Test object
    expect(isArrayLikeObject({ test: 12 })).toBe(false);

    // Test symbol
    expect(isArrayLikeObject(Symbol("test"))).toBe(false);

    // Test function
    expect(isArrayLikeObject(() => "test")).toBe(false);

    // Test boolean
    expect(isArrayLikeObject(true)).toBe(false);
    expect(isArrayLikeObject(false)).toBe(false);

    // Test error
    expect(isArrayLikeObject(new Error())).toBe(false);

    //Test string
    expect(isArrayLikeObject("test")).toBe(false);

    //Test null and undefined
    expect(isArrayLikeObject(null)).toBe(false);
    expect(isArrayLikeObject(undefined)).toBe(false);
  });
});