// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85
const input = require("readline-sync");
let word = "";
// let word = "";
const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};
// function oldScrabbleScorer(word) {
//   word = word.toUpperCase();
// 	let letterPoints = "";
 
// 	for (let i = 0; i < word.length; i++) {
 
// 	  for (const pointValue in oldPointStructure) {
 
// 		 if (oldPointStructure[pointValue].includes(word[i])) {
// 			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
// 		 }
 
// 	  }
// 	}
// 	return letterPoints;
//  }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
  
  console.clear();
  
  console.log("Let's play some Scrabble!\n");
  
  word = input.question("Enter a word to score: ")
 
  console.log(oldScrabbleScorer(word));
  console.log(simpleScore(word));
  console.log(vowelBonusScore(word));

  return word
};

//  function simpleScore(word){
//   let simpleScore = word.length; 
//   console.log(`Simple Score is: ${Number(simpleScore)}`);
// };

// function vowelBonusScore(word){
// word = word.toUpperCase();
// let vowelsObject = {
//   3: ["A","E","I","O","U"]
// }
// let vowelBonusScore = 0
//   for (let i = 0; i < word.length;i ++){

//     for (const vowelBonusPointValue in vowelsObject) {

//     if (vowelsObject[vowelBonusPointValue].includes(word[i])){
//     (vowelBonusScore += 3);

//   } else (vowelBonusScore += 1);

//   }
//   }
//  console.log(`Vowel Bonus Score is: ${vowelBonusScore}`);
// }

function scrabbleScore(word) {
  // console.log(word)
  word = word.toUpperCase();
  let letterPoints = ""
  for (let i = 0; i < word.length; i++){

    for(const letter in newPointStructure){
      if (letter.includes(word[i])) {
        letterPoints += `Points for '${word[i]}': ${newPointStructure[letter]}\n`
      }
    }
  }
  return letterPoints
}
// let scrabbleScore;
  let oldScrabbleScorer = {
    name: "Classic Scrabble",
    description: "The traditional scoring algorithm.",
    scoringFunction: function oldScrabbleScorer(word) {
      word = word.toUpperCase();
	    let letterPoints = "";
 
	    for (let i = 0; i < word.length; i++) {
 
	      for (const pointValue in oldPointStructure) {
 
		      if (oldPointStructure[pointValue].includes(word[i])) {
		    	  letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		      }
 
	      }
	    }
	    return letterPoints;
    }

  };
  let simpleScore = {
   name: "Simple Score",
   description: "Each Letter is worth 1 point.",
   scoringFunction: function simpleScore(word){
      let simpleScore = word.length; 
      // console.log(`Simple Score is: ${Number(simpleScore)}`);
      return simpleScore;
    }
  };

  let vowelBonusScore = {
    name: "Bonus Vowel",
    description: "Vowels are Worth 3 pts Constants are worth 1 pt",
    scoringFunction : function vowelBonusScore(word){
      word = word.toUpperCase();
      let vowelsObject = {
        3: ["A","E","I","O","U"]
      }
      let vowelBonusScore = 0
      for (let i = 0; i < word.length;i ++){

        for (const vowelBonusPointValue in vowelsObject) {

          if (vowelsObject[vowelBonusPointValue].includes(word[i])){
            (vowelBonusScore += 3);

                
          } else {
            vowelBonusScore += 1 

          }
        }
        // console.log(`Vowel Bonus Score is: ${vowelBonusScore}`);
      }
      return vowelBonusScore;
    }
  };

let scoringAlgorithms = [vowelBonusScore,simpleScore,oldScrabbleScorer];
scoringAlgorithms[oldScrabbleScorer.scoringFunction] = scrabbleScore;
function initialPrompt() {
  
  console.clear();
  
  console.log("Let's play some Scrabble!\n");
  word = input.question("Enter a word to score: ")
  
  // console.log(oldScrabbleScorer.scoringFunction(word));
  // console.log(simpleScore.scoringFunction(word));
  // console.log(vowelBonusScore.scoringFunction(word));
};

// Finish writing scorerPrompt() so that the user can select which scoring algorithm to use when the program scores their word. Use the selected algorithm to determine the score for the word:

// If the user enters 0, have the program output a score using the simple scorer.
// If the user enters 1, use the vowel bonus scoring function.
// If the user enters 2, use the Scrabble scoring option.
// scorerPrompt() should return the object the user has selected.
function scorerPrompt() {
 let userRulesChoice = input.question("What scoring method would you like to use?\n\nEnter 0 for Simple Score Rules\nEnter 1 Vowel Bonus Rules\nEnter 2 for Classic Scrabble Rules\nYour Choice?:");

    if (userRulesChoice === "0"){
      console.log(`Scoring Method you chose is "Simple Score" Total Points ${simpleScore.scoringFunction(word)}`);
        return (simpleScore.scoringFunction(word));
      }else if (userRulesChoice == "1"){
        console.log(`Scoring Method you chose is "Vowel Bonus" Total Points ${vowelBonusScore.scoringFunction(word)}`);
           return (vowelBonusScore.scoringFunction(word));
        }else if (userRulesChoice == "2"){
          console.log(`Scoring Method you chose is "Classic Scrabble"\n${oldScrabbleScorer.scoringFunction(word)}`);
           return (oldScrabbleScorer.scoringFunction(word));
           
          }
        
    }
  
 

function transform(scoreObject) {
  let newScrabbleRules = {};
  for(let item in scoreObject) {
    let newKey = scoreObject[item]
    // console.log({newKey});
    for(i = 0; i < newKey.length;i ++){
      newScrabbleRules[newKey[i].toLowerCase()] = Number(item);
      
  }
  } 
  console.log(newScrabbleRules);
  return newScrabbleRules
}
let newPointStructure = transform(oldPointStructure);
// scorerPrompt(word)
function runProgram() {
   initialPrompt();
   scorerPrompt();
  // console.log(scrabbleScore(word));
  //  transform(oldPointStructure);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

