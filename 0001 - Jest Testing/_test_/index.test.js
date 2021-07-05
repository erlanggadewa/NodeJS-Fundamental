const averageExams = require("../index");
test("it should return exact average", () => {
  expect(averageExams([0, 1, 2, 3, 4])).toBe(2);
});
