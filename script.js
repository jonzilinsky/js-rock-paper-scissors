/* computer choice */
function getcomputerChoice() {
  compMove = Math.floor(Math.random() * 3) + 1;
	if (compMove == 1) {
	compMove = "rock";
  } else if (compMove == 2) {
	compMove = "scissors";
  } else {
	compMove = "paper";
  }
	return compMove;
}

/* human choice */
function getHumanChoice() {
	humanMove = prompt("Choose rock, paper, or scissors", "paper");
	humanMove = humanMove.toLowerCase().trim();
	
	return humanMove;
	}

/* scores */
let humanScore = 0;
let computerScore = 0;

/* single round */
function playRound(compHand, humanHand) {
	console.log('You choose: ' + humanHand);
	console.log('Computer chooses: ' + compHand);
	if (compHand === humanHand) {
		console.log('Tie');
	} else if (compHand === 'rock' && humanHand === 'scissors') {
		console.log('Computer rock smashes Human scissors')
		computerScore += 1;
	} else if (compHand === 'scissors' && humanHand === 'paper') {
		console.log('Computer scissors cuts Human paper')
		computerScore += 1;
	} else if (compHand === 'paper' && humanHand === 'rock') {
		console.log('Computer paper smothers Human rock')
		computerScore += 1;
	} else if (compHand === 'paper' && humanHand === 'scissors') {
		console.log('Human scissors cuts Computer paper')
		humanScore += 1;
	} else if (compHand === 'scissors' && humanHand === 'rock') {
		console.log('Human rock smashes Computer scissors')
		humanScore += 1;
	} else if (compHand === 'rock' && humanHand === 'paper') {
		console.log('Human paper smothers Computer rock')
		humanScore += 1;
	}
}

/* play game */
while (computerScore < 3 && humanScore < 3) {
	playRound(getcomputerChoice(), getHumanChoice());
	console.log('Human score: ' + humanScore + '  Computer score: ' + computerScore);
}

if (humanScore == 3) {
console.log('Human wins!');
} else {
console.log('Computer wins!');
}	
