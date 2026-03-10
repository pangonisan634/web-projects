// Andrew Pangonis
// 10 MAR 2026
// JS Report Card

// Declare variables
const firstName = "Leo";
const lastName = "Mulholland";
const gradeLevel = 11;
const course = "Biology";

const quiz1 = 97;
const quiz2 = 88;
const quiz3 = 100;
const quiz4 = 92;

// Write formula to do the math
const totalPoints = quiz1 + quiz2 + quiz3 + quiz4;

const numQuizzes = 4;

const averageScore = totalPoints / numQuizzes;

// Show student info and the student's scores and average

// Template string
console.log(`First Name: ${firstName}`);
console.log(`Last Name: ${lastName}`);
console.log(`Grade Level: ${gradeLevel}`);
console.log(`Class: ${course}`);
console.log(`Quiz 1 Score: ${quiz1}`);
console.log(`Quiz 2 Score: ${quiz2}`);
console.log(`Quiz 3 Score: ${quiz3}`);
console.log(`Average Score: ${averageScore}`);
