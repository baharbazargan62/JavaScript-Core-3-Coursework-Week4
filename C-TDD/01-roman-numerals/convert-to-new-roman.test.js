let convertToNewRoman = require("./convert-to-new-roman");

test("returns CII if passed 102 as an argument", function () {
 expect(convertToNewRoman(102)).toEqual("CII")
});
test("returns IV if passed 4 as an argument", function () {
  expect(convertToNewRoman(4)).toEqual("IV");
});
test("returns IX if passed 9 as an argument", function () {
  expect(convertToNewRoman(9)).toEqual("IX");
});
test("returns XIV if passed 14 as an argument", function () {
  expect(convertToNewRoman(14)).toEqual("XIV");
});

