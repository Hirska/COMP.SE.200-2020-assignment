import keys from "../src/keys.js";

describe("keys", () => {
  it("1: should return index when string is given", () => {
    expect(keys("test")).toEqual(["0", "1", "2", "3"]);
  });
  it("2: should return array with index numbers for array with values", () => {
    expect(keys([1, 2])).toEqual(["0", "1"]);
  });
  it("3: should return keys of given object", () => {
    expect(keys({ a: 1, b: 2, c: 3 })).toEqual(["a", "b", "c"]);
  });
  it("4: should return empty array for number", () => {
    expect(keys(1)).toEqual([]);
  });
  it("5: should return empty array for null", () => {
    expect(keys(null)).toEqual([]);
  });
  it("6: should return empty array for undefined", () => {
    expect(keys(undefined)).toEqual([]);
  });
});
