import isLength from "../src/isLength.js";
import { argsFunction } from "./helper";
describe("isLength", () => {
  it("1: should return true when length is given as parameter", () => {
    expect(isLength(0)).toBe(true);
    expect(isLength(1)).toBe(true);

  });
  it("2: should return false when other than length", () => {

    // Test non-length numerical values
    expect(isLength(-1)).toBe(false);
    expect(isLength(1.5)).toBe(false);

    // Test array
    expect(isLength(["test", "test2"])).toBe(false);

    //Test arguments
    expect(isLength(argsFunction(1))).toBe(false);

    // Test object
    expect(isLength({ test: 12 })).toBe(false);

    // Test symbol
    expect(isLength(Symbol("test"))).toBe(false);

    // Test function
    expect(isLength(() => "test")).toBe(false);

    // Test error
    expect(isLength(new Error())).toBe(false);

    //Test string
    expect(isLength("test")).toBe(false);
    expect(isLength("3")).toBe(false);

    // Test null and undefined
    expect(isLength(null)).toBe(false);
    expect(isLength(undefined)).toBe(false);

    // Test boolean
    expect(isLength(true)).toBe(false);
    expect(isLength(false)).toBe(false);
    expect(isLength(new Boolean())).toBe(false);

    // Test buffer
    expect(isLength(Buffer.alloc(2))).toBe(false);
  });
});