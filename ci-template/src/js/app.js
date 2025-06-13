// TODO: write your code here
// import sum from './basic';

// console.log('app worked');

// console.log(sum([1, 2]));

import Game, {
  GameSavingData,
  readGameSaving as loadGame,
  writeGameSaving as saveGame,
} from './game.js';

const game = new Game();
game.start();