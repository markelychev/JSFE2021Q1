import delay from '../../helpers/delay';
import Card from '../card/card';
import ElementCreator from '../elementCreator/elementCreator';
import GameField from '../gameField/gameField';
import Timer from '../timer/timer';
import './game.scss';

const delayStart = 5000;
const delayFlip = 3000;

export default class Game extends ElementCreator {
  private flippedCard?: Card;

  private isAnimated: boolean;

  private matched: number;

  private readonly size: number;

  private readonly cards: Card[];

  private readonly images: string[];

  private readonly gameField = new GameField();

  private readonly gameTimer = new Timer();

  constructor(imgs: string[], size = 4) {
    super('div', ['game']);
    this.size = size;
    this.matched = 0;
    this.isAnimated = false;
    this.images = [...imgs];
    this.element.appendChild(this.gameTimer.element);
    this.element.appendChild(this.gameField.element);
    this.cards = this.createCards();
    this.addHandlers();
  }

  private addHandlers = () => {
    // TODO cards: Map<> слушателя на this.element
    this.cards.forEach((card) => card.element.addEventListener('click', () => this.cardHandler(card)));
  };

  private cardHandler = async (card: Card) => {
    if (this.isAnimated) {
      return;
    }

    this.isAnimated = true;

    if (card.isFlipped) {
      this.isAnimated = false;
      return;
    }

    if (!this.flippedCard) {
      this.flippedCard = card;
      this.isAnimated = false;
      card.flip();
      return;
    }

    if (this.flippedCard !== card) {
      card.flip();
      if (this.flippedCard.img === card.img) {
        console.log('win');
        this.matched++;
        if (this.matched === this.size) {
          this.gameTimer.stop();
        }
      } else {
        await delay(delayFlip);
        this.flippedCard.flip();
        card.flip();
      }
    }

    this.isAnimated = false;
    this.flippedCard = undefined;
  };

  get imgForGame(): string[] {
    const slice = this.images.slice(0, this.size);
    return slice.concat(slice);
  }

  private createCards = (): Card[] => this.imgForGame.map((url) => new Card(url));

  start = (): Game => {
    this.gameField.clear().addCards(this.cards);
    this.cards.forEach((card) => {
      card.flip();
    });
    setTimeout(() => {
      this.cards.forEach((card) => {
        card.flip();
      });
      this.gameTimer.run();
    }, delayStart);

    return this;
  };
}
