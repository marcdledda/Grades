console.log("JS TEST");

// GRADES
// 50-60 = F
// 61-70 = D
// 71-80 = C
// 81-90 = B
// 91-100 = A


// ---EXERCISE---
const scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60];
const grades = [];
console.log(scores);
var a = 0;
var b = 0;
var c = 0;
var d = 0;
var f = 0;

for (let i = 0; i < scores.length; i++) {
  /*
    If the score is greater than 90, increment grades.A by 1.

    You can use a series of `if/then` blocks, but you could
    also achieve this with a switch statement.
  */
  if (scores[i] < 60) {
    grades.push("F");
    f += 1;
  } else if (scores[i] < 70) {
    grades.push("D");
    d += 1;
  } else if (scores[i] < 80) {
    grades.push("C");
    c += 1;
  } else if (scores[i] < 90) {
    grades.push("B");
    b += 1;
  } else if (scores[i] < 100) {
    grades.push("A")
    a += 1;
  } else {
    console.log("error output");
  }

}
console.log(grades);
console.log("There are " + a + " A's");
console.log("There are " + b + " B's");
console.log("There are " + c + " C's");
console.log("There are " + d + " D's");
console.log("There are " + f + " F's");

console.log("Highest Score is " + Math.max.apply(null, scores));
console.log("Lowest Score is " + Math.min.apply(null, scores));

function highestGrade() {
  let upGrade = [];
  if (a >= b && a >= c && a >= d && a >= f) {
    upGrade.push("A has the highest amount of students");
  }
  if (b >= a && b >= c && b >= d && b >= f) {
    upGrade.push("B has the highest amount of students");
  }
  if (c >= a && c >= b && c >= d && c >= f) {
    upGrade.push("C has the highest amount of students");
  }
  if (d >= a && d >= b && d >= c && d >= f) {
    upGrade.push("D has the highest amount of students");
  }
  if (f >= a && f >= b && f >= c && f >= d) {
    upGrade.push("F has the highest amount of students");
  }
  console.log(upGrade);
}

function lowestGrade() {
  let downGrade = [];
  if (a <= b && a <= c && a <= d && a <= f) {
    downGrade.push("A has the lowest amount of students");
  }
  if (b <= a && b <= c && b <= d && b <= f) {
    downGrade.push("B has the lowest amount of students");
  }
  if (c <= a && c <= b && c <= d && c <= f) {
    downGrade.push("C has the lowest amount of students");
  }
  if (d <= a && d <= b && d <= c && d <= f) {
    downGrade.push("D has the lowest amount of students");
  }
  if (f <= a && f <= b && f <= c && f <= d) {
    downGrade.push("F has the lowest amount of students");
  }
  console.log(downGrade);
}

highestGrade();
lowestGrade();