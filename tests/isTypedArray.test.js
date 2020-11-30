import isTypedArray from "../src/isTypedArray.js";
import { argsFunction } from "./helper";

describe("isTypedArray", () => {
  it("1: should return true when buffer is given as parameter", () => {
    expect(isTypedArray(new Uint8Array())).toBe(true);
    expect(isTypedArray(new Uint16Array())).toBe(true);
    expect(isTypedArray(new Uint32Array())).toBe(true);

    expect(isTypedArray(new Int8Array())).toBe(true);
    expect(isTypedArray(new Int16Array())).toBe(true);
    expect(isTypedArray(new Int32Array())).toBe(true);

    expect(isTypedArray(new Float32Array())).toBe(true);
    expect(isTypedArray(new Float64Array())).toBe(true);

    expect(isTypedArray(Buffer.alloc(2))).toBe(true);
  });

  it("2: should return true for BigUint array", () => {
    expect(isTypedArray(new BigUint64Array())).toBe(true);
  });

  it("3: should return true for BigInt array", () => {
    expect(isTypedArray(new BigInt64Array())).toBe(true);
  });

  it("4: should return false when other than buffer", () => {
    // Test array
    expect(isTypedArray(["test", "test2"])).toBe(false);

    //Test arguments
    expect(isTypedArray(argsFunction(1))).toBe(false);

    //Test htmlCollection object
    expect(isTypedArray(document.body.children)).toBe(false);

    // Test object
    expect(isTypedArray({ test: 12 })).toBe(false);

    // Test function
    expect(isTypedArray(() => "test")).toBe(false);

    // Test error
    expect(isTypedArray(new Error())).toBe(false);

    //Test string
    expect(isTypedArray("test")).toBe(false);

    //Test null and undefined
    expect(isTypedArray(null)).toBe(false);
    expect(isTypedArray(undefined)).toBe(false);

    // Test boolean
    expect(isTypedArray(true)).toBe(false);
    expect(isTypedArray(false)).toBe(false);
    expect(isTypedArray(new Boolean())).toBe(false);
  });
});
