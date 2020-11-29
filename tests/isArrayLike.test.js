import isArrayLike from "../src/isArrayLike.js";
import { argsFunction } from "./helper";
describe("isArrayLike", () => {
  it("1: should return true when arrayLike is given as parameter", () => {
    expect(isArrayLike("test")).toBe(true);
    expect(isArrayLike(["test", "test2"])).toBe(true);
    expect(isArrayLike(argsFunction(1))).toBe(true);
  });
  it("2: should return false when other than arraylike", () => {
    // Test object
    expect(isArrayLike({ test: 12 })).toBe(false);

    // Test symbol
    expect(isArrayLike(Symbol("test"))).toBe(false);

    // Test function
    expect(isArrayLike(() => "test")).toBe(false);

    // Test boolean
    expect(isArrayLike(true)).toBe(false);
    expect(isArrayLike(false)).toBe(false);

    // Test error
    expect(isArrayLike(new Error())).toBe(false);

    //Test null and undefined
    expect(isArrayLike(null)).toBe(false);
    expect(isArrayLike(undefined)).toBe(false);
  });
});
