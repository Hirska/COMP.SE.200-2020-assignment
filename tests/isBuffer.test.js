import isBuffer from "../src/isBuffer.js";
import { argsFunction } from "./helper";
describe("isBuffer", () => {
  it("1: should return true when buffer is given as parameter", () => {
    expect(isBuffer(new Buffer(2))).toBe(true);
  });
  it("2: should return false when other than buffer", () => {
    // Test array
    expect(isBuffer(["test", "test2"])).toBe(false);

    //Test arguments
    expect(isBuffer(argsFunction(1))).toBe(false);

    //Test htmlCollection object
    expect(isBuffer(document.body.children)).toBe(false);

    // Test object
    expect(isBuffer({ test: 12 })).toBe(false);

    // Test symbol
    expect(isBuffer(Symbol("test"))).toBe(false);

    // Test function
    expect(isBuffer(() => "test")).toBe(false);

    // Test error
    expect(isBuffer(new Error())).toBe(false);

    //Test string
    expect(isBuffer("test")).toBe(false);

    //Test null and undefined
    expect(isBuffer(null)).toBe(false);
    expect(isBuffer(undefined)).toBe(false);

    // Test boolean
    expect(isBuffer(true)).toBe(false);
    expect(isBuffer(false)).toBe(false);
    expect(isBuffer(new Boolean())).toBe(false);
  });
});
