import isEmpty from "../src/isEmpty.js";

import { argsFunction } from "./helper";
describe("isEmpty", () => {
  it("1: should return true when empty value is given as parameter", () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
    expect(isEmpty([])).toBe(true);
    expect(isEmpty({})).toBe(true);
    expect(isEmpty(Buffer.alloc(0))).toBe(true);
    expect(isEmpty(true)).toBe(true);
    expect(isEmpty(false)).toBe(true);
    expect(isEmpty(argsFunction())).toBe(true);
    expect(isEmpty(new Map())).toBe(true);
  });
  it("2: should return false when other than empty", () => {
    // Test array
    expect(isEmpty(["test", "test2"])).toBe(false);

    //Test arguments
    expect(isEmpty(argsFunction(1))).toBe(false);

    // Test object
    expect(isEmpty({ test: 12 })).toBe(false);

    //Test string
    expect(isEmpty("test")).toBe(false);

    // Test buffer
    expect(isEmpty(Buffer.alloc(2))).toBe(false);
  });
});
