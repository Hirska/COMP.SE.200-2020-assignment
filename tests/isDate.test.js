import isDate from "../src/isDate.js";
import { argsFunction } from "./helper";
describe("isDate", () => {
  it("1: should return true when date is given as parameter", () => {
    expect(isDate(new Date())).toBe(true);
  });
  it("2: should return false when other than date", () => {
    // Test array
    expect(isDate(["test", "test2"])).toBe(false);

    //Test arguments
    expect(isDate(argsFunction(1))).toBe(false);

    //Test htmlCollection object
    expect(isDate(document.body.children)).toBe(false);

    // Test object
    expect(isDate({ test: 12 })).toBe(false);

    // Test symbol
    expect(isDate(Symbol("test"))).toBe(false);

    // Test function
    expect(isDate(() => "test")).toBe(false);

    // Test error
    expect(isDate(new Error())).toBe(false);

    //Test string
    expect(isDate("test")).toBe(false);
    expect(isDate(new Date().toDateString())).toBe(false);

    // Test null and undefined
    expect(isDate(null)).toBe(false);
    expect(isDate(undefined)).toBe(false);

    // Test boolean
    expect(isDate(true)).toBe(false);
    expect(isDate(false)).toBe(false);
    expect(isDate(new Boolean())).toBe(false);

    // Test buffer
    expect(isDate(Buffer.alloc(2))).toBe(false);
  });
});
