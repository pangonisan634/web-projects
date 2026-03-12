// Andrew Pangonis
// 12 MAR 2026
// Superhero assignment

// Declare variables
const heroes = ["Spider-Man", "Iron Man", "Mr. Fantastic", "Deadpool", "Superman"];
heroes[1] = "Mr. Terrific"

console.log(heroes[0]);
console.log(heroes[2]);
console.log(heroes.at(-1));
console.log(`The leader of the team is now ${heroes[1]}`);
console.log(`The full array is: ${heroes}`);
console.log(`New Mission: ${heroes[0]} and ${heroes[1]} will lead ${heroes[2]}, ${heroes[3]}, and ${heroes[4]} into battle.`)