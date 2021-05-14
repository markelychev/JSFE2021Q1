import ElementCreator from '../elementCreator/elementCreator';
import './card.scss';

export default class Card extends ElementCreator {
  readonly img: string;

  private isFlipped: boolean;

  constructor(img: string) {
    super('div', ['card-container']);

    this.img = img;
    this.isFlipped = false;

    this.element.innerHTML = `<div class="card">
            <div class="card__front">front</div>
            <div class="card__back" style="background-image: url(${this.img})">back</div>
          </div>`;
    this.element.addEventListener('click', this.flipToFront);
  }

  flipToFront = () => {
    this.element.classList.add('flipped');
    this.isFlipped = true;
  }
  flipToBack = () => {
    this.element.classList.remove('flipped');
    this.isFlipped = false;
  }
}
