let add = require("./calculator");

test("returns 0 if length of string is 0", function () {

    expect(add("")).toEqual(0)
  });
  test("returns 1 digit if the length of string of number is 1", function () {

    expect(add("2")).toEqual(2)
  });
  test("returns sum of the string of numbers ", function () {

    expect(add("1,4,8")).toEqual(13)
  });
  test("returns negarives are not allowed:", function () {

    expect(add("-1,4,-5")).toEqual("negarives are not allowed:-1,-5")
  });
  test("returns numbers of greater than 1000 are ignored", function () {

    expect(add("1001,2")).toEqual("2")
  });
