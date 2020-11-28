import memoize from "../src/memoize.js";

describe("memoize", () => {
  it("1: should return memoized values if value is changed afterwards", () => {
    const object = { a: 1, b: 2 };
    const values = memoize((a) => Object.values(a));
    expect(values(object)).toEqual([1, 2]);
    object.a = 5;
    expect(object.a).toEqual(5);
    expect(values(object)).toEqual([1, 2]);
  });
  
  it("2: should use custom resolver it is given", () => {
    const multiply = memoize((a, b) => a*b, (a,b) => a+b);

    expect(multiply(1,2)).toEqual(2);
    //Should return 2 as it has same key as previous
    expect(multiply(3,0)).toEqual(2);

    expect(multiply(3,1)).toEqual(3);
  });

  it("3: should clear cache if clear is used", () => {
    const object = { a: 1, b: 2 };
    const values = memoize((a) => Object.values(a));
    expect(values(object)).toEqual([1, 2]);
    object.a = 5;
    expect(object.a).toEqual(5);

    values.cache.clear();
    expect(values(object)).toEqual([5, 2]);
  });

  it('4: should return TypeError when other than function is given as first parameter', () => {
    expect(() => memoize(1)).toThrow(TypeError)
  })

  it('5: should be possible to modify result cache', () => {
    const object = { a: 1, b: 2 };
    const values = memoize((a) => Object.values(a));
    expect(values(object)).toEqual([1, 2]);
    values.cache.set(object, [7,1])
    expect(values(object)).toEqual([7,1]);
  })
});
