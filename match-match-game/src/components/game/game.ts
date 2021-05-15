import delay from '../../assets/helpers/delay';
import Card from '../card/card';
import ElementCreator from '../elementCreator/elementCreator';
import GameField from '../gameField/gameField';
import './game.scss';

const delayStart = 5000;
const delayFlip = 3000;

export default class Game extends ElementCreator {
  private size: number;
  private cards: Card[];
  private flippedCard?: Card;
  private isAnimation: boolean

  private readonly images: string[];

  private readonly gameField = new GameField();

  constructor(imgs: string[], size = 4) {
    super('div', ['game']);
    this.size = size;
    this.isAnimation = false;
    this.images = [...imgs];
    this.element.appendChild(this.gameField.element);
    this.cards = this.createCards();
    this.addHandlers();
  }

  private addHandlers = () => {
    this.cards.forEach((card) => card.element.addEventListener('click', () => this.cardHandler(card)));
  };

  private cardHandler = async (card: Card) => {
    if (this.isAnimation) {
      return;
    }

    this.isAnimation = true;

    if (card.isFlipped) {
      this.isAnimation = false;
      return;
    }

    if (!this.flippedCard) {
      this.flippedCard = card;
      this.isAnimation = false;
      card.flip();
      return;
    }

    if (this.flippedCard !== card) {
      card.flip();
      if (this.flippedCard.img === card.img) {
        console.log('win');
      } else {
        await delay(delayFlip);
        this.flippedCard.flip();
        card.flip();
      }
    }

    this.isAnimation = false;
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
    }, delayStart);

    return this;
  };
}
