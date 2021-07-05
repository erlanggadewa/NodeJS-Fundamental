const avgExams = (valueExam) => {
  valueExam.every((mark) => typeof mark === "number");
  if (!valueExam) throw new Error("Please Input Number");

  const sumValue = valueExam.reduce((sum, element) => sum + element);
  return sumValue / valueExam.length;
};
module.exports = avgExams;
function fetchUsername() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("JSUser");
    }, 3000);
  });
}

console.log("Fetching username...");
const username = fetchUsername();
console.log(`You are logged in as ${username}`);
console.log("Welcome!");
