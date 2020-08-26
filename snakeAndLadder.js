console.log("welcome to snake and ladder");

const START = 0;
const WIN = 100;
const NO_PLAY_CASE = 0;
const LADDER_CASE = 1;
const SNAKE_CASE = 2;
let diceFaceValue;
let diceRoll = 0;
let playerPositionCurrent = 0;
var lastplayer = 2;
var playerOnePosition = START;
var playerTwoPosition = START;
var record = {};

class SnakeAndLadder {

 simulateGame() {
    diceFaceValue = Math.floor(Math.random() * 6 + 1);
    let playCases = Math.floor(Math.random() * 3);
    diceRoll++;
    switch (playCases) {
        case NO_PLAY_CASE:
            playerPositionCurrent = playerPositionCurrent;
            break;
        case LADDER_CASE:
            playerPositionCurrent = playerPositionCurrent + diceFaceValue;
            break;
        case SNAKE_CASE:
            playerPositionCurrent = playerPositionCurrent - diceFaceValue;
        default:
            break;
    }
    if (playerPositionCurrent > WIN) {
        playerPositionCurrent = playerPositionCurrent - diceFaceValue;
    }
    else if (playerPositionCurrent < START) {
        playerPositionCurrent = START;
    }

    record['Player = ' + lastplayer] = playerPositionCurrent, diceRoll;

}

playTillWinnerDeclared() {
    while (playerPositionCurrent != WIN) {
        this.switchPlayers();
    }
    console.log("Player " + lastplayer + "won");
    console.log("Player positon when game won are :");
    console.log(record);
    console.log("Total Dice rolls to declare winner is  " + diceRoll);
}

switchPlayers() {
    if (lastplayer == 1) {
        lastplayer = 2;
        playerPositionCurrent = playerTwoPosition;
        this.simulateGame();
        playerTwoPosition = playerPositionCurrent;
    }
    else {
        lastplayer = 1;
        playerPositionCurrent = playerOnePosition;
        this.simulateGame();
        playerOnePosition = playerPositionCurrent;
    }
}
}
module.exports = SnakeAndLadder;

