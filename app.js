function per(num1){
    return num1 * 100 / 500;
}

var obtainedMarks = +prompt("Enter Obtained Marks out of 500"); // User input
var percentage = per(obtainedMarks); // Calculate percentage

if (percentage <= 100 && percentage >= 85) {
    console.log("You Got A");
} else if (percentage < 85 && percentage >= 70) {
    console.log("You Got B");
} else if (percentage < 70 && percentage >= 60) {
    console.log("You Got C");
} else if (percentage < 60 && percentage >= 55) {
    console.log("Pass");
} else {
    console.log("Fail");
}
