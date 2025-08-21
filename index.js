//13. Basic Mathematical Operations
let num1;
num1 = prompt("enter the num1");
let operation = prompt("enter the operation");
let num2;
num2 = prompt("enter the num2");
switch (operation) {
  case "+":
    console.log(num1 + num2);
    break;
  case "-":
    console.log(num1 - num2);
    break;
  case "*":
    console.log(num1 * num2);
    break;
  case "/":
    console.log(num1 / num2);
    break;
  default:
    console.log("invalid operation");
    break;
}

//14. To Square Root or Not
let arr = [4, 3, 9, 7, 2, 1];
var pop = [];
for (let i = 0; i < arr.length; i++) {
  pop = Math.sqrt(arr[i]);
  if (Number.isInteger(pop)) {
    console.log(arr[i] + " is a perfect square");
  } else {
    console.log(arr[i] * arr[i]);
  }
}

//15. Count by X
function countBy(n, x) {
  for (let i = 0; i < x; i++) {
    console.log(n * (i + 1));
  }
}
countBy(3, 4);

//16. Remove String Spaces
function removeSpace(name) {
  console.log(name.replace(/\s/g, ""));
  // console.log(name.trim());
  // console.log(name.split(" ").join(""));
}
removeSpace("  Ibrahim   Essam  ");
