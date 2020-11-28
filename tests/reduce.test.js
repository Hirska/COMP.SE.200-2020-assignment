import reduce from "../src/reduce.js";

describe("reduce", () => {
    
  it("1: should return sum for given array", () => {
    expect(reduce([1, 2], (sum, n) => sum + n, 0)).toEqual(3);
  });
  
  it("2: should return sum for given array if initial value is not given", () => {
    expect(reduce([1, 2], (sum, n) => sum + n)).toEqual(3);
  });
  
  it("3: should return values in array when object is given", () => {
    expect(reduce({ 'a': 1, 'b': 2, 'c': 1 }, (acc, value) => acc.concat(value), [])).toEqual([1,2,1]);
  });

  it("4: should return initial value when array is null/undefined", () => {
    expect(reduce(null, (acc, value) => acc.concat(value), [])).toEqual([]);
    expect(reduce(undefined, (acc, value) => acc.concat(value), [])).toEqual([]);
  });

  it("5: should return undefined when array is null/undefined and initial value not given", () => {
    expect(reduce(null, (acc, value) => acc.concat(value))).toEqual(undefined);
    expect(reduce(undefined, (acc, value) => acc.concat(value))).toEqual(undefined);
  });

});