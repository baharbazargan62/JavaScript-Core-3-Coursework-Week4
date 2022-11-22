let passwordVerifier = require("./password-verifier");

test("returns password rejected if password length is less than 8", function () {

  expect(passwordVerifier("asdf")).toEqual("password rejected")
});
test("returns password rejected if password is null", function () {

    expect(passwordVerifier("")).toEqual("password rejected")
  });
  test("returns password rejected if it does not include at least one uppercase letter", function () {

    expect(passwordVerifier("asdfghhy")).toEqual("password rejected")
  });
  test("returns password rejected if it does not include at least one number ", function () {

    expect(passwordVerifier("asdfwAfD")).toEqual("password rejected")
  });
