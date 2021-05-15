import ElementCreator from '../elementCreator/elementCreator';
import './card.scss';

const flippedClass = 'flipped';

export default class Card extends ElementCreator {
  readonly img: string;

  isFlipped: boolean;

  constructor(img: string) {
    super('div', ['card-container']);

    this.img = img;
    this.isFlipped = false;

    this.element.innerHTML = `<div class="card">
            <div class="card__front">front</div>
            <div class="card__back" style="background-image: url(${this.img})">back</div>
          </div>`;
  }

  flip() {
    this.element.classList.toggle(flippedClass);
    this.isFlipped = !this.isFlipped;
  }
}
