import { Application, MiniSignal, Sprite, loaders } from 'pixi.js';
import { TweenMax } from 'gsap';

export class Game {
    public readonly loader: loaders.Loader;
    private app: Application;

    constructor(width: number, height: number) {
        this.app = new Application(width, height, {
            backgroundColor: 0x1099bb,
            antialias: true
        });
        document.body.appendChild(this.app.view);

        this.loader = new loaders.Loader();
        this.loader.add('cards', './assets/cards.json');
    }

    public load(): void {
        this.loader.load();
    }

    public start(): void {
        const card: Sprite = Sprite.from('cardDiamonds8.png');
        card.anchor.set(0.5, 0.5);
        card.position.set(
            this.app.renderer.width / 2,
            this.app.renderer.height / 2
        );
        this.app.stage.addChild(card);

        TweenMax.to(card, 2, {rotation: Math.PI, repeat: -1});
    }

    public resize(width: number, height: number): void {
        this.app.renderer.resize(width, height);
    }

    public get onLoadProgress(): MiniSignal {
        return this.loader.onProgress;
    }

    public get onLoadComplete(): MiniSignal {
        return this.loader.onComplete;
    }
}
