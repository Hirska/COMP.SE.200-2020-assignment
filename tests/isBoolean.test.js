import isBoolean from "../src/isBoolean.js";
import { argsFunction } from "./helper";
describe("isBoolean", () => {
  it("1: should return true when Boolean is given as parameter", () => {
    // Test boolean
    expect(isBoolean(true)).toBe(true);
    expect(isBoolean(false)).toBe(true);
    expect(isBoolean(new Boolean())).toBe(true)
  });
  it("2: should return false when other than boolean", () => {
    // Test array
    expect(isBoolean(["test", "test2"])).toBe(false);

    //Test arguments
    expect(isBoolean(argsFunction(1))).toBe(false);

    //Test htmlCollection object
    expect(isBoolean(document.body.children)).toBe(false);

    // Test object
    expect(isBoolean({ test: 12 })).toBe(false);

    // Test symbol
    expect(isBoolean(Symbol("test"))).toBe(false);

    // Test function
    expect(isBoolean(() => "test")).toBe(false);

    // Test error
    expect(isBoolean(new Error())).toBe(false);

    //Test string
    expect(isBoolean("test")).toBe(false);

    //Test null and undefined
    expect(isBoolean(null)).toBe(false);
    expect(isBoolean(undefined)).toBe(false);
  });
});
