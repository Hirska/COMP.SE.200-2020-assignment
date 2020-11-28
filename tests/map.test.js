import map from "../src/map.js";

describe("map", () => {

  it("1: should return array with correct value when math operation is given as iteratee", () => {
    expect(map([1,2,3], (n) => { return n-1 })).toEqual([0,1,2]);
  });
  
  it("2: should return array with undefined as value when object is given", () => {
    expect(map({a: 1, b: "test"},(n) => { return n.value })).toEqual([undefined]);
  });
  
  it("3: should return empty array when empty array is given", () => {
    expect(map([], (n) => {return n})).toEqual([]);
  });

  it("4: should return empty array null/undefined is given as array", () => {
    expect(map(null, (n) => {return n})).toEqual([]);
    expect(map(undefined, (n) => {return n})).toEqual([]);
  });
});