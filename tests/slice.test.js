import slice from "../src/slice.js";

describe("slice", () => {
    
  it("1: should use array.length when end value not given", () => {
    expect(slice([1, 2, 3, 4], 2)).toEqual([3,4]);
  });
  it("2: should use 0 as starting value when start position not given", () => {
    expect(slice([1, 2, 3, 4], null,2)).toEqual([1,2]);
  });
  it("3: should use array.length when end value not given", () => {
    expect(slice([1, 2, 3, 4],1,3)).toEqual([2,3]);
  });
  it("4: should return 0 if array.length < negative starting index is given", () => {
    expect(slice([1, 2, 3, 4],-5)).toEqual([1,2,3,4]);
  });
  it("5: start position is counted as offset when negative value is given", () => {
    expect(slice([1, 2, 3, 4],-1)).toEqual([4]);
  });
  it("6: end position is counted as offset when negative value is given", () => {
    expect(slice([1, 2, 3, 4],null, -1)).toEqual([1,2,3]);
  });
  it("7: should use array.length if bigger than array.length value is given", () => {
    expect(slice([1, 2, 3, 4], 1, 5)).toEqual([2,3,4]);
  });
  it("8: should return empty array when non-array is given", () => {
    expect(slice({a:1, b:2}, 1)).toEqual([]);
  });
  it("9: should return empty array when null or undefined is given as array", () => {
    expect(slice(null)).toEqual([]);
    expect(slice(undefined)).toEqual([]);
  });
  it("10: should return empty array when starting position is bigger than ending", () => {
    expect(slice([1, 2, 3, 4], 3, 1)).toEqual([])
  });
});