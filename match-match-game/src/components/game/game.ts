import Card from "../card/card";
import ElementCreator from "../elementCreator/elementCreator";
import GameField from "../gameField/gameField";
import "./game.scss";

export default class Game extends ElementCreator {
  private size: number;
  private cards: Card[];
  private readonly images: string[];
  private readonly gameField = new GameField();

  constructor(imgs: string[], size: number = 4) {
    super("div", ["game"]);
    this.size = size;
    this.images = imgs;

    this.element.appendChild(this.gameField.element);
    this.cards = this.createCards();
  }

  get imgForGame(): string[] {
    return this.images
      .splice(0, this.size)
      .concat(this.images.splice(0, this.size));
  }

  createCards = (): Card[] => {
    return this.imgForGame.map((url) => new Card(url));
  };

  start = () => {
    this.gameField.clear().addCards(this.cards);
    return this;
  };
}
