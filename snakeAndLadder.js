console.log("welcome to snake and ladder");

var playerStartPostion = 0;
const NO_PLAY_CASE = 0;
const LADDER_CASE = 1;
const SNAKE_CASE = 2;

let playerPositionCurrent = 0;
function simulateGame() {

    let diceFaceValue = Math.floor(Math.random() * 6 + 1);
    
    let playCases = Math.floor(Math.random()*3);

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
}
simulateGame();