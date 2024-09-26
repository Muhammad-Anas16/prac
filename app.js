

function per(num1){


    return num1*100/500;

}




var percentage = +prompt("Enter Obtained Mark")

console.log(per(percentage))

if(percentage < 85 && percentage > 100){
    console.log("You Got A")
}
if(percentage < 70 && percentage > 85){
    console.log("You Got B")
}
if(percentage < 60 && percentage > 70){
    console.log("You Got C")
}
if(percentage < 55 && percentage > 70){
    console.log("Pass")
}