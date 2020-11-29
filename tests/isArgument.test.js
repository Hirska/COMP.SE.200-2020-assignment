import isArguments from "../src/isArguments.js";
import { argsFunction } from "./helper";
describe("isArgument", () => {
  it("1: should return true when argument is given as parameter", () => {
    const result = isArguments(argsFunction(1));
    expect(result).toBe(true);
  });
  it("2: should return false when other than argument", () => {
    // Test object
    expect(isArguments({ test: 12 })).toBe(false);

    // Test array
    expect(isArguments(["a", "b"])).toBe(false);

    // Test symbol
    expect(isArguments(Symbol("test"))).toBe(false);

    // Test function
    expect(isArguments(() => "test")).toBe(false);

    // Test string
    expect(isArguments("test")).toBe(false);

    // Test boolean
    expect(isArguments(true)).toBe(false);
    expect(isArguments(false)).toBe(false);

    // Test error
    expect(isArguments(new Error())).toBe(false);

    //Test null and undefined
    expect(isArguments(null)).toBe(false);
    expect(isArguments(undefined)).toBe(false);
  });
});
