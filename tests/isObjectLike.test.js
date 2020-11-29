import isObjectLike from "../src/isObjectLike.js";
import { argsFunction } from "./helper";
describe("isObjectLike", () => {
  it("1: should return true when object is given as parameter", () => {

    expect(isObjectLike({ test: 12 })).toBe(true);
    expect(isObjectLike(["test", "test2"])).toBe(true);
    expect(isObjectLike(argsFunction(1))).toBe(true);
    expect(isObjectLike(new Boolean())).toBe(true);
    expect(isObjectLike(Buffer.alloc(2))).toBe(true);
  });
  it("2: should return false when other than object", () => {
    // Test function
    expect(isObjectLike(() => "test")).toBe(false);

    // Test number
    expect(isObjectLike(1)).toBe(false);

    // Test symbol
    expect(isObjectLike(Symbol("test"))).toBe(false);

    //Test string
    expect(isObjectLike("test")).toBe(false);

    // Test undefined
    expect(isObjectLike(null)).toBe(false);

    // Test null
    expect(isObjectLike(undefined)).toBe(false);

    // Test boolean
    expect(isObjectLike(true)).toBe(false);
    expect(isObjectLike(false)).toBe(false);
  });
});
