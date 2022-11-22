
let convertToOldRoman = require("./convert-to-new-roman");


test("returns I if passed 3 as an argument", function () {
  expect(convertToOldRoman(1)).toEqual("I");
});
test("returns VII if passed 7 as an argument", function () {
  expect(convertToOldRoman(7)).toEqual("VII");
});
test("returns XV if passed 15 as an argument", function () {
  expect(convertToOldRoman(22)).toEqual("XXII");
});
