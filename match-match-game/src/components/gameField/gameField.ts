import Card from '../card/card';
import ElementCreator from '../elementCreator/elementCreator';
import './gameField.scss';

export default class GameField extends ElementCreator {
  constructor() {
    super('div', ['game__field']);
  }

  addCards = (cards: Card[]) => {
    cards.forEach((card) => this.element.append(card.element));
  };

  clear = (): GameField => {
    this.element.innerHTML = '';
    return this;
  };
}
