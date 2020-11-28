import isBuffer from "../src/isBuffer.js";
import { argsFunction } from "./helper";
describe("isBuffer", () => {
  it("1: should return true when buffer is given as parameter", () => {
    expect(isBuffer(Buffer.alloc(2))).toBe(true);
  });
  it("2: should return true when unsafely allocated buffer is given as parameter", () => {
    expect(isBuffer(Buffer.allocUnsafe(2))).toBe(true);
  });

  it("3: should return true when buffer from array is given as parameter", () => {
    expect(isBuffer(Buffer.from([1,2,3]))).toBe(true);
  });

  it("4: should return false when uint8array is given", () => {
    expect(isBuffer(Uint8Array.from('12345'))).toBe(false);
  });

  it("4: should return false when other than buffer", () => {
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
