import { Game } from './Game';

let game: Game;

window.onload = (): void => {
    // instantiate the game
    game = new Game(window.innerWidth, window.innerHeight);

    // load assets
    game.load();

    // called once per loaded/errored file
    game.onLoadProgress.add(() => {
      console.log('%', game.loader.progress);
    });

    // called when all files are loaded
    game.onLoadComplete.add(() => {
        game.start();
    });
};

window.onresize = (): void => {
    game.resize(window.innerWidth, window.innerHeight);
};
