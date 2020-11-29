import words from "../src/words.js";

describe("words", () => {
  it("1: should split sentence into words", () => {
    expect(words("We are writing 11 test cases")).toEqual([
      "We",
      "are",
      "writing",
      "11",
      "test",
      "cases",
    ]);
  });

  it("2: should remove non-alphanumeric characters", () => {
    expect(words("fred, barney, & pebbles")).toEqual([
      "fred",
      "barney",
      "pebbles",
    ]);
    expect(words("fred, barney, // pebbles")).toEqual([
      "fred",
      "barney",
      "pebbles",
    ]);
  });

  it("3: should use pattern if given", () => {
    expect(words("fred, barney, & pebbles", /[^a-z| ]+/g)).toEqual([
        ",",
        ",",
        "&"
    ]);
  });


  it("4: should split string with unicode characters", () => {
    expect(words("fred, barney, \u03B1\u03A9 pebbles")).toEqual([
        "fred",
        "barney",
        "αΩ",
        "pebbles",
    ]);
  });
  it("5: should return empty array if empty string is given", () => {
    expect(words("")).toEqual([]);
  });

  it("6: should return empty array if empty string with pattern is given", () => {
    expect(words("", /[^a-z| ]+/g)).toEqual([]);
  });

});
