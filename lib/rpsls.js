// valid inputs
const rps_array = ["rock", "paper", "scissors"];
const rpsls_array = ["rock", "paper", "scissors", "lizard", "spock"];

// helper function
function getResult(player, opponent, gameRules) {
  const playerIndex = gameRules.indexOf(player);
  const opponentIndex = gameRules.indexOf(opponent);
  const diff = (gameRules.length + playerIndex - opponentIndex) % gameRules.length;

  if (diff === 0) return "tie";
  return (diff % 2 === 0) ? "lose" : "win";
}

// helper function
function playGame(gameArray, playerChoice) {
  const opponent = gameArray[Math.floor(Math.random() * gameArray.length)];

  if (!playerChoice) return { player: opponent };

  const lower = playerChoice.toLowerCase();
  if (!gameArray.includes(lower)) {
    console.error(`${playerChoice} is out of range.`);
    return;
  }

  const result = getResult(lower, opponent, gameArray);
  return { player: playerChoice, opponent, result };
}

// player rps
export function rps(playerChoice) {
  return playGame(rps_array, playerChoice);
}

export function rpsls(playerChoice) {
  return playGame(rpsls_array, playerChoice);
}
