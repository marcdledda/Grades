console.log("JS TEST");

// GRADES
// 50-60 = F
// 61-70 = D
// 71-80 = C
// 81-90 = B
// 91-100 = A


// ---EXERCISE---
const scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60];
const grades = []; // You'll need to change this line of code
let numGrades = [0, 0, 0, 0, 0];
console.log(scores);

for (let i = 0; i < scores.length; i++) {
  /*
    If the score is greater than 90, increment grades.A by 1.

    You can use a series of `if/then` blocks, but you could
    also achieve this with a switch statement.
  */
  if (scores[i] < 60) {
    grades.push("F");
  } else if (scores[i] < 70) {
    grades.push("D");
  } else if (scores[i] < 80) {
    grades.push("C");
  } else if (scores[i] < 90) {
    grades.push("B");
  } else if (scores[i] < 100) {
    grades.push("A")
  } else {
    console.log("error output");
  }

  if (grades[i] == "B") {
    1 + numGrades[0];
  }

}
console.log(grades);
console.log(numGrades);