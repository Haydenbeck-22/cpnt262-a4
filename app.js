const args = process.argv.slice(2);
const readline = require("readline");
const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Please enter the distance : ", (distance) => {
  rl.question("please enter the travel speed : ", (speed) => {
    let result = distance / speed;
    let hours = Math.floor(result);
    let minutes = Math.floor(result * 60) % 60;
    console.log(
      `Estimated travel time is ${hours} hours and ${minutes} minutes.`
    );
    rl.close();
  });
});
