// Your first and last name
// 14 APR 2026
// Functions Evidence Test

// Write or set up your three functions

// Function to get BASE of triangle from user
function getBase(){
    const base = parseFloat(prompt("Enter the BASE of the right triangle:"));
    return base;

}




// Function to get HEIGHT of triangle from user
function getHeight(){
    const height = parseFloat(prompt("Enter the HEIGHT of the right triangle:"));
    return height;

}




// Do the math -- calculate the AREA of right triangle
function calculateArea(base, height){
    const area = (base * height) / 2
    return area;
}


const myBase = getBase();
const myHeight = getHeight();
const myArea = calculateArea(myBase, myHeight);

alert(`Base: ${myBase}  Height: ${myHeight}  Area: ${myArea}`);