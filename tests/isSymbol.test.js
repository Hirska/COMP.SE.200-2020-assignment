import isSymbol from "../src/isSymbol.js";
import { argsFunction } from "./helper";
describe("isSymbol", () => {
  it("1: should return true when buffer is given as parameter", () => {
    // Test symbol
    expect(isSymbol(Symbol("test"))).toBe(true);
    expect(isSymbol(Symbol())).toBe(true);
    expect(isSymbol(Symbol.iterator)).toBe(true);
  });
  it("2: should return false when other than buffer", () => {
    // Test array
    expect(isSymbol(["test", "test2"])).toBe(false);

    //Test arguments
    expect(isSymbol(argsFunction(1))).toBe(false);

    //Test htmlCollection object
    expect(isSymbol(document.body.children)).toBe(false);

    // Test object
    expect(isSymbol({ test: 12 })).toBe(false);

    // Test function
    expect(isSymbol(() => "test")).toBe(false);

    // Test error
    expect(isSymbol(new Error())).toBe(false);

    //Test string
    expect(isSymbol("test")).toBe(false);

    //Test null and undefined
    expect(isSymbol(null)).toBe(false);
    expect(isSymbol(undefined)).toBe(false);

    // Test boolean
    expect(isSymbol(true)).toBe(false);
    expect(isSymbol(false)).toBe(false);
    expect(isSymbol(new Boolean())).toBe(false);

    // Test Buffer
    expect(isSymbol(Buffer.alloc(2))).toBe(false);
  });
});
