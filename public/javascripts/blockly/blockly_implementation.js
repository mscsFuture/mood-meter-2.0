/** FILE DESC: blockly_implmentation.js **************************************
*   
*   Logic for blockly blocks
*
*******************************************************************************/

async function goLeft(num = 1) {
  console.log("In goLeft()...");
  if (gameFinished) {
    gameFinishedProtocol();
    return;
  }
  else if (playerCol == 0) {
    borderCollisionProtocol()
    return;
  }
  else if ((gridTileArray[playerRow][playerCol-1] != EMPTY)) {
    objectCollisionProtocol();
    return;
  }
  //else if ((playerRow == numRows-1) && playerCol == numCols-1)
  playerCol -= num;
  if (playerCol < 0)
    playerCol = 0;
  drawPlayer();
}

async function goRight(num = 1) {
  console.log("In goRight()...");
  if (gameFinished) {
    gameFinishedProtocol();
    return;
  }
  
  else if (playerCol >= numCols-1) {
    borderCollisionProtocol();
    return;
  }
  else if ((gridTileArray[playerRow][playerCol+1] != EMPTY)) {
    objectCollisionProtocol();
    return;
  }



  playerCol += num;
  if (playerCol >= numCols)
    playerCol = numCols - 1;
  drawPlayer();
  
  if ((playerCol == numCols-1) && (playerRow == numRows-1)) {
    gameWonProtocol();
  }
}

async function goUp(num = 1) {
  console.log("In goUp()...");
  if (gameFinished) {
    gameFinishedProtocol();
    return;
  }
  else if (playerRow == 0) {
    borderCollisionProtocol();
    return;
  }
  else if ((gridTileArray[playerRow-1][playerCol] != EMPTY)) {
    objectCollisionProtocol();
    return;
  }
  playerRow -= num;
  if (playerRow < 0)
    playerRow = 0;
  drawPlayer();
}

async function goDown(num = 1) {
  console.log("In goDown()...");
  if (gameFinished) {
    gameFinishedProtocol();
    return;
  }
  else if (playerRow >= numRows-1) {
    borderCollisionProtocol();
    return;
  }
  else if ((gridTileArray[playerRow+1][playerCol] != EMPTY)) {
    objectCollisionProtocol();
    return;
  }
  playerRow += num;
  if (playerRow >= numRows)
    playerRow = numRows - 1;
  drawPlayer();

  if ((playerCol == numCols-1) && (playerRow == numRows-1)) {
    gameWonProtocol();
  }
}

async function interactLeft() {
  console.log("In interactLeft()...");
  if (gameFinished) {
    gameFinishedProtocol();
    return;
  }
  else if ((playerCol == 0) || (gridTileArray[playerRow][playerCol-1] == EMPTY)) {
    console.log("Player interacted with empty tile!");
    showPlayerConfusedAnimation();
    return;
  }
  beginInteractionWithPlaygroundElement(playerRow,playerCol-1);
}

async function interactRight() {
  console.log("In interactRight()...");
  if (gameFinished) {
    gameFinishedProtocol();
    return;
  }
  else if ((playerCol >= numCols-1) || (gridTileArray[playerRow][playerCol+1] == EMPTY)) {
    console.log("Player interacted with empty tile!");
    showPlayerConfusedAnimation();
    return;
  }
  beginInteractionWithPlaygroundElement(playerRow,playerCol+1);
    
}

async function interactUp() {
  console.log("In interactUp()...");
  if (gameFinished) {
    gameFinishedProtocol();
    return;
  }
  else if ((playerRow <= 0) || (gridTileArray[playerRow-1][playerCol] == EMPTY)) {
    badInteractionProtocol();
    return;
  }
  beginInteractionWithPlaygroundElement(playerRow-1,playerCol);
}

async function interactDown() {
  console.log("In interactDown()...");
  if (gameFinished) {
    gameFinishedProtocol();
    return;
  }
  else if ((playerRow >= numRows-1) || (gridTileArray[playerRow+1][playerCol] == EMPTY)) {
    badInteractionProtocol();
    return;
  }
  beginInteractionWithPlaygroundElement(playerRow+1,playerCol);
}



function borderCollisionProtocol() {
  console.log("Player crashed into a border!");
  gameFinished = true;
  showPlayerConfusedAnimation();
}

function objectCollisionProtocol() {
  console.log("Player crashed into a playground object!");
  gameFinished = true;
  showPlayerConfusedAnimation();
}

function badInteractionProtocol() {
  console.log("Player interacted with empty tile!");
  gameFinished = true;
  showPlayerConfusedAnimation();
}

function gameFinishedProtocol() {
  console.log("Game is finished, do nothing...");
}

function gameWonProtocol() {
  console.log("Congrats! You won!");
  gameFinished = true;
  showPlayerWinAnimation();
}